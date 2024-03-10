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
import { default as BurnTokenWangContractJson } from "../burnwang/BurnTokenWang.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace BurnTokenWangTypes {
  export type Fields = {
    tokensburned: bigint;
    token: HexString;
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export type BurnEvent = ContractEvent<{
    from: Address;
    amount: bigint;
    when: bigint;
    totalburned: bigint;
  }>;
  export type DestroyEvent = ContractEvent<{ from: Address }>;

  export interface CallMethodTable {
    getToken: {
      params: Omit<CallContractParams<{}>, "args">;
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
  BurnTokenWangInstance,
  BurnTokenWangTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as BurnTokenWangTypes.Fields;
  }

  eventIndex = { Burn: 0, Destroy: 1 };
  consts = { Error: { InvalidCaller: BigInt(0) } };

  at(address: string): BurnTokenWangInstance {
    return new BurnTokenWangInstance(address);
  }

  tests = {
    getToken: async (
      params: Omit<
        TestContractParams<BurnTokenWangTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getToken", params);
    },
    burntoken: async (
      params: TestContractParams<BurnTokenWangTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "burntoken", params);
    },
    destroy: async (
      params: Omit<
        TestContractParams<BurnTokenWangTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroy", params);
    },
  };
}

// Use this object to test and deploy the contract
export const BurnTokenWang = new Factory(
  Contract.fromJson(
    BurnTokenWangContractJson,
    "",
    "1d435c370e0a07477be805acfe7546cfab007f024808319deaf5dff9b4e61de4"
  )
);

// Use this class to interact with the blockchain
export class BurnTokenWangInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<BurnTokenWangTypes.State> {
    return fetchContractState(BurnTokenWang, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeBurnEvent(
    options: EventSubscribeOptions<BurnTokenWangTypes.BurnEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      BurnTokenWang.contract,
      this,
      options,
      "Burn",
      fromCount
    );
  }

  subscribeDestroyEvent(
    options: EventSubscribeOptions<BurnTokenWangTypes.DestroyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      BurnTokenWang.contract,
      this,
      options,
      "Destroy",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      BurnTokenWangTypes.BurnEvent | BurnTokenWangTypes.DestroyEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      BurnTokenWang.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getToken: async (
      params?: BurnTokenWangTypes.CallMethodParams<"getToken">
    ): Promise<BurnTokenWangTypes.CallMethodResult<"getToken">> => {
      return callMethod(
        BurnTokenWang,
        this,
        "getToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends BurnTokenWangTypes.MultiCallParams>(
    calls: Calls
  ): Promise<BurnTokenWangTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      BurnTokenWang,
      this,
      calls,
      getContractByCodeHash
    )) as BurnTokenWangTypes.MultiCallResults<Calls>;
  }
}