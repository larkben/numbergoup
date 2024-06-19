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
import { default as SubscribeContractJson } from "../subscribe/Subscribe.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace SubscribeTypes {
  export type Fields = {
    subfee: bigint;
    platformfees: bigint;
    devfees: bigint;
    fee: bigint;
    dev: Address;
    lead: Address;
    token: HexString;
  };

  export type State = ContractState<Fields>;

  export type SubscribedEvent = ContractEvent<{
    addy: Address;
    who: HexString;
    when: bigint;
    devamt: bigint;
    platformfees: bigint;
  }>;
  export type WithdrawnguEvent = ContractEvent<{ when: bigint; amt: bigint }>;
  export type FeeupdateEvent = ContractEvent<{
    prevfee: bigint;
    newfee: bigint;
  }>;
  export type DestroysubEvent = ContractEvent<{ who: Address }>;

  export interface CallMethodTable {
    getToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getSubFee: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getDevFees: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getPlatformFees: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    deposit: {
      params: CallContractParams<{ discordname: HexString }>;
      result: CallContractResult<null>;
    };
    withdrawplatform: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    withdrawdev: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    updatefee: {
      params: CallContractParams<{ newfee: bigint }>;
      result: CallContractResult<null>;
    };
    subdestroy: {
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
    getSubFee: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getDevFees: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getPlatformFees: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    deposit: {
      params: SignExecuteContractMethodParams<{ discordname: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    withdrawplatform: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    withdrawdev: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    updatefee: {
      params: SignExecuteContractMethodParams<{ newfee: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    subdestroy: {
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
  SubscribeInstance,
  SubscribeTypes.Fields
> {
  encodeFields(fields: SubscribeTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as SubscribeTypes.Fields;
  }

  eventIndex = { Subscribed: 0, Withdrawngu: 1, Feeupdate: 2, Destroysub: 3 };
  consts = { Codes: { InvalidCaller: BigInt(1) } };

  at(address: string): SubscribeInstance {
    return new SubscribeInstance(address);
  }

  tests = {
    getToken: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getToken", params, getContractByCodeHash);
    },
    getSubFee: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getSubFee", params, getContractByCodeHash);
    },
    getDevFees: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getDevFees", params, getContractByCodeHash);
    },
    getPlatformFees: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getPlatformFees", params, getContractByCodeHash);
    },
    deposit: async (
      params: TestContractParamsWithoutMaps<
        SubscribeTypes.Fields,
        { discordname: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "deposit", params, getContractByCodeHash);
    },
    withdrawplatform: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "withdrawplatform",
        params,
        getContractByCodeHash
      );
    },
    withdrawdev: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "withdrawdev", params, getContractByCodeHash);
    },
    updatefee: async (
      params: TestContractParamsWithoutMaps<
        SubscribeTypes.Fields,
        { newfee: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updatefee", params, getContractByCodeHash);
    },
    subdestroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<SubscribeTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "subdestroy", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const Subscribe = new Factory(
  Contract.fromJson(
    SubscribeContractJson,
    "",
    "7ce0dcb69ea4d29a13b974e16cf977891f8e061a7512037d8b9eb6f86b792ae7",
    []
  )
);

// Use this class to interact with the blockchain
export class SubscribeInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<SubscribeTypes.State> {
    return fetchContractState(Subscribe, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSubscribedEvent(
    options: EventSubscribeOptions<SubscribeTypes.SubscribedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Subscribed",
      fromCount
    );
  }

  subscribeWithdrawnguEvent(
    options: EventSubscribeOptions<SubscribeTypes.WithdrawnguEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Withdrawngu",
      fromCount
    );
  }

  subscribeFeeupdateEvent(
    options: EventSubscribeOptions<SubscribeTypes.FeeupdateEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Feeupdate",
      fromCount
    );
  }

  subscribeDestroysubEvent(
    options: EventSubscribeOptions<SubscribeTypes.DestroysubEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Subscribe.contract,
      this,
      options,
      "Destroysub",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | SubscribeTypes.SubscribedEvent
      | SubscribeTypes.WithdrawnguEvent
      | SubscribeTypes.FeeupdateEvent
      | SubscribeTypes.DestroysubEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      Subscribe.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getToken: async (
      params?: SubscribeTypes.CallMethodParams<"getToken">
    ): Promise<SubscribeTypes.CallMethodResult<"getToken">> => {
      return callMethod(
        Subscribe,
        this,
        "getToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSubFee: async (
      params?: SubscribeTypes.CallMethodParams<"getSubFee">
    ): Promise<SubscribeTypes.CallMethodResult<"getSubFee">> => {
      return callMethod(
        Subscribe,
        this,
        "getSubFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDevFees: async (
      params?: SubscribeTypes.CallMethodParams<"getDevFees">
    ): Promise<SubscribeTypes.CallMethodResult<"getDevFees">> => {
      return callMethod(
        Subscribe,
        this,
        "getDevFees",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPlatformFees: async (
      params?: SubscribeTypes.CallMethodParams<"getPlatformFees">
    ): Promise<SubscribeTypes.CallMethodResult<"getPlatformFees">> => {
      return callMethod(
        Subscribe,
        this,
        "getPlatformFees",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    deposit: async (
      params: SubscribeTypes.CallMethodParams<"deposit">
    ): Promise<SubscribeTypes.CallMethodResult<"deposit">> => {
      return callMethod(
        Subscribe,
        this,
        "deposit",
        params,
        getContractByCodeHash
      );
    },
    withdrawplatform: async (
      params?: SubscribeTypes.CallMethodParams<"withdrawplatform">
    ): Promise<SubscribeTypes.CallMethodResult<"withdrawplatform">> => {
      return callMethod(
        Subscribe,
        this,
        "withdrawplatform",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    withdrawdev: async (
      params?: SubscribeTypes.CallMethodParams<"withdrawdev">
    ): Promise<SubscribeTypes.CallMethodResult<"withdrawdev">> => {
      return callMethod(
        Subscribe,
        this,
        "withdrawdev",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    updatefee: async (
      params: SubscribeTypes.CallMethodParams<"updatefee">
    ): Promise<SubscribeTypes.CallMethodResult<"updatefee">> => {
      return callMethod(
        Subscribe,
        this,
        "updatefee",
        params,
        getContractByCodeHash
      );
    },
    subdestroy: async (
      params?: SubscribeTypes.CallMethodParams<"subdestroy">
    ): Promise<SubscribeTypes.CallMethodResult<"subdestroy">> => {
      return callMethod(
        Subscribe,
        this,
        "subdestroy",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  view = this.methods;

  transact = {
    getToken: async (
      params: SubscribeTypes.SignExecuteMethodParams<"getToken">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"getToken">> => {
      return signExecuteMethod(Subscribe, this, "getToken", params);
    },
    getSubFee: async (
      params: SubscribeTypes.SignExecuteMethodParams<"getSubFee">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"getSubFee">> => {
      return signExecuteMethod(Subscribe, this, "getSubFee", params);
    },
    getDevFees: async (
      params: SubscribeTypes.SignExecuteMethodParams<"getDevFees">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"getDevFees">> => {
      return signExecuteMethod(Subscribe, this, "getDevFees", params);
    },
    getPlatformFees: async (
      params: SubscribeTypes.SignExecuteMethodParams<"getPlatformFees">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"getPlatformFees">> => {
      return signExecuteMethod(Subscribe, this, "getPlatformFees", params);
    },
    deposit: async (
      params: SubscribeTypes.SignExecuteMethodParams<"deposit">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"deposit">> => {
      return signExecuteMethod(Subscribe, this, "deposit", params);
    },
    withdrawplatform: async (
      params: SubscribeTypes.SignExecuteMethodParams<"withdrawplatform">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"withdrawplatform">> => {
      return signExecuteMethod(Subscribe, this, "withdrawplatform", params);
    },
    withdrawdev: async (
      params: SubscribeTypes.SignExecuteMethodParams<"withdrawdev">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"withdrawdev">> => {
      return signExecuteMethod(Subscribe, this, "withdrawdev", params);
    },
    updatefee: async (
      params: SubscribeTypes.SignExecuteMethodParams<"updatefee">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"updatefee">> => {
      return signExecuteMethod(Subscribe, this, "updatefee", params);
    },
    subdestroy: async (
      params: SubscribeTypes.SignExecuteMethodParams<"subdestroy">
    ): Promise<SubscribeTypes.SignExecuteMethodResult<"subdestroy">> => {
      return signExecuteMethod(Subscribe, this, "subdestroy", params);
    },
  };

  async multicall<Calls extends SubscribeTypes.MultiCallParams>(
    calls: Calls
  ): Promise<SubscribeTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Subscribe,
      this,
      calls,
      getContractByCodeHash
    )) as SubscribeTypes.MultiCallResults<Calls>;
  }
}
