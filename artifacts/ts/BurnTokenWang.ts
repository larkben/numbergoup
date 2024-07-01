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
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
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
    burntoken: {
      params: CallContractParams<{ amount: bigint }>;
      result: CallContractResult<null>;
    };
    destroy: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
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

  export interface SignExecuteMethodTable {
    getToken: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    burntoken: {
      params: SignExecuteContractMethodParams<{ amount: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    destroy: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  BurnTokenWangInstance,
  BurnTokenWangTypes.Fields
> {
  encodeFields(fields: BurnTokenWangTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as BurnTokenWangTypes.Fields;
  }

  eventIndex = { Burn: 0, Destroy: 1 };
  consts = { Error: { InvalidCaller: BigInt("0") } };

  at(address: string): BurnTokenWangInstance {
    return new BurnTokenWangInstance(address);
  }

  tests = {
    getToken: async (
      params: Omit<
        TestContractParamsWithoutMaps<BurnTokenWangTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getToken", params, getContractByCodeHash);
    },
    burntoken: async (
      params: TestContractParamsWithoutMaps<
        BurnTokenWangTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "burntoken", params, getContractByCodeHash);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<BurnTokenWangTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const BurnTokenWang = new Factory(
  Contract.fromJson(
    BurnTokenWangContractJson,
    "",
    "200dbd87031547e7717a92fb8b18cfba463c1e51384d8fbfa08d78dd4db8a9a5",
    []
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

  view = {
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
    burntoken: async (
      params: BurnTokenWangTypes.CallMethodParams<"burntoken">
    ): Promise<BurnTokenWangTypes.CallMethodResult<"burntoken">> => {
      return callMethod(
        BurnTokenWang,
        this,
        "burntoken",
        params,
        getContractByCodeHash
      );
    },
    destroy: async (
      params?: BurnTokenWangTypes.CallMethodParams<"destroy">
    ): Promise<BurnTokenWangTypes.CallMethodResult<"destroy">> => {
      return callMethod(
        BurnTokenWang,
        this,
        "destroy",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getToken: async (
      params: BurnTokenWangTypes.SignExecuteMethodParams<"getToken">
    ): Promise<BurnTokenWangTypes.SignExecuteMethodResult<"getToken">> => {
      return signExecuteMethod(BurnTokenWang, this, "getToken", params);
    },
    burntoken: async (
      params: BurnTokenWangTypes.SignExecuteMethodParams<"burntoken">
    ): Promise<BurnTokenWangTypes.SignExecuteMethodResult<"burntoken">> => {
      return signExecuteMethod(BurnTokenWang, this, "burntoken", params);
    },
    destroy: async (
      params: BurnTokenWangTypes.SignExecuteMethodParams<"destroy">
    ): Promise<BurnTokenWangTypes.SignExecuteMethodResult<"destroy">> => {
      return signExecuteMethod(BurnTokenWang, this, "destroy", params);
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
