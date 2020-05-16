import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Activity extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getRule(): Rule | undefined;
  setRule(value?: Rule): void;
  hasRule(): boolean;
  clearRule(): void;

  getNow(): Rule | undefined;
  setNow(value?: Rule): void;
  hasNow(): boolean;
  clearNow(): void;

  getActive(): Active | undefined;
  setActive(value?: Active): void;
  hasActive(): boolean;
  clearActive(): void;

  getTarget(): Target | undefined;
  setTarget(value?: Target): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getUsedMap(): jspb.Map<string, Used>;
  clearUsedMap(): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): void;
  clearColsList(): void;
  addCols(value: string, index?: number): void;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): void;
  clearConditionList(): void;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    activityId: string,
    storeId: string,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    rule?: Rule.AsObject,
    now?: Rule.AsObject,
    active?: Active.AsObject,
    target?: Target.AsObject,
    isEnable: boolean,
    usedMap: Array<[string, Used.AsObject]>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Coupon extends jspb.Message {
  getCouponId(): string;
  setCouponId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): void;

  getCode(): string;
  setCode(value: string): void;

  getRule(): Rule | undefined;
  setRule(value?: Rule): void;
  hasRule(): boolean;
  clearRule(): void;

  getActive(): Active | undefined;
  setActive(value?: Active): void;
  hasActive(): boolean;
  clearActive(): void;

  getTarget(): Target | undefined;
  setTarget(value?: Target): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getUsed(): google_protobuf_struct_pb.Value | undefined;
  setUsed(value?: google_protobuf_struct_pb.Value): void;
  hasUsed(): boolean;
  clearUsed(): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): void;
  clearColsList(): void;
  addCols(value: string, index?: number): void;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): void;
  clearConditionList(): void;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coupon.AsObject;
  static toObject(includeInstance: boolean, msg: Coupon): Coupon.AsObject;
  static serializeBinaryToWriter(message: Coupon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coupon;
  static deserializeBinaryFromReader(message: Coupon, reader: jspb.BinaryReader): Coupon;
}

export namespace Coupon {
  export type AsObject = {
    couponId: string,
    storeId: string,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    isAuto: boolean,
    code: string,
    rule?: Rule.AsObject,
    active?: Active.AsObject,
    target?: Target.AsObject,
    used?: google_protobuf_struct_pb.Value.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Rule extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    amount: number,
    count: number,
  }
}

export class Active extends jspb.Message {
  getFreeShipping(): boolean;
  setFreeShipping(value: boolean): void;

  getIsRepeat(): boolean;
  setIsRepeat(value: boolean): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getGiveaway(): string;
  setGiveaway(value: string): void;

  getGiveawaySku(): string;
  setGiveawaySku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Active.AsObject;
  static toObject(includeInstance: boolean, msg: Active): Active.AsObject;
  static serializeBinaryToWriter(message: Active, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Active;
  static deserializeBinaryFromReader(message: Active, reader: jspb.BinaryReader): Active;
}

export namespace Active {
  export type AsObject = {
    freeShipping: boolean,
    isRepeat: boolean,
    discount: number,
    reduce: number,
    giveaway: string,
    giveawaySku: string,
  }
}

export class Target extends jspb.Message {
  getClass(): string;
  setClass(value: string): void;

  getLevel(): string;
  setLevel(value: string): void;

  getBirthdayList(): Array<number>;
  setBirthdayList(value: Array<number>): void;
  clearBirthdayList(): void;
  addBirthday(value: number, index?: number): void;

  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): void;
  clearItemsList(): void;
  addItems(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Target.AsObject;
  static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
  static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Target;
  static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
  export type AsObject = {
    pb_class: string,
    level: string,
    birthdayList: Array<number>,
    itemsList: Array<string>,
  }
}

export class Used extends jspb.Message {
  getActivity(): number;
  setActivity(value: number): void;

  getCoupon(): number;
  setCoupon(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Used.AsObject;
  static toObject(includeInstance: boolean, msg: Used): Used.AsObject;
  static serializeBinaryToWriter(message: Used, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Used;
  static deserializeBinaryFromReader(message: Used, reader: jspb.BinaryReader): Used;
}

export namespace Used {
  export type AsObject = {
    activity: number,
    coupon: number,
  }
}

