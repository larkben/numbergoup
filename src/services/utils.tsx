import { NetworkId, ONE_ALPH } from "@alephium/web3"

//* Interfaces

export interface BurnToken {
  network: NetworkId
  groupIndex: number
  contractAddress: string
  contractId: string
  tokenId: string
}

export interface BurnWorm {
  network: NetworkId
  groupIndex: number
  contractAddress: string           // Contract Addy
  contractId: string                // Contract Collects Fees ALPH 0.5 and NGU 7
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
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'mainnet') as NetworkId
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
  return network === 'mainnet' ? 1000 : 100000
}

function getTokenBurnConfig(): BurnToken {
  const network = getNetwork()
  const groupIndex = 0
  const contractAddress = "ufWhVmdLgbruPiwPEpJv2gsWE2M9PrE9BCSwMx65AxpP"
  const contractId = "0e7d5eebc82853ff28113a23ac81387b2ff910d764c4c240d4c1f29ec5a44f00"
  const tokenId = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return {network, groupIndex, contractAddress, contractId, tokenId}
}

function getTokenBurnWangConfig(): BurnToken {
  const network = getNetwork()
  const groupIndex = 0
  const contractAddress = "22xwWK2vB8DNyJ34TbpME3JVbCYyx59e5Lxz54TkHGiqd"
  const contractId = "7af61a417a7d51354cb9072799487d936a2dff09338e36e2ede08786735ec500"
  const tokenId = "c1aeea313e36454f35beaf40130c9219faa40ba645aff93e16429146039f8202"     // NGU TOKEN
  return {network, groupIndex, contractAddress, contractId, tokenId}
}

// Subscribe Config
function getSubscribeConfig(): SubscribeConfig {
  const network = getNetwork()
  const groupIndex = 0
  const subscribeAddress = "23oZ2YSF4jS1YFijq5r11gELjcrVtUnfVPnTQxNMPDV3V"
  const subscribeID = "876a253748760a124f50bbb0d0621c5e603422ed7a65e09592e9fd4d24075e00"
  const nguID = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return { network, groupIndex, subscribeAddress, subscribeID, nguID }
}

function getBurnWormConfig(): BurnWorm {
  const network = getNetwork()
  const groupIndex = 0
  const contractAddress = "255wC7Sqr6rL4cA5S8AP6PnoMQHD7rRbkY5nbkfpVnnC7"
  const contractId = "9a782ff1422dd73ae286576027ccfe7ac4a89ccfcaf83373409f48e48b950e00"
  const tokenId = "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200"     // NGU TOKEN
  return { network, groupIndex, contractAddress, contractId, tokenId }
}

// Exports
export const TokenBurnConfig = getTokenBurnConfig()
export const SubscribeConfig = getSubscribeConfig()
export const WangBurnConfig = getTokenBurnWangConfig()
export const BurnWormConfig = getBurnWormConfig()
