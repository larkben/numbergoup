/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as CreateTokenContractJson } from "../createtoken/CreateToken.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace CreateTokenTypes {
  export type Fields = {
    owner: Address;
    contract: HexString;
  };

  export type State = ContractState<Fields>;

  export type DestroyEvent = ContractEvent<{ user: Address }>;
  export type CreateTokenEvent = ContractEvent<{
    user: Address;
    contract: HexString;
  }>;

  export interface CallMethodTable {
    buildtoken: {
      params: CallContractParams<{
        symbol: HexString;
        name: HexString;
        decimals: bigint;
        tokenTotal: bigint;
      }>;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  CreateTokenInstance,
  CreateTokenTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as CreateTokenTypes.Fields;
  }

  eventIndex = { Destroy: 0, CreateToken: 1 };
  consts = { ErrorCodes: { InvalidCaller: BigInt(1) } };

  at(address: string): CreateTokenInstance {
    return new CreateTokenInstance(address);
  }

  tests = {
    buildtoken: async (
      params: TestContractParams<
        CreateTokenTypes.Fields,
        {
          symbol: HexString;
          name: HexString;
          decimals: bigint;
          tokenTotal: bigint;
        }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "buildtoken", params);
    },
    destroycreator: async (
      params: Omit<
        TestContractParams<CreateTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroycreator", params);
    },
  };
}

// Use this object to test and deploy the contract
export const CreateToken = new Factory(
  Contract.fromJson(
    CreateTokenContractJson,
    "",
    "7ed6793ccad176ce4c219e78b5957818968443e64427459cae59ead4c5e2dcb8"
  )
);

// Use this class to interact with the blockchain
export class CreateTokenInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<CreateTokenTypes.State> {
    return fetchContractState(CreateToken, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeDestroyEvent(
    options: EventSubscribeOptions<CreateTokenTypes.DestroyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      CreateToken.contract,
      this,
      options,
      "Destroy",
      fromCount
    );
  }

  subscribeCreateTokenEvent(
    options: EventSubscribeOptions<CreateTokenTypes.CreateTokenEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      CreateToken.contract,
      this,
      options,
      "CreateToken",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      CreateTokenTypes.DestroyEvent | CreateTokenTypes.CreateTokenEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      CreateToken.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    buildtoken: async (
      params: CreateTokenTypes.CallMethodParams<"buildtoken">
    ): Promise<CreateTokenTypes.CallMethodResult<"buildtoken">> => {
      return callMethod(
        CreateToken,
        this,
        "buildtoken",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends CreateTokenTypes.MultiCallParams>(
    calls: Calls
  ): Promise<CreateTokenTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      CreateToken,
      this,
      calls,
      getContractByCodeHash
    )) as CreateTokenTypes.MultiCallResults<Calls>;
  }
}
