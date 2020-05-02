<template>
  <div id="page">
    <br />
    {{list}}
    <br />
    <button type="button" @click="test()" class="btn btn-primary">Sign in</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      dd: "666",
      buffer: {},
      list: []
    };
  },
  created() {
    console.log(8888888888888);
  },
  async fetch({ store, $axios, app }) {


    // let metadata = { "x-4d-token": store.state.other.token };
    // let method = "MyCar";
    // let q = new app.bb.Query();

    // const bi = q.serializeBinary();
    // const ib = new ArrayBuffer(bi.length + 5);
    // new Uint8Array(ib, 0).set([
    //   bi.length / (256 * 256 * 256 * 256),
    //   (bi.length / (256 * 256 * 256)) % 256,
    //   (bi.length / (256 * 256)) % 256,
    //   (bi.length / 256) % 256,
    //   bi.length % 256
    // ]);
    // new Uint8Array(ib, 5).set(bi);
    // console.log("ib>>>", ib);
    // fetch(`https://shop.4ding.site/ding4.ShopRPC/${method}`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/grpc-web+proto",
    //     "x-grpc-web": "1",
    //     ...metadata
    //   },
    //   body: new Uint8Array(ib)
    // })
    //   .then(response => {
    //     return response.arrayBuffer();
    //   })
    //   .then(ab => {
    //     console.log("12123123");
    //     let ba = ab.slice(5);
    //     console.log(">>", ba);
    //     console.log(">>>", app.bb.Response);

    //     const resp = app.bb.Response.deserializeBinary(ba);
    //     console.log(resp.getResult().toJavaScript());
    //     store.commit('other/set_token', resp.getResult().toJavaScript())
    //   });
    let rpc = app.aa ;
    let c = new app.cc.Customer();
    rpc.signIn(c, { "x-4d-token": store.state.other.token }, (err, resp) => {
        console.log(err);
        console.log(resp.getResult().toJavaScript());
      });

  },
  methods: {
    test: function() {
      console.log(this.qq);
      let rpc = new this.shopRPC.ShopRPCClient("https://shop.4ding.site");
      let sqlpb = new this.sqlpb.Query();
      rpc.findProductF(sqlpb, { "x-4d-token": this.token }, (err, resp) => {
        console.log(err);
        console.log(resp.getResult().toJavaScript());
      });
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
