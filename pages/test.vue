<template>
  <div id="page">
    asdsad
    <button @click="test()" >AAAAAAAAA</button>
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
    

    console.log("test>>>>>");
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
    async test() {
      console.log("testttt");
       const token = await this.$axios.$get('http://localhost/api/list.php')
    .then((response) => {
      console.log("response.headers",response.headers);
      console.log("response",response);
    });
    return token;
    }
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: async function() {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.loading(true);

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
