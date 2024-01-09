// Component Subscribe
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium imports
import { SubscribeContract, SubscribeDestroyContract, SubscribeWithdrawDevContract, SubscribeWithdrawPlatformContract } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { node } from '@alephium/web3'
import { SubscribeConfig } from '@/services/utils'
import { useWallet } from '@alephium/web3-react'

// Subscription
export const SubscribeAutomation: FC<{
  config: SubscribeConfig
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // Token Variables
  const [discord, setDiscord] = useState<string>("")

  // Handle of Subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await SubscribeContract(signer, discord)
      setOngoingTxId(result.txId)
    }
  }

  const handleDestroySubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await SubscribeDestroyContract(signer)
      setOngoingTxId(result.txId)
    }
  }

  const handleWithdrawDevSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await SubscribeWithdrawDevContract(signer)
      setOngoingTxId(result.txId)
    }
  }

  const handleWithdrawLeadSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await SubscribeWithdrawPlatformContract(signer)
      setOngoingTxId(result.txId)
    }
  }

  // Gets the TX and updates according to status on chain
  const txStatusCallback = (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
    if ((status.type === 'Confirmed' && numberOfChecks > 2) || (status.type === 'TxNotFound' && numberOfChecks > 3)) {
      setOngoingTxId(undefined)
    }

    return Promise.resolve()
  } 

  console.log('ongoing..', ongoingTxId)

  // Form submit to insert values and receive input
  return (
    <>
      <br/>
      <style>
        @import url(&apos;https://fonts.googleapis.com/css2?family=Tektur&display=swap&apos;);
      </style>
      <div style={{color: 'black'}} >
        <form onSubmit={handleSubscribe} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> Alephium NGU Signals ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> 777 NGU for one month of signals. </p>
            <p style={{color: 'black', textAlign: 'center'}}> Please be patient as we process your request, and allow at least 1-2 hours. </p>
            <p style={{color: 'black', textAlign: 'center'}}> Refunds will not be processed more than 24 hours after purchase. After 24 hours all sales are final. </p>
            <label htmlFor="symbol"> Discord Name in $NGU :</label>
            <input
                className={styles.inputToken}
                type="text"
                id="symbol"
                name="symbol"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
            />
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Subscribe to NGU Signals" />
          </>
        </form>
        {/* Start of dev / lead facing materials - make webpage specifically for this*/}
        <form onSubmit={handleDestroySubscribe} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Destroy Subscription Contract </p>
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Destroy Contract" />
          </>
        </form>
        <br />
        <br />
        <form onSubmit={handleWithdrawDevSubscribe} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Withdraw Dev Fees </p>
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Collect Dev Fees" />
          </>
        </form>
        <br />
        <br />
        <form onSubmit={handleWithdrawLeadSubscribe} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Withdraw Platform Fees </p>
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Collect Lead Fees" />
          </>
        </form>
      </div>

      <br/>

      <div style={{color: 'white'}}>
        {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}
      </div>

      <br/>
    </>
  )
}
