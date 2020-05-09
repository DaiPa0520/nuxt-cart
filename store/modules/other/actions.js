// var fetch = require('node-fetch');

export default {
  async get_token(context, o) {
    const token = await this.$axios.$get("https://ingress.4ding.site/guest");
    // context.commit("set_token",token)
    return token;
  },
  async get_token2(context, o) {

    // console.log('>>>', fetch)
    return fetch('https://ingress.4ding.site/guest')
      .then((response) => {
        // 處理 response
        // console.log('>>>', response)
        return response.text();
        // context.commit("set_token",1231323)
        // return response.text();
      }).catch(function (err) {
        // 錯誤處理
        // console.log('>>>', err)
        return 9999
      });

  },
  async MyCar(context,{ app, token }){
    const bi = req.serializeBinary();
    const ib = new ArrayBuffer(bi.length + 5);
    new Uint8Array(ib, 0).set([
      bi.length / (256 * 256 * 256 * 256),
      bi.length / (256 * 256 * 256) % 256,
      bi.length / (256 * 256) % 256,
      bi.length / (256) % 256,
      bi.length % 256
    ])
    new Uint8Array(ib, 5).set(bi);
    console.log(ib);
    fetch(`https://shop.4ding.site/ding4.ShopRPC/${method}`, {
      method: "POST",
      headers: {
        "content-type": "application/grpc-web+proto",
        "x-grpc-web": "1",
        ...metadata,
      },
      body: new Uint8Array(ib),
    }).then(response => {
      return response.arrayBuffer();
    }).then(ab => {
      callback(null, ab.slice(5));
    });
  },


  async GG(method, req, metadata, callback) {
    
  }


}