// source: car.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var sql_pb = require('./sql_pb.js');
goog.object.extend(proto, sql_pb);
var activity$coupon_pb = require('./activity-coupon_pb.js');
goog.object.extend(proto, activity$coupon_pb);
var a$submessage_pb = require('./a-submessage_pb.js');
goog.object.extend(proto, a$submessage_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Car', null, global);
goog.exportSymbol('proto.ding4.Commodity', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ding4.Car = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Car.repeatedFields_, null);
};
goog.inherits(proto.ding4.Car, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Car.displayName = 'proto.ding4.Car';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ding4.Commodity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.Commodity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Commodity.displayName = 'proto.ding4.Commodity';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Car.repeatedFields_ = [6,7,14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ding4.Car.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Car.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Car} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Car.toObject = function(includeInstance, msg) {
  var f, obj = {
    carId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    couponId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    state: jspb.Message.getFieldWithDefault(msg, 5, 0),
    commodityList: jspb.Message.toObjectList(msg.getCommodityList(),
    proto.ding4.Commodity.toObject, includeInstance),
    activityList: jspb.Message.toObjectList(msg.getActivityList(),
    activity$coupon_pb.Activity.toObject, includeInstance),
    isFreeShipping: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    amount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    count: jspb.Message.getFieldWithDefault(msg, 10, 0),
    operator: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    conditionList: jspb.Message.toObjectList(msg.getConditionList(),
    sql_pb.Condition.toObject, includeInstance),
    self: (f = msg.getSelf()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ding4.Car}
 */
proto.ding4.Car.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Car;
  return proto.ding4.Car.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Car} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Car}
 */
proto.ding4.Car.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCarId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCouponId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 6:
      var value = new proto.ding4.Commodity;
      reader.readMessage(value,proto.ding4.Commodity.deserializeBinaryFromReader);
      msg.addCommodity(value);
      break;
    case 7:
      var value = new activity$coupon_pb.Activity;
      reader.readMessage(value,activity$coupon_pb.Activity.deserializeBinaryFromReader);
      msg.addActivity(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFreeShipping(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 15:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 16:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setSelf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ding4.Car.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Car.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Car} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Car.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCarId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCouponId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCommodityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.ding4.Commodity.serializeBinaryToWriter
    );
  }
  f = message.getActivityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      activity$coupon_pb.Activity.serializeBinaryToWriter
    );
  }
  f = message.getIsFreeShipping();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string car_id = 1;
 * @return {string}
 */
proto.ding4.Car.prototype.getCarId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCarId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.ding4.Car.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.ding4.Car.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string coupon_id = 4;
 * @return {string}
 */
proto.ding4.Car.prototype.getCouponId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCouponId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 state = 5;
 * @return {number}
 */
proto.ding4.Car.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated Commodity commodity = 6;
 * @return {!Array<!proto.ding4.Commodity>}
 */
