import sql_pb from '@/assets/shoppb/sql_pb'
import car_pb from '@/assets/shoppb/car_pb'

import grpcFetch from '@/plugins/grpc-fetch'

export default function ({ app , $axios }) {
  app.sqlpb = sql_pb
  app.carpb = car_pb
  // 伺服器AJAX用
  app.grpcFetch = grpcFetch ;

}