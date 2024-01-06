
import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Topup, Sendout, Destroy, Buildtoken, Gettoken, Editfee, Destroytoken, Burn, Deposit } from '../../artifacts/ts/scripts'
import { TokenBurnConfig, SubscribeConfig } from './utils'
import { BurnToken, Faucet } from 'artifacts/ts'
import * as web3 from '@alephium/web3'

// Token Burn
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

// Subscribe 
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
    tokens: [{id: SubscribeConfig.nguID, amount: 777000000n }] // - add zero mainnet
  })
}



