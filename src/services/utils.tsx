import { NetworkId, ONE_ALPH } from "@alephium/web3"
import { loadDeployments } from "artifacts/ts/deployments"

//* Interfaces

export interface BurnToken {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenId: string
}

// !NEED TO BE CONFIGURED
export interface SwapTemplate {
  network: NetworkId
  groupIndex: number
  contractAddress: string           // Contract Addy
  contractId: string                // Contract Collects Fees, Takes Player With Highest Score
  tokenId: string                   // Burns $PACA or uses PACA to upgrade skills
}

// !NEED TO BE CONFIGURED
export interface Swap {
  network: NetworkId
  groupIndex: number
  contractAddress: string           // Contract Addy
  contractId: string                // Contract Collects Fees, Takes Player With Highest Score
  tokenId: string   
}

export interface SubscribeConfig {
  network: NetworkId
  groupIndex: number
  subscribeAddress: string               
  subscribeID: string                                                           // ID of the contract
  nguID: string
}

export function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId
  return network
}

export function getBackendUrl(): string {
  return process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://127.0.0.1:3019'
}

export function getMongoUrl(): string {
  return process.env.MONGO_URL ?? 'mongodb://localhost:27017'
}

function getPollingInterval(): number {
  const network = getNetwork()
  return network === 'testnet' ? 1000 : 100000
}

function getTokenBurnConfig(): BurnToken {
  const network = getNetwork()
  const groupIndex = 0
  const burnContract = loadDeployments(network).contracts.BurnToken.contractInstance
  const contractAddress = burnContract.address
  const contractId = burnContract.contractId
  const tokenId = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return {network, groupIndex, contractAddress, contractId, tokenId}
}

// Subscribe Config
function getSubscribeConfig(): SubscribeConfig {
  const network = getNetwork()
  const groupIndex = 0
  const subscribeContract = loadDeployments(network).contracts.Subscribe.contractInstance
  const subscribeAddress = subscribeContract.address
  const subscribeID = subscribeContract.contractId
  const nguID = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return { network, groupIndex, subscribeAddress, subscribeID, nguID }
}

// Exports
export const TokenBurnConfig = getTokenBurnConfig()
export const SubscribeConfig = getSubscribeConfig()
