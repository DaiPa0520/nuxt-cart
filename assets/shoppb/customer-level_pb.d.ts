import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as customer_pb from './customer_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class CustomerLevel extends jspb.Message {
  getLevelId(): string;
  setLevelId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPayAmount(): number;
  setPayAmount(value: number): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

  getCustomer(): customer_pb.Customer | undefined;
  setCustomer(value?: customer_pb.Customer): void;
  hasCustomer(): boolean;
  clearCustomer(): void;

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
  toObject(includeInstance?: boolean): CustomerLevel.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLevel): CustomerLevel.AsObject;
  static serializeBinaryToWriter(message: CustomerLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLevel;
  static deserializeBinaryFromReader(message: CustomerLevel, reader: jspb.BinaryReader): CustomerLevel;
}

export namespace CustomerLevel {
  export type AsObject = {
    levelId: string,
    storeId: string,
    status: number,
    name: string,
    payAmount: number,
    payTimes: number,
    isAuto: boolean,
    priority: number,
    customer?: customer_pb.Customer.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