proto.ding4.Car.prototype.getCommodityList = function() {
  return /** @type{!Array<!proto.ding4.Commodity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ding4.Commodity, 6));
};


/**
 * @param {!Array<!proto.ding4.Commodity>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setCommodityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ding4.Commodity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Commodity}
 */
proto.ding4.Car.prototype.addCommodity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ding4.Commodity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearCommodityList = function() {
  return this.setCommodityList([]);
};


/**
 * repeated Activity activity = 7;
 * @return {!Array<!proto.ding4.Activity>}
 */
proto.ding4.Car.prototype.getActivityList = function() {
  return /** @type{!Array<!proto.ding4.Activity>} */ (
    jspb.Message.getRepeatedWrapperField(this, activity$coupon_pb.Activity, 7));
};


/**
 * @param {!Array<!proto.ding4.Activity>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setActivityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ding4.Activity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Activity}
 */
proto.ding4.Car.prototype.addActivity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ding4.Activity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearActivityList = function() {
  return this.setActivityList([]);
};


/**
 * optional bool is_free_shipping = 8;
 * @return {boolean}
 */
proto.ding4.Car.prototype.getIsFreeShipping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setIsFreeShipping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int32 amount = 9;
 * @return {number}
 */
proto.ding4.Car.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 count = 10;
 * @return {number}
 */
proto.ding4.Car.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string operator = 11;
 * @return {string}
 */
proto.ding4.Car.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Car.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Car.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Car.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Car.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated string cols = 14;
 * @return {!Array<string>}
 */
proto.ding4.Car.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 15;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Car.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 15));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Car.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 16;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Car.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 16));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Car.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 16) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ding4.Commodity.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Commodity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Commodity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Commodity.toObject = function(includeInstance, msg) {
  var f, obj = {
    normal: jspb.Message.getFieldWithDefault(msg, 1, ""),
    additional: jspb.Message.getFieldWithDefault(msg, 2, ""),
    giveaway: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sku: jspb.Message.getFieldWithDefault(msg, 4, ""),
    photo: (f = msg.getPhoto()) && a$submessage_pb.Image.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    itemx: (f = msg.getItemx()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    isPreorder: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    count: jspb.Message.getFieldWithDefault(msg, 9, 0),
    price: jspb.Message.getFieldWithDefault(msg, 10, 0),
    reduce: jspb.Message.getFieldWithDefault(msg, 11, 0),
    active: jspb.Message.getFieldWithDefault(msg, 12, 0),
    stock: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ding4.Commodity}
 */
proto.ding4.Commodity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Commodity;
  return proto.ding4.Commodity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Commodity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Commodity}
 */
proto.ding4.Commodity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormal(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdditional(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGiveaway(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 5:
      var value = new a$submessage_pb.Image;
      reader.readMessage(value,a$submessage_pb.Image.deserializeBinaryFromReader);
      msg.setPhoto(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setItemx(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreorder(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReduce(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActive(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ding4.Commodity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Commodity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Commodity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Commodity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNormal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdditional();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGiveaway();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSku();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPhoto();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      a$submessage_pb.Image.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getItemx();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getIsPreorder();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getReduce();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getActive();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getStock();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional string normal = 1;
 * @return {string}
 */
proto.ding4.Commodity.prototype.getNormal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setNormal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string additional = 2;
 * @return {string}
 */
proto.ding4.Commodity.prototype.getAdditional = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setAdditional = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string giveaway = 3;
 * @return {string}
 */
proto.ding4.Commodity.prototype.getGiveaway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setGiveaway = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sku = 4;
 * @return {string}
 */
proto.ding4.Commodity.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Image photo = 5;
 * @return {?proto.ding4.Image}
 */
proto.ding4.Commodity.prototype.getPhoto = function() {
  return /** @type{?proto.ding4.Image} */ (
    jspb.Message.getWrapperField(this, a$submessage_pb.Image, 5));
};


/**
 * @param {?proto.ding4.Image|undefined} value
 * @return {!proto.ding4.Commodity} returns this
*/
proto.ding4.Commodity.prototype.setPhoto = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.clearPhoto = function() {
  return this.setPhoto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Commodity.prototype.hasPhoto = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Value name = 6;
 * @return {?proto.google.protobuf.Value}
 */
proto.ding4.Commodity.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 6));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.ding4.Commodity} returns this
*/
proto.ding4.Commodity.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Commodity.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Value itemx = 7;
 * @return {?proto.google.protobuf.Value}
 */
proto.ding4.Commodity.prototype.getItemx = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 7));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.ding4.Commodity} returns this
*/
proto.ding4.Commodity.prototype.setItemx = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.clearItemx = function() {
  return this.setItemx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Commodity.prototype.hasItemx = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_preorder = 8;
 * @return {boolean}
 */
proto.ding4.Commodity.prototype.getIsPreorder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setIsPreorder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int32 count = 9;
 * @return {number}
 */
proto.ding4.Commodity.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 price = 10;
 * @return {number}
 */
proto.ding4.Commodity.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 reduce = 11;
 * @return {number}
 */
proto.ding4.Commodity.prototype.getReduce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setReduce = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 active = 12;
 * @return {number}
 */
proto.ding4.Commodity.prototype.getActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setActive = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 stock = 13;
 * @return {number}
 */
proto.ding4.Commodity.prototype.getStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Commodity} returns this
 */
proto.ding4.Commodity.prototype.setStock = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


goog.object.extend(exports, proto.ding4);
