
export default {
  // 商品列表
  async get_website(context, { app, token, condition = null }) {

    let metadata = { "x-4d-token": token };
    let method = "IndexWebsite";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    // let product = await app.grpcFetch(method, metadata, req, (err, resp) => {
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      // todo:錯誤時候會跑兩次!?
      console.log('>>>', resp)
      if (err !== null) {
        // console.log(resp.err);
        return { code: 0, data: err };
      }
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // store.commit("other/set_test", data.getResult().toJavaScript());
      return { code: 200, data: data.getResult().toJavaScript() };
    });
    console.log('product>>>>', product)
    return product;

  },
}