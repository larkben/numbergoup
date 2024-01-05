import { NetworkId, ONE_ALPH } from "@alephium/web3"
//import { loadDeployments } from "../../artifacts/ts/deployments" nothing deployed quite yet

//* Interfaces
export interface SubscribeConfig {
  network: NetworkId
  groupIndex: number
  subscribeAddress: string               
  subscribeID: string                                                           // ID of the contract
  nguID: string
}

export function getNetwork(): NetworkId {
    const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId // change network
    return network
}

// Subscribe Config
function getSubscribeConfig(): SubscribeConfig {
    const network = getNetwork()
    const subscribe = "helloworld"
    const groupIndex = 1 //subscribe //.groupIndex
    const subscribeAddress = subscribe //.address
    const subscribeID = subscribe //.contractId
    const nguID = "23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02"     // $PACA ID
    return { network, groupIndex, subscribeAddress, subscribeID, nguID }
}

export const SubscribeConfig = getSubscribeConfig()
