// import Vue from 'vue'
// import 'google-protobuf/google-protobuf.js'
// import 'grpc-web/index.js'
import shopRPC from '@/assets/shoppb/shop.rpc_grpc_web_pb'
// Vue.prototype.$shopRPC = shopRPC
// import aa from '@/assets/businesspb/business.rpc_grpc_web_pb'
import sql_pb from '@/assets/shoppb/sql_pb'

export default function ({ app }) {
  app.$shopRPC = shopRPC
  app.$sqlpb = sql_pb
}