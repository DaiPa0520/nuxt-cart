console.log('plugins autoload')
// import '@/plugins/jquery-3.3.1.min.js'
// import '@/plugins/bootstrap.min.js'
// import '@/plugins/popper.min.js'
import Vue from 'vue'

import shopRPC from '@/assets/shoppb/shop.rpc_grpc_web_pb'
Vue.prototype.shopRPC = shopRPC
// import aa from '@/assets/businesspb/business.rpc_grpc_web_pb'
import sql_pb from '@/assets/shoppb/sql_pb'
Vue.prototype.sqlpb = sql_pb

