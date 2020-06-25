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
                <div class="row">
                  <div class="col-md-6 pr-2 mb-3 shipping">
                    <button type="button" class="shipping-method"  @click="active='store'" :class="{'on-active':active==='store'}">
                      <div class="shipping-label">
                        <div>
                          <span>
                            <i class="pr-2" :class="{'fas fa-check-circle':active==='store','far fa-circle ':active!=='store'}" ></i>超商
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div class="col-md-6 pr-2 mb-3 shipping">
                    <button type="button" class="shipping-method" @click="active='home'" :class="{'on-active':active==='home'}" >
                      <div class="shipping-label">
                        <div>
                          <span>
                            <i class="pr-2" :class="{'fas fa-check-circle':active==='home','far fa-circle ':active!=='home'}" ></i>宅配
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="from-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left">配送方式</div>
                    <div class="col-md-10 float-left">
                      <div class="row">
                        <div  v-for="(item,i) in home_list"  class="col-md-4 pr-2 mb-3">
                          <ButtonChoice 
                            :title="item.title"
                            :free="free_shipping"
                            :active="delivery_type===i"
                            @selected="delivery_type=i"
                          />
                        </div>
                        <button type="button" class="l-btn pick-btn btn-block mt-3 ml-3">選擇取貨門市</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="from-group mb-3" v-if="" >
                  <div class="row">
                    <div class="col-md-2 float-left">付款方式</div>
                    <div class="col-md-10 float-left">
                      <div class="row">
                        <div  v-for="(item,i) in home_list"  class="col-md-4 pr-2 mb-3">
                          <ButtonChoice 
                            :title="item.title"
                            :free="free_shipping"
                            :active="pay_type===i"
                            @selected="pay_type=i"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <span class="total">489</span>
                  </span>
                </li>
                <li>
                  <nuxt-link tag="button"  class="w-100 btn btn-outline-primary btn-sm" to="/cart/step3">前往結帳</nuxt-link>
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
      free_shipping:false,
      active:'store',
      delivery_type:'',
      pay_type:'',
      store_list:[
        {id:1  , title:'7-11取貨(先付款)' },
        {id:2  , title:'7-11取貨' },
        {id:3  , title:'全家取貨(先付款)' },
        {id:4  , title:'全家貨到付款' },
      ],
      home_list:[
        {id:1  , title:'信用卡<br>(VISA、MasterCard、JCB)' },
        {id:2  , title:'超商代碼<br>(VISA、MasterCard、JCB)' },
        {id:3  , title:'虛擬ATM' },
        {id:4  , title:'支付寶' },
        {id:5  , title:'LINE PAY<br>(可用LINE點數折抵)' },
        {id:6  , title:'銀聯卡<br>(UnionPay)' },
        {id:7  , title:'信用卡<br>(僅限國外客戶使用)' },
      ],
    };
  },
   methods: {
     ...mapActions({
      loading: "loading",
      // get_lockCar:"cart/get_lockCar",
      _store: "_store"
    }),
    switchType: function(type) {
      this.active = type;
      this.active_type = '1' 
    },
    get_lockCar:async function(){
      
      let cart_info = JSON.parse(localStorage.getItem('cart_info'))
      console.log(cart_info)
      if(cart_info == null || cart_info.id == null || cart_info.state != 1 ) {
        this.$router.push('/')
        return false;
      }
      let cond = Struct.fromJavaScript({
        car_id: cart_info.id
      });

      let result = await this.$store.dispatch("cart/get_lockCar", {
        app: this,
        token: this.$store.state.other.token,
        condition: cond
      });
      console.log("result>>>", result);
      if (result.code === 200) {
        
      }else{
        alert(result.data)
      }
      return true ;
    }

  },
  mounted: async function() {
    this.loading(true)
    // let cond = new this.sqlpb.Commodity();
    // cond.setF("car_id").setV(route.params.id);
    let res = await this.get_lockCar()
    console.log("bbbb")
    if(res) this.loading(false)
  }
};
</script>
<style lang="scss" scoped>
</style>