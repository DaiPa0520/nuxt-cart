console.log('plugins autoload')
// import '@/plugins/jquery-3.3.1.min.js'
// import '@/plugins/bootstrap.min.js'
// import '@/plugins/popper.min.js'
import Vue from 'vue'

import shopRPC from '@/assets/shoppb/shop.rpc_grpc_web_pb'
Vue.prototype.shopRPC = new shopRPC.ShopRPCClient("https://shop.4ding.site");
import sql_pb from '@/assets/shoppb/sql_pb'
Vue.prototype.sqlpb = sql_pb

