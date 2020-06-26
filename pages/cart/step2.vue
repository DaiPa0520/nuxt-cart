<template>
  <div id="page">
    <section class="content">
      <Step />
      <div class="container">
        <div class="row">
          <div class="content col-md-9" style="min-height:500px">
            <h5>付款運送方式</h5>
            <div>
              <div class="w-100 mb-4">
                <!-- 付款運送方式 -->
                <div class="row">
                  <div class="col-md-6 pr-2 mb-3 shipping">
                    <button
                      type="button"
                      class="shipping-method"
                      @click="active='store'"
                      :class="{'on-active':active==='store'}"
                    >
                      <div class="shipping-label">
                        <div>
                          <span>
                            <i
                              class="pr-2"
                              :class="{'fas fa-check-circle':active==='store','far fa-circle ':active!=='store'}"
                            ></i>超商
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div class="col-md-6 pr-2 mb-3 shipping">
                    <button
                      type="button"
                      class="shipping-method"
                      @click="active='home'"
                      :class="{'on-active':active==='home'}"
                    >
                      <div class="shipping-label">
                        <div>
                          <span>
                            <i
                              class="pr-2"
                              :class="{'fas fa-check-circle':active==='home','far fa-circle ':active!=='home'}"
                            ></i>宅配
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <!-- 超商選項 -->
                <div class="from-group mb-3">
                  <!-- 配送方式 -->
                  <div class="row">
                    <div class="col-md-2 float-left">配送方式</div>
                    <div class="col-md-10 float-left">
                      <div class="row">
                        <div v-for="(item,i) in home_list" class="col-md-4 pr-2 mb-3">
                          <ButtonChoice
                            :title="item.title"
                            :free="free_shipping"
                            :active="delivery_type===item.id"
                            @selected="delivery_type=item.id"
                          />
                        </div>
                        <button
                          type="button"
                          @click="get_cvsStore()"
                          class="l-btn pick-btn btn-block mt-3 ml-3"
                        >選擇取貨門市</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="from-group mb-3" v-if>
                  <!-- 付款方式 -->
                  <div class="row">
                    <div class="col-md-2 float-left">付款方式</div>
                    <div class="col-md-10 float-left">
                      <div class="row">
                        <div v-for="(item,i) in store_list" class="col-md-4 pr-2 mb-3">
                          <ButtonChoice
                            :title="item.title"
                            :free="free_shipping"
                            :active="pay_type===item.id"
                            @selected="pay_type=item.id"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 備註 -->
                <div class="from-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">備註</div>
                    <div class="col-md-10 float-left">
                      <input class="form-control" type="text" placeholder="Default input" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右邊結帳金額 -->
          <div class="col-md-3">
            <div class="checkout-amount-wrap">
              <ul class="list-unstyled components checkout-amount">
                <li>
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">結帳金額</a>
                </li>
                <li class="collapse list-unstyled" id="homeSubmenu">
                  商品小計
                  <span class="float-right">489</span>
                </li>
                <li>
                  運費
                  <span class="float-right">0</span>
                </li>
                <li>
                  應付總額
                  <span class="price float-right">
                    NT$
                    <span class="total">489{{delivery_type}}-{{pay_type}}</span>
                  </span>
                </li>
                <li>
                  <button @click="toStep3()" class="w-100 btn btn-outline-primary btn-sm">前往結帳</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  data() {
    return {
      free_shipping: false,
      active: "store",
      delivery_type: "",
      pay_type: "",
      store_list: [],
      home_list: [],
      render_id: ""
    };
  },
  watch: {
    // SSR此頁面 會觸發
    "$store.state.cart.info": async function(after, before) {
      switch (true) {
        case after.state == 1 && after.id != "":
          await this.get_lockCar();
          this.loading(false);
          break;
        default:
          this.loading(false);
      }
    }
  },
  methods: {
    ...mapActions({
      loading: "loading",
      _store: "_store"
    }),

    switchType: function(type) {
      this.active = type;
      this.active_type = "1";
    },

    get_lockCar: async function() {
      let cart_info = this.$store.state.cart.info;
      console.log(cart_info);
      let cond = Struct.fromJavaScript({
        car_id: cart_info.id
      });

      let result = await this.$store.dispatch("cart/get_lockCar", {
        condition: cond
      });

      if (result.code === 200) {
      } else {
        alert(result.data);
      }
      return true;
    },

    get_external: async function() {
      let result = await this.$store.dispatch("cash/get_external", {
        condition: null
      });
      console.log("result>>>", result);
      if (result.code === 0) {
        alert(result.data);
        return false;
      }

      for (let i in result.data) {
        let d = result.data[i];
        let o = {
          id: `${d.service}${d.service_type}${d.service_item}`,
          title:
            d.remark != "" ? `${d.name.tw}<br>(${d.remark})` : `${d.name.tw}`
        };
        // 物流
        if (d.service_type == 2) this.home_list.push(o);
        else this.store_list.push(o);
      }
      return true;
    },

    get_cvsStore: async function() {
      let cond = Struct.fromJavaScript({
        LogisticsType: "CVS",
        LogisticsSubType: "FAMI"
      });
      let resp = await this.$store.dispatch("order/get_cvsStore", {
        condition: cond
      });
      console.log("get_cvsStore>>>>>", resp);
      if (resp.code == 0) {
        alert(resp.data);
        return;
      } else {
        this.render_id = resp.data.RenderID;
        window.open(
          `${process.env.STORE_URL}${resp.data.Redirect}`,
          "abc",
          "width=400,height=250"
        );
      }
    },

    get_cvsStoreInfo: async function() {
      let cond = Struct.fromJavaScript({
        RenderID: this.render_id
      });
      let resp = await this.$store.dispatch("order/get_cvsStoreInfo", {
        condition: cond
      });
      console.log("get_cvsStoreInfo>>>>>", resp);
      if (resp.code == 0) {
        alert(resp.data);
        return;
      } else {
        let o = {
          logistics_type: this.delivery_type,
          payment_type: this.pay_type,
          logistics: resp.data
        };
        this._store({ act: "order/update_order", data: o });
      }
    },

    toStep3: async function() {
      console.log("render id>>>",this.render_id)
      if (this.render_id == "") return;
      await this.get_cvsStoreInfo();
      this.$router.push("/cart/step3");
    }
  },
  mounted: async function() {
    this.loading(true);
    // ssr 過來此頁面 不動作 監聽觸發
    if (this.$store.state.cart.info.state == 1) {
      await this.get_lockCar();
    }

    let res = await this.get_external();
    if (res) this.loading(false);
  }
};
</script>
<style lang="scss" scoped>
</style>