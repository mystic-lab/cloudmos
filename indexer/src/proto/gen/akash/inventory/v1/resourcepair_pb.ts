// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file akash/inventory/v1/resourcepair.proto (package akash.inventory.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Quantity } from "../../../k8s.io/apimachinery/pkg/api/resource/generated_pb";
import { Attribute } from "../../base/v1beta3/attribute_pb";

/**
 * ResourcePair to extents resource.Quantity to provide total and available units of the resource
 *
 * @generated from message akash.inventory.v1.ResourcePair
 */
export class ResourcePair extends Message<ResourcePair> {
  /**
   * @generated from field: k8s.io.apimachinery.pkg.api.resource.Quantity allocatable = 1;
   */
  allocatable?: Quantity;

  /**
   * @generated from field: k8s.io.apimachinery.pkg.api.resource.Quantity allocated = 2;
   */
  allocated?: Quantity;

  /**
   * @generated from field: repeated akash.base.v1beta3.Attribute attributes = 3;
   */
  attributes: Attribute[] = [];

  constructor(data?: PartialMessage<ResourcePair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "akash.inventory.v1.ResourcePair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allocatable", kind: "message", T: Quantity },
    { no: 2, name: "allocated", kind: "message", T: Quantity },
    { no: 3, name: "attributes", kind: "message", T: Attribute, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourcePair {
    return new ResourcePair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourcePair {
    return new ResourcePair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourcePair {
    return new ResourcePair().fromJsonString(jsonString, options);
  }

  static equals(a: ResourcePair | PlainMessage<ResourcePair> | undefined, b: ResourcePair | PlainMessage<ResourcePair> | undefined): boolean {
    return proto3.util.equals(ResourcePair, a, b);
  }
}
