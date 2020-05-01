<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->
        <Breadcrumb />
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-10">
            <div class>
              <img src="/images/banner01.png" class="img-fluid" alt="Responsive image" />
            </div>
            <div class>
              <template v-for="(item,i) in list">
                <Products :data="item" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footers />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function() {
    // 資料
    return {
      list: [] //
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
    }),
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.loading(true)
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    //元素已掛載， el 被建立。
    let rpc = new this.shopRPC.ShopRPCClient("https://shop.4ding.site");
    let sqlpb = new this.sqlpb.Query();
    rpc.findProductF(
      sqlpb,
      { "x-4d-token": this.$store.state.token },
      (err, resp) => {
        if (err !== null) {
          console.log(err);
          return;
        }
        this.list = resp.getResult().toJavaScript();
        this.loading(false)
      }
    );
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
};
</script>

<style >

</style>
