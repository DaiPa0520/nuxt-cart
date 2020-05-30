<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <div v-for="(item,i) in layout">
          {{item.type}}
          <!-- <IndexLayout1  :res="item" /> -->
          <component :is="'IndexLayout'+item.type" :res="item" ></component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  // layout:"common",
  data: function() {
    // 資料
    return {
      layout: [], //
      dd: "123"
    };
  },
  async asyncData({ context, app, store }) {
    let data = {
      layout:[]
    };
    // 首頁相關
    let result = await store.dispatch("web/get_website", {
      app: app,
      token: store.state.other.token,
      condition: null
    });
    if(result.data.length !== 0){
       data.layout = result.data[0].layout;
    }
  
   console.log("result>>>>>",result.data)
    return data;
  },
  async fetch({ store, $axios, app }) {},
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
      get_product: "product/get_product"
    }),
    ...mapMutations({
      set_product_list: "product/set_product_list"
    }),
    async test() {}
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
   created:async function() {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.loading(true);
 
    //  let result = await this.$store.dispatch("web/get_website", {
    //   app: this,
    //   token: this.$store.state.other.token,
    //   condition: null
    // });
      //  console.log(result);
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: async function() {
    //元素已掛載， el 被建立。
    this.loading(false);
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
