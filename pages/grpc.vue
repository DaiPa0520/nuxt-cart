<template>
  <div id="page">
    {{ip}} <br>
  <button type="button" @click="test()" class="btn btn-primary">Sign in</button>
  </div>
</template>

<script>
// import { BusinessRPCClient } from '@/assets/businesspb/Business.rpcServiceClientPb';

// require('@/assets/businesspb/business.rpc_grpc_web_pb')  ;


export default {
  data() {
    return {
      ip: "xx",
      dd: "666",
      buffer:{}
    };
  },
  created() {
    console.log(1235555);
    // this.buffer = new BusinessRPCClient('https://business.4ding.site');
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
  methods: {
    test: function() {
  
       console.log(this.qq)
       this.dd = new this.aa.CustomerRPCClient('https://customer.4ding.site');
       const q = new this.qq.Query();
       this.dd.indexBase(q,{ "x-4d-token": "f9a91e04c8f297016602cb3d8b8f4f76d521504acc2bd74c3c632646f876d35f" },(err,resp)=>{
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
