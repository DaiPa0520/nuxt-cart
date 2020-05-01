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
  async fetch ({ store, $axios }) {
    //  const token = await $axios.$get("https://ingress.4ding.site/guest");
    // store.commit('set_token', token)
  },
  methods: {
    test: function() {

       console.log(this.qq)
       let rpc = new this.shopRPC.ShopRPCClient ('https://shop.4ding.site');
       let sqlpb = new this.sqlpb.Query();
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
