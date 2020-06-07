// var fetch = require('node-fetch');

export default {
  async test(context, { layout , store , app }) {
    // 
    let prod = {
      list: [],// 紀錄ID
      result: [],// 紀錄產品結果
    };
    new Promise((resolve, reject) => {
      Object.keys(layout).forEach(async (i) => {
        // 只處理商品輪播 && 商品列表 
        if (layout[i].type != 2 && layout[i].type != 3) return;
  
        // if ((prod.list).indexOf(layout[i].target.class) < 0) {
          console.log(layout[i].target.class)
          // 搜尋該分類的產品列表
          let cond = new app.sqlpb.Condition();
          cond.setO(10).setV(layout[i].target.class);
          let res = await store.dispatch("product/get_product", {
            app: app,
            token: store.state.other.token,
            condition: cond
          });
          prod.list.push(layout[i].target.class);
          prod.result.push(res)
          console.log("ssr get>>>>",layout)
          layout[i].prod = res.data;
        // }
      });
      resolve();
    });
    console.log("ssr back>>>>",layout)
    return layout
  },
  
  test2(){
    
  }

}