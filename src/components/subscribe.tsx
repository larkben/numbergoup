// Component Subscribe
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium imports
import {
  SubscribeContract,
  SubscribeDestroyContract,
  SubscribeWithdrawDevContract,
  SubscribeWithdrawPlatformContract
} from '@/services/token.service'
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
  const [discord, setDiscord] = useState<string>('')

  // Handle of Subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await SubscribeContract(signer, discord)
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
      <br />
      <style>@import url(&apos;https://fonts.googleapis.com/css2?family=Tektur&display=swap&apos;);</style>
      <div style={{ color: 'black' }}>
        <form onSubmit={handleSubscribe} style={{ alignContent: 'center', textAlign: 'center' }}>
          <>
            <h2 className={styles.title} style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              Alephium NGU Signals {/*({config.network})*/}
            </h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{ color: 'white', textAlign: 'center' }}> 777 NGU for signals. </p>
            <p style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              Please be patient as we process your request, and allow at least 1-2 hours.{' '}
            </p>
            <label htmlFor="symbol" style={{ color: 'white' }}>
              Discord Name in $NGU Server:
            </label>
            <input
              className={styles.inputToken}
              type="text"
              id="symbol"
              name="symbol"
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
            />
            <br />
            <br />
            <input
              className={styles.buttonDapp}
              type="submit"
              disabled={!!ongoingTxId}
              value="Subscribe to NGU Signals"
            />
          </>
        </form>
      </div>

      <br />

      <div style={{ color: 'white' }}>
        {ongoingTxId && <TxStatus txId={ongoingTxId} txStatusCallback={txStatusCallback} />}
      </div>

      <br />
    </>
  )
}
