// import Vue from 'vue'
// import 'google-protobuf/google-protobuf.js'
// import 'grpc-web/index.js'
import shopRPC from '@/assets/shoppb/shop.rpc_grpc_web_pb'
// Vue.prototype.$shopRPC = shopRPC
// import aa from '@/assets/businesspb/business.rpc_grpc_web_pb'
import sql_pb from '@/assets/shoppb/sql_pb'
import customer_pb from '@/assets/shoppb/customer_pb'

export default function ({ app }) {
  app.aa = new shopRPC.ShopRPCClient("https://shop.4ding.site");
  app.bb = sql_pb
  app.cc = customer_pb
}