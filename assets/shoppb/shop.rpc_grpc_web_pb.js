/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var sql_pb = require('./sql_pb.js')

var customer_pb = require('./customer_pb.js')

var car_pb = require('./car_pb.js')

var order_pb = require('./order_pb.js')
const proto = {};
proto.ding4 = require('./shop.rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.ShopRPCClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.ShopRPCPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_SignUp = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/SignUp',
  grpc.web.MethodType.UNARY,
  customer_pb.Customer,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_SignUp = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/SignUp',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SignUp,
      callback);
};


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/SignUp',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_SignIn = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/SignIn',
  grpc.web.MethodType.UNARY,
  customer_pb.Customer,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/SignIn',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SignIn,
      callback);
};


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/SignIn',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_IndexBase = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/IndexBase',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_IndexBase = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.indexBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/IndexBase',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_IndexBase,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.indexBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/IndexBase',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_IndexBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_IndexItem = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/IndexItem',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_IndexItem = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.indexItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/IndexItem',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_IndexItem,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.indexItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/IndexItem',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_IndexItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_IndexLayout = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/IndexLayout',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_IndexLayout = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.indexLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/IndexLayout',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_IndexLayout,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.indexLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/IndexLayout',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_IndexLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_FindProductClass = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/FindProductClass',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_FindProductClass = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.findProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductClass,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.findProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_FindProductF = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/FindProductF',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_FindProductF = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.findProductF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductF,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.findProductF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_FindProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/FindProductSpec',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_FindProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.findProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductSpec,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.findProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_FindProductStack = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/FindProductStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_FindProductStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.findProductStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.findProductStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindProductStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_FindSpecStack = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/FindSpecStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_FindSpecStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.findSpecStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindSpecStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.findSpecStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindSpecStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_MyCar = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/MyCar',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_MyCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.myCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/MyCar',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_MyCar,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.myCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/MyCar',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_MyCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_DeleteCar = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/DeleteCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_DeleteCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.deleteCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_DeleteCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.deleteCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_DeleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_CompleteCar = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/CompleteCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_CompleteCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.completeCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_CompleteCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.completeCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_CompleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_AppendCommodity = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/AppendCommodity',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_AppendCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.appendCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_AppendCommodity,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.appendCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_AppendCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_SubtractCommodity = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/SubtractCommodity',
  grpc.web.MethodType.UNARY,
  car_pb.Commodity,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_SubtractCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.subtractCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SubtractCommodity,
      callback);
};


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.subtractCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SubtractCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_AppendDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/AppendDiscount',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_AppendDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.appendDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_AppendDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.appendDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_AppendDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_SubtractDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/SubtractDiscount',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_SubtractDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.subtractDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SubtractDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.subtractDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_SubtractDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_CreateOrder = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/CreateOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_CreateOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_PaymentOrder = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/PaymentOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_PaymentOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.paymentOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_PaymentOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.paymentOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_PaymentOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ShopRPC_FindOrder = new grpc.web.MethodDescriptor(
  '/ding4.ShopRPC/FindOrder',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_ShopRPC_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.ShopRPCClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ShopRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindOrder,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.ShopRPCPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ShopRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_ShopRPC_FindOrder);
};


module.exports = proto.ding4;

