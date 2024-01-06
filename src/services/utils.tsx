import { NetworkId, ONE_ALPH } from "@alephium/web3"
import { genLoadDeployments } from "@alephium/cli"

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
  const groupIndex = 1
  const contractAddress = "uWNJCzc9jYyBTkmQvRfFT9J2h6E7tVaesSztCu1E2Bmh"
  const contractId = "0c25a4d394b16161459848f5b89088bf303776752dd467b0c1c96c2f7a5eeb00"
  const tokenId = "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502"     // MONTY COIN
  return {network, groupIndex, contractAddress, contractId, tokenId}
}

// Subscribe Config
function getSubscribeConfig(): SubscribeConfig {
  const network = getNetwork()
  const groupIndex = 0
  const subscribeAddress = "w5UXSmiVagH8Q8SrsiBb47w3BDQJ1r8pGc8b3iF6eGDM"
  const subscribeID = "237c8a2e118eb0b35ca1b073ae7e17eb2c908aeb862e9891cc7e3e3d8a30c100"
  const nguID = "c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501"     // token id
  return { network, groupIndex, subscribeAddress, subscribeID, nguID }
}

// Exports
export const TokenBurnConfig = getTokenBurnConfig()
export const SubscribeConfig = getSubscribeConfig()
