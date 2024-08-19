
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy, Burn, Deposit, Destroyburn, Subdestroy, Updatedevfee, Withdrawdev, Withdrawplatform, BurnWang, WormEatAlph, WormEatNgu, DestroyWorm, WormWithdrawAlph } from '../../artifacts/ts/scripts'
import { TokenBurnConfig, SubscribeConfig, WangBurnConfig } from './utils'
import { BurnToken, Faucet } from 'artifacts/ts'
import * as web3 from '@alephium/web3'
import { stringToHex } from '@alephium/web3'

//? Token Burn Services
export const BurnTokenContract = async (
  signerProvider: SignerProvider,
  amount: string,
): Promise<ExecuteScriptResult> => {
  return await Burn.execute(signerProvider, {
    initialFields: {
      contract: TokenBurnConfig.contractId,
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: TokenBurnConfig.tokenId, amount: amount}]
  })
}

// Destroy the Burn contract
export const DestroyBurnContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await DestroyWorm.execute(signerProvider, {
    initialFields: {
      contract: "141f2ca1d8821699354c75d0d9e03a76226cde89ef18028c64f90c70cb5bc100"
    },
    attoAlphAmount: DUST_AMOUNT
  })
}
//? End of Burn Services

//* Burn Token $WANG - needs destroy function
export const BurnTokenWang = async (
  signerProvider: SignerProvider,
  amount: string,
): Promise<ExecuteScriptResult> => {
  return await BurnWang.execute(signerProvider, {
    initialFields: {
      contract: WangBurnConfig.contractId,
      amount: BigInt(amount),
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: WangBurnConfig.tokenId, amount: amount}]
  })
}

//? Subscription Services
export const SubscribeContract = async (
  signerProvider: SignerProvider,
  discord: string,
): Promise<ExecuteScriptResult> => {
  return await Deposit.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID,
      discordname: web3.stringToHex(discord) 
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: SubscribeConfig.nguID, amount: 7770000000n }] // - add zero mainnet
  })
}

export const SubscribeDestroyContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Subdestroy.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const SubscribeUpdateDevFeeContract = async (
  signerProvider: SignerProvider,
  amount: string,
): Promise<ExecuteScriptResult> => {
  return await Updatedevfee.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID,
      newfee: BigInt(amount) 
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const SubscribeWithdrawDevContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Withdrawdev.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

export const SubscribeWithdrawPlatformContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await Withdrawplatform.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID 
    },
    attoAlphAmount: DUST_AMOUNT
  })
}

//? End of Subscription Services

//* Start of Burn Automation

const burnwormid = "dd07dc72b72bce65f834f96f7f8609609f59794ee779cd08e4560de269ad5a00"

//? Takes ALPH as FEE to burn tokens
export const BurnWormAlphContract = async (
  signerProvider: SignerProvider,
  tokenid: string,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await WormEatAlph.execute(signerProvider, {
    initialFields: {
      contract: "dd07dc72b72bce65f834f96f7f8609609f59794ee779cd08e4560de269ad5a00",
      amount: BigInt(amount),
      id: tokenid
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenid, amount: BigInt(amount) }, {id: web3.ALPH_TOKEN_ID, amount: 500000000000000000n }]
  })
}

export const CollectBurnWormAlph = async (
  signerProvider: SignerProvider,
): Promise<ExecuteScriptResult> => {
  return await WormWithdrawAlph.execute(signerProvider, {
    initialFields: {
      contract: "dd07dc72b72bce65f834f96f7f8609609f59794ee779cd08e4560de269ad5a00"
    },
    attoAlphAmount: DUST_AMOUNT,
  })
}

//? Takes NGU as FEE to burn tokens
export const BurnWormNguContract = async (
  signerProvider: SignerProvider,
  tokenid: string,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await WormEatNgu.execute(signerProvider, {
    initialFields: {
      contract: "dd07dc72b72bce65f834f96f7f8609609f59794ee779cd08e4560de269ad5a00",
      amount: BigInt(amount),
      id: tokenid
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenid, amount: BigInt(amount) }, {id: "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200", amount: 770000000n }]
  })
}

//? Takes NGU as FEE to burn tokens
export const DestroyBurnWorm = async (
  signerProvider: SignerProvider,
): Promise<ExecuteScriptResult> => {
  return await DestroyWorm.execute(signerProvider, {
    initialFields: {
      contract: "4ba72fef7ca26a1207effdcbe31d5ebe073b3a01e7d0921cf7df9f76c9a1f100",
    },
    attoAlphAmount: DUST_AMOUNT
  })
}




