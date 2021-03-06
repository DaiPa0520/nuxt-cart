// source: adapter.proto
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

goog.exportSymbol('proto.ding4.Adapter', null, global);

var sql_pb = require('./sql_pb.js');
goog.object.extend(proto, sql_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);

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
proto.ding4.Adapter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Adapter.repeatedFields_, null);
};
goog.inherits(proto.ding4.Adapter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Adapter.displayName = 'proto.ding4.Adapter';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Adapter.repeatedFields_ = [19,20];



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
proto.ding4.Adapter.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Adapter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Adapter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Adapter.toObject = function(includeInstance, msg) {
  var f, obj = {
    adapterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    service: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isEnable: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    name: (f = msg.getName()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    paymentType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    paymentAddAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    paymentAddPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    expireDay: jspb.Message.getFieldWithDefault(msg, 10, 0),
    logisticsType: jspb.Message.getFieldWithDefault(msg, 11, 0),
    logisticsSubType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    logisticsFee: jspb.Message.getFieldWithDefault(msg, 13, 0),
    remark: jspb.Message.getFieldWithDefault(msg, 14, ""),
    redirect: jspb.Message.getFieldWithDefault(msg, 15, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 16, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
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
 * @return {!proto.ding4.Adapter}
 */
proto.ding4.Adapter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Adapter;
  return proto.ding4.Adapter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Adapter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Adapter}
 */
proto.ding4.Adapter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdapterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnable(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPaymentAddAmount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPaymentAddPercent(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpireDay(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLogisticsType(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLogisticsSubType(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLogisticsFee(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedirect(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 20:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 21:
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
proto.ding4.Adapter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Adapter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Adapter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Adapter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdapterId();
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
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsEnable();
  if (f) {
    writer.writeBool(
      5,
      f
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
  f = message.getPaymentType();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPaymentAddAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getPaymentAddPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getExpireDay();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getLogisticsType();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLogisticsSubType();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getLogisticsFee();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRedirect();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string adapter_id = 1;
 * @return {string}
 */
proto.ding4.Adapter.prototype.getAdapterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setAdapterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.ding4.Adapter.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 type = 3;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string service = 4;
 * @return {string}
 */
proto.ding4.Adapter.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_enable = 5;
 * @return {boolean}
 */
proto.ding4.Adapter.prototype.getIsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setIsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Value name = 6;
 * @return {?proto.google.protobuf.Value}
 */
proto.ding4.Adapter.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 6));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.ding4.Adapter} returns this
*/
proto.ding4.Adapter.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Adapter.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 payment_type = 7;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getPaymentType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setPaymentType = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double payment_add_amount = 8;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getPaymentAddAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setPaymentAddAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double payment_add_percent = 9;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getPaymentAddPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setPaymentAddPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional int32 expire_day = 10;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getExpireDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setExpireDay = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 logistics_type = 11;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getLogisticsType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setLogisticsType = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 logistics_sub_type = 12;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getLogisticsSubType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setLogisticsSubType = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 logistics_fee = 13;
 * @return {number}
 */
proto.ding4.Adapter.prototype.getLogisticsFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setLogisticsFee = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string remark = 14;
 * @return {string}
 */
proto.ding4.Adapter.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string redirect = 15;
 * @return {string}
 */
proto.ding4.Adapter.prototype.getRedirect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setRedirect = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string operator = 16;
 * @return {string}
 */
proto.ding4.Adapter.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Adapter.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Adapter} returns this
*/
proto.ding4.Adapter.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Adapter.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Adapter.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Adapter} returns this
*/
proto.ding4.Adapter.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Adapter.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated string cols = 19;
 * @return {!Array<string>}
 */
proto.ding4.Adapter.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 20;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Adapter.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 20));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Adapter} returns this
*/
proto.ding4.Adapter.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Adapter.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 21;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Adapter.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 21));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Adapter} returns this
*/
proto.ding4.Adapter.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Adapter} returns this
 */
proto.ding4.Adapter.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Adapter.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 21) != null;
};


goog.object.extend(exports, proto.ding4);
