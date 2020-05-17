/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  // 設定購物車內容
  set_cart(state, o) {
    state.content = o
  },
  // 新增一筆購物車
  add_cart(state, o) {
    // state.content.push(o)
    if(isNaN(state.content[`${o.normal}-${o.sku}`])){
      state.content[`${o.normal}-${o.sku}`] = o
    }else{
      state.content[`${o.normal}-${o.sku}`].count +=  Number(o.count) ;
    }
  },
  // 新增一筆購物車
  del_cart(state, o) {
    // state.content.push(o)
    if(!isNaN(state.content[`${o.normal}-${o.sku}`])){
      delete state.content[`${o.normal}-${o.sku}`] ;
    }
  },
}
