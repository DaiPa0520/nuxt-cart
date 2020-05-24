// var fetch = require('node-fetch');

export default {
  async get_token(context, o) {
    const token = await this.$axios.$get("https://ingress.4ding.site/guest");
    context.commit("set_token", token)
    return token;
  },
  async get_website(context, { app, token, condition = null }) {
    console.log(condition)
    let metadata = { "x-4d-token": token };
    let method = "IndexWebsite";
    let req = new app.sqlpb.Query();
    // if (condition !== null) req.addCommodity(condition)
    if(condition !== null) req.setSelf(condition)

    let product = await app.grpcAxios(method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // todo:錯誤時候會跑兩次!?
      if (err !== null) {
        console.log(err);
        return { code: 0, data: err };
      }
      // store.commit("other/set_test", data.getResult().toJavaScript());
      return { code: 200, data: data.getResult().toJavaScript() };
    });

    return product;
  },

}