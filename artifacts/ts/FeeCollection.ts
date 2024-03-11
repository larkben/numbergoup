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
import { default as FeeCollectionContractJson } from "../testing/FeeCollection.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace FeeCollectionTypes {
  export type Fields = {
    tokenOne: HexString;
    tokenTwo: HexString;
    balanceOne: bigint;
    balanceTwo: bigint;
    fee: bigint;
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export type RecievedTokenEvent = ContractEvent<{
    from: Address;
    amount: bigint;
    id: HexString;
  }>;
  export type FeeRecievedEvent = ContractEvent<{
    from: Address;
    amount: bigint;
    id: HexString;
  }>;
  export type DestroyEvent = ContractEvent<{ destroyer: Address }>;
  export type WithdrawlAssetsEvent = ContractEvent<{ from: Address }>;
  export type SuccessEvent = ContractEvent<{ from: Address }>;

  export interface CallMethodTable {
    getTokenOne: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getTokenTwo: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getBalanceOne: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getBalanceTwo: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getFee: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
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
  FeeCollectionInstance,
  FeeCollectionTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as FeeCollectionTypes.Fields;
  }

  eventIndex = {
    RecievedToken: 0,
    FeeRecieved: 1,
    Destroy: 2,
    WithdrawlAssets: 3,
    Success: 4,
  };
  consts = {
    ErrorCodes: { InvalidRecieve: BigInt(1), InvalidCaller: BigInt(3) },
  };

  at(address: string): FeeCollectionInstance {
    return new FeeCollectionInstance(address);
  }

  tests = {
    getTokenOne: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenOne", params);
    },
    getTokenTwo: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenTwo", params);
    },
    getBalanceOne: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getBalanceOne", params);
    },
    getBalanceTwo: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getBalanceTwo", params);
    },
    getFee: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getFee", params);
    },
    getSymbol: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    getName: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getName", params);
    },
    gettoken: async (
      params: TestContractParams<FeeCollectionTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "gettoken", params);
    },
    withdrawalassets: async (
      params: Omit<
        TestContractParams<FeeCollectionTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawalassets", params);
    },
    editfee: async (
      params: TestContractParams<FeeCollectionTypes.Fields, { edit: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "editfee", params);
    },
  };
}

// Use this object to test and deploy the contract
export const FeeCollection = new Factory(
  Contract.fromJson(
    FeeCollectionContractJson,
    "",
    "037be2975a9253dfe116077fa5b404f46ce64a23e2ccefbf2905dce4b66a7a7c"
  )
);

// Use this class to interact with the blockchain
export class FeeCollectionInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FeeCollectionTypes.State> {
    return fetchContractState(FeeCollection, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeRecievedTokenEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.RecievedTokenEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "RecievedToken",
      fromCount
    );
  }

  subscribeFeeRecievedEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.FeeRecievedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "FeeRecieved",
      fromCount
    );
  }

  subscribeDestroyEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.DestroyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "Destroy",
      fromCount
    );
  }

  subscribeWithdrawlAssetsEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.WithdrawlAssetsEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "WithdrawlAssets",
      fromCount
    );
  }

  subscribeSuccessEvent(
    options: EventSubscribeOptions<FeeCollectionTypes.SuccessEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollection.contract,
      this,
      options,
      "Success",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | FeeCollectionTypes.RecievedTokenEvent
      | FeeCollectionTypes.FeeRecievedEvent
      | FeeCollectionTypes.DestroyEvent
      | FeeCollectionTypes.WithdrawlAssetsEvent
      | FeeCollectionTypes.SuccessEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      FeeCollection.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getTokenOne: async (
      params?: FeeCollectionTypes.CallMethodParams<"getTokenOne">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getTokenOne">> => {
      return callMethod(
        FeeCollection,
        this,
        "getTokenOne",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTokenTwo: async (
      params?: FeeCollectionTypes.CallMethodParams<"getTokenTwo">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getTokenTwo">> => {
      return callMethod(
        FeeCollection,
        this,
        "getTokenTwo",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getBalanceOne: async (
      params?: FeeCollectionTypes.CallMethodParams<"getBalanceOne">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getBalanceOne">> => {
      return callMethod(
        FeeCollection,
        this,
        "getBalanceOne",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getBalanceTwo: async (
      params?: FeeCollectionTypes.CallMethodParams<"getBalanceTwo">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getBalanceTwo">> => {
      return callMethod(
        FeeCollection,
        this,
        "getBalanceTwo",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getFee: async (
      params?: FeeCollectionTypes.CallMethodParams<"getFee">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getFee">> => {
      return callMethod(
        FeeCollection,
        this,
        "getFee",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: FeeCollectionTypes.CallMethodParams<"getSymbol">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        FeeCollection,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: FeeCollectionTypes.CallMethodParams<"getName">
    ): Promise<FeeCollectionTypes.CallMethodResult<"getName">> => {
      return callMethod(
        FeeCollection,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends FeeCollectionTypes.MultiCallParams>(
    calls: Calls
  ): Promise<FeeCollectionTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      FeeCollection,
      this,
      calls,
      getContractByCodeHash
    )) as FeeCollectionTypes.MultiCallResults<Calls>;
  }
}
