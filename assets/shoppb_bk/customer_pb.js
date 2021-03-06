// source: customer.proto
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
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Customer', null, global);
goog.exportSymbol('proto.ding4.CustomerStoreInfo', null, global);
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
proto.ding4.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Customer.repeatedFields_, null);
};
goog.inherits(proto.ding4.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Customer.displayName = 'proto.ding4.Customer';
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
proto.ding4.CustomerStoreInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.CustomerStoreInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.CustomerStoreInfo.displayName = 'proto.ding4.CustomerStoreInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Customer.repeatedFields_ = [73,74];



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
proto.ding4.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    payTimes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    payAmount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    password: jspb.Message.getFieldWithDefault(msg, 8, ""),
    comeFrom: jspb.Message.getFieldWithDefault(msg, 9, ""),
    storeInfoMap: (f = msg.getStoreInfoMap()) ? f.toObject(includeInstance, proto.ding4.CustomerStoreInfo.toObject) : [],
    labelxMap: (f = msg.getLabelxMap()) ? f.toObject(includeInstance, undefined) : [],
    operator: jspb.Message.getFieldWithDefault(msg, 70, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 73)) == null ? undefined : f,
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
 * @return {!proto.ding4.Customer}
 */
proto.ding4.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Customer;
  return proto.ding4.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Customer}
 */
proto.ding4.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPayTimes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPayAmount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComeFrom(value);
      break;
    case 10:
      var value = msg.getStoreInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.ding4.CustomerStoreInfo.deserializeBinaryFromReader, "", new proto.ding4.CustomerStoreInfo());
         });
      break;
    case 69:
      var value = msg.getLabelxMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 70:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 71:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 72:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 73:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 74:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 75:
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
proto.ding4.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPayTimes();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPayAmount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getComeFrom();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStoreInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.ding4.CustomerStoreInfo.serializeBinaryToWriter);
  }
  f = message.getLabelxMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(69, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      70,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      72,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      73,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      74,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      75,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.ding4.Customer.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.ding4.Customer.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone = 3;
 * @return {string}
 */
proto.ding4.Customer.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.ding4.Customer.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ding4.Customer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 pay_times = 6;
 * @return {number}
 */
proto.ding4.Customer.prototype.getPayTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPayTimes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 pay_amount = 7;
 * @return {number}
 */
proto.ding4.Customer.prototype.getPayAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPayAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string password = 8;
 * @return {string}
 */
proto.ding4.Customer.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string come_from = 9;
 * @return {string}
 */
proto.ding4.Customer.prototype.getComeFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setComeFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, CustomerStoreInfo> store_info = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.ding4.CustomerStoreInfo>}
 */
proto.ding4.Customer.prototype.getStoreInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.ding4.CustomerStoreInfo>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.ding4.CustomerStoreInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearStoreInfoMap = function() {
  this.getStoreInfoMap().clear();
  return this;};


/**
 * map<string, int32> labelx = 69;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.ding4.Customer.prototype.getLabelxMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 69, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearLabelxMap = function() {
  this.getLabelxMap().clear();
  return this;};


/**
 * optional string operator = 70;
 * @return {string}
 */
proto.ding4.Customer.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 70, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 70, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 71;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Customer.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 71));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 71, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 72;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Customer.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 72));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 72, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * repeated string cols = 73;
 * @return {!Array<string>}
 */
proto.ding4.Customer.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 73));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 73, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 73, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 74;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Customer.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 74));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 74, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Customer.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 74, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 75;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Customer.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 75));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 75, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 75) != null;
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
proto.ding4.CustomerStoreInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.CustomerStoreInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.CustomerStoreInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerStoreInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    receive: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ding4.CustomerStoreInfo}
 */
proto.ding4.CustomerStoreInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.CustomerStoreInfo;
  return proto.ding4.CustomerStoreInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.CustomerStoreInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.CustomerStoreInfo}
 */
proto.ding4.CustomerStoreInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setReceive(value);
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
proto.ding4.CustomerStoreInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.CustomerStoreInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.CustomerStoreInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerStoreInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceive();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string level_id = 1;
 * @return {string}
 */
proto.ding4.CustomerStoreInfo.prototype.getLevelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerStoreInfo} returns this
 */
proto.ding4.CustomerStoreInfo.prototype.setLevelId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string receive = 2;
 * @return {string}
 */
proto.ding4.CustomerStoreInfo.prototype.getReceive = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerStoreInfo} returns this
 */
proto.ding4.CustomerStoreInfo.prototype.setReceive = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.ding4);
