console.log('plugins autoload')
// import '@/plugins/jquery-3.3.1.min.js'
// import '@/plugins/bootstrap.min.js'
// import '@/plugins/popper.min.js'
import Vue from 'vue'

import aa from '@/assets/customerpb/customer.rpc_grpc_web_pb'
Vue.prototype.aa = aa
// import aa from '@/assets/businesspb/business.rpc_grpc_web_pb'
import qq from '@/assets/customerpb/sql_pb'
Vue.prototype.qq = qq

