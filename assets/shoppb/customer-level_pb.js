// source: customer-level.proto
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
var customer_pb = require('./customer_pb.js');
goog.object.extend(proto, customer_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.CustomerLevel', null, global);
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
proto.ding4.CustomerLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.CustomerLevel.repeatedFields_, null);
};
goog.inherits(proto.ding4.CustomerLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.CustomerLevel.displayName = 'proto.ding4.CustomerLevel';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.CustomerLevel.repeatedFields_ = [11,16,17];



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
proto.ding4.CustomerLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.CustomerLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.CustomerLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    level: jspb.Message.getFieldWithDefault(msg, 5, 0),
    payOnce: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    payAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    payTimes: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isAuto: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    priority: jspb.Message.getFieldWithDefault(msg, 10, 0),
    customerList: jspb.Message.toObjectList(msg.getCustomerList(),
    customer_pb.Customer.toObject, includeInstance),
    labelxMap: (f = msg.getLabelxMap()) ? f.toObject(includeInstance, undefined) : [],
    operator: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
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
 * @return {!proto.ding4.CustomerLevel}
 */
proto.ding4.CustomerLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.CustomerLevel;
  return proto.ding4.CustomerLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.CustomerLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.CustomerLevel}
 */
proto.ding4.CustomerLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPayOnce(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPayAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPayTimes(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAuto(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 11:
      var value = new customer_pb.Customer;
      reader.readMessage(value,customer_pb.Customer.deserializeBinaryFromReader);
      msg.addCustomer(value);
      break;
    case 12:
      var value = msg.getLabelxMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 17:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 18:
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
proto.ding4.CustomerLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.CustomerLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.CustomerLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelId();
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
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPayOnce();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getPayAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getPayTimes();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getIsAuto();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCustomerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      customer_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getLabelxMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string level_id = 1;
 * @return {string}
 */
proto.ding4.CustomerLevel.prototype.getLevelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setLevelId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.ding4.CustomerLevel.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.ding4.CustomerLevel.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 level = 5;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double pay_once = 6;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPayOnce = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPayOnce = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double pay_amount = 7;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPayAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPayAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int32 pay_times = 8;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPayTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPayTimes = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool is_auto = 9;
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.getIsAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setIsAuto = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional int32 priority = 10;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated Customer customer = 11;
 * @return {!Array<!proto.ding4.Customer>}
 */
proto.ding4.CustomerLevel.prototype.getCustomerList = function() {
  return /** @type{!Array<!proto.ding4.Customer>} */ (
    jspb.Message.getRepeatedWrapperField(this, customer_pb.Customer, 11));
};


/**
 * @param {!Array<!proto.ding4.Customer>} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setCustomerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.ding4.Customer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Customer}
 */
proto.ding4.CustomerLevel.prototype.addCustomer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.ding4.Customer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearCustomerList = function() {
  return this.setCustomerList([]);
};


/**
 * map<string, int32> labelx = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.ding4.CustomerLevel.prototype.getLabelxMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearLabelxMap = function() {
  this.getLabelxMap().clear();
  return this;};


/**
 * optional string operator = 13;
 * @return {string}
 */
proto.ding4.CustomerLevel.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.CustomerLevel.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.CustomerLevel.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated string cols = 16;
 * @return {!Array<string>}
 */
proto.ding4.CustomerLevel.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 17;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.CustomerLevel.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 17));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.CustomerLevel.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 18;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.CustomerLevel.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 18));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 18) != null;
};


goog.object.extend(exports, proto.ding4);