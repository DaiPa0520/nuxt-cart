console.log('plugins autoload')
import Vue from 'vue'


// use grpc
import sql_pb from '@/assets/shoppb/sql_pb'
Vue.prototype.sqlpb = sql_pb
import car_pb from '@/assets/shoppb/car_pb'
Vue.prototype.carpb = car_pb


import grpcFetch from '@/plugins/grpc-fetch'
Vue.prototype.grpcFetch = grpcFetch ;
