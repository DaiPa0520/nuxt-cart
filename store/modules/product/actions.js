
// import { Struct } from "google-protobuf/google/protobuf/struct_pb";

export default {
  example(){
    // product_id=123
    let aa = new app.sqlpb.Condition();
    aa.setF('product_id')
    aa.setV("123")
    sqlpb.addCondition(aa)

    // 複數條件
    let obj = {condition:[
      {f:'product_id',v:'ZAEWkDzotw'},
      {f:'product_name',v:'ZAEWkDzotw'},
      {f:'product_bb',v:'ZAEWkDzotw'},
    ]}
    let a = Struct.fromJavaScript(obj)
    let sqlpb = new app.sqlpb.Query();
    sqlpb.setSelf(a)
    
    // product_id like 123
    aa.setF('product_id')
    aa.setO(6)
    aa.setV("123")
    sqlpb.addCondition(aa)

    // product_id IN
    aa.setF('product_id')
    aa.setO(5)
    aa.setS(['asd','asda'])
    sqlpb.addCondition(aa)

  },
  // 商品列表
  async get_product(context, { app, token , condition }) {
    console.log(condition)
    return new Promise(function (resolve) {  // 回傳一個 promise
      let sqlpb = new app.sqlpb.Query();
      if(condition !== undefined) sqlpb.addCondition(aa)
      let res = {};
      app.shopRPC.findProductF(sqlpb, { "x-4d-token": token },
        (err, resp) => {
          // todo:錯誤時候會跑兩次!?
          if (err !== null) {
            console.log(err);
            res = { code: 0, data: err };
            resolve(res);
            return ;
          }
          res = { code: 200, data: resp.getResult().toJavaScript() };
          resolve(res)
        });
    });
  },
  // 商品類別
  async get_productClass(context, { app, token }) {
    return new Promise(function (resolve) {  // 回傳一個 promise
      let sqlpb = new app.sqlpb.Query();
      let res = {};
      app.shopRPC.findProductClass(sqlpb, { "x-4d-token": token },
        (err, resp) => {
          // todo:錯誤時候會跑兩次!?
          if (err !== null) {
            console.log(err);
            res = { code: 0, data: err };
            resolve(res);
            return ;
          }
          res = { code: 200, data: resp.getResult().toJavaScript() };
          resolve(res)
        });
    });
  },
  // 商品規格
  async get_productSpec(context, { app, token }) {
    return new Promise(function (resolve) {  // 回傳一個 promise
      let sqlpb = new app.sqlpb.Query();
      let res = {};
      app.shopRPC.findProductSpec(sqlpb, { "x-4d-token": token },
        (err, resp) => {
          // todo:錯誤時候會跑兩次!?
          if (err !== null) {
            console.log(err);
            res = { code: 0, data: err };
            resolve(res);
            return ;
          }
          res = { code: 200, data: resp.getResult().toJavaScript() };
          resolve(res)
        });
    });
  },


}