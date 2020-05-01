<template>
  <div id="page">
    <br>
    {{list}} <br>
  <button type="button" @click="test()" class="btn btn-primary">Sign in</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      token: "",
      dd: "666",
      buffer:{},
      list:[]
    };
  },
  created() {
    console.log(8888888888888)
  },
  // async asyncData(context) {
  //   // const token = await app.$axios.$get("https://ingress.4ding.site/guest");
  //   console.log('------------->')
  //   console.log(context)
  //   // app.$a.findProductF(app.$s,{ "x-4d-token":token },(err,resp)=>{
  //   //     this.list =  resp.getResult().toJavaScript()
  //   //     // store.commit('set_product_list', resp.getResult().toJavaScript())
  //   //   } ) ;
  //   // console.log(app.$myVar) // should print test in the console
  // },
  async asyncData({app}){
    const token = await app.$axios.$get("https://ingress.4ding.site/guest");
    let rpc = new app.$shopRPC.ShopRPCClient ('https://shop.4ding.site');
     let sqlpb = new app.$sqlpb.Query();
     rpc.findProductF(sqlpb ,{ "x-4d-token":token },(err,resp)=>{
        console.log( resp )
        // store.commit('set_product_list', resp.getResult().toJavaScript())
      } ) ;
  },
  // async asyncData({ $axios , shopRPC , sql_pb  }) {
  //   const token = await $axios.$get("https://ingress.4ding.site/guest");
  //     let rpc = new shopRPC.ShopRPCClient ('https://shop.4ding.site');
  //     let sqlpb = new sql_pb.Query();
  //     rpc.findProductF(sqlpb,{ "x-4d-token":token },(err,resp)=>{
  //       this.list =  resp.getResult().toJavaScript()
  //       // store.commit('set_product_list', resp.getResult().toJavaScript())
  //     } ) ;
  //   return { token };
  // },
  async fetch ({ store, $axios }) {
    //  const token = await $axios.$get("https://ingress.4ding.site/guest");
    // store.commit('set_token', token)
  },
  methods: {
    test: function() {
  
       console.log(this.qq)
       let rpc = new this.shopRPC.ShopRPCClient ('https://shop.4ding.site');
       let sqlpb = new this.sql_pb.Query();
       rpc.findProductF(sqlpb,{ "x-4d-token": this.token },(err,resp)=>{
        console.log(err)
        console.log(resp.getResult().toJavaScript())
       } ) ;
    },
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      console.log("Verify: " + response);
    },
    onExpired: function() {
      console.log("Expired");
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    }
  }
};
</script>

<style>
</style>
