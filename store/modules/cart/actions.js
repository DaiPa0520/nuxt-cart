
export default {
  // State => 1.選購 2.鎖定 3.取消 6.完成訂單
  // 計算購物車內容 *包含活動及折價券*
  async get_completeCar(context, { app, token, condition = null }) {
    console.log(condition)
    let metadata = { "x-4d-token": token };
    let method = "CompleteCar";
    let req = new app.carpb.Car();
    // if (condition !== null) req.addCommodity(condition)
    if(condition !== null) req.setSelf(condition)
    let product = await app.grpcAxios(app.$axios,method, metadata, req, (err, resp) => {
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

  set_storage(){

  }
}