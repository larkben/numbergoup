
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Destroytoken, Burn, Deposit, Destroyburn, Subdestroy, Updatedevfee, Withdrawdev, Withdrawplatform, BurnWang, WormEatAlph, WormEatNgu, DestroyWorm } from '../../artifacts/ts/scripts'
import { TokenBurnConfig, SubscribeConfig, WangBurnConfig, BurnWormConfig } from './utils'
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

export const DestroyBurnContract = async (
  signerProvider: SignerProvider
): Promise<ExecuteScriptResult> => {
  return await DestroyWorm.execute(signerProvider, {
    initialFields: {
      contract: "80ecb8bb6715f21812be1fac53ee8f306b0d1b08557a9b0ec7a51f40037c2900"
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

//? Takes ALPH as FEE to burn tokens
export const BurnWormAlphContract = async (
  signerProvider: SignerProvider,
  tokenid: string,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await WormEatAlph.execute(signerProvider, {
    initialFields: {
      contract: BurnWormConfig.contractId,
      amount: BigInt(amount),
      id: tokenid
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenid, amount: BigInt(amount) }, {id: web3.ALPH_TOKEN_ID, amount: 500000000000000000n}]
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
      contract: BurnWormConfig.contractId,
      amount: BigInt(amount),
      id: tokenid
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: tokenid, amount: BigInt(amount)}, {id: BurnWormConfig.tokenId, amount: 70000000n}]
  })
}



