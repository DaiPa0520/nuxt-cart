import sql_pb from '@/assets/shoppb/sql_pb'
import grpcFetch from '@/plugins/grpc-fetch'

export default function ({ app , $axios }) {
  app.sqlpb = sql_pb
  // 伺服器AJAX用
  app.serverFetch = grpcFetch ;

}