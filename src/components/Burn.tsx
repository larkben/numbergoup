// Component `Burn.tsx`
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium imports
import { BurnTokenContract } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { node } from '@alephium/web3'
import { SubscribeConfig } from '@/services/utils'
import { useWallet } from '@alephium/web3-react'

// Burn $NGU
export const BurnAutomation : FC<{
  config: SubscribeConfig
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // Token Variables
  const [burn, setBurn] = useState('')

  // Handle of TokenCreation
  const handleBurn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await BurnTokenContract(signer, burn)
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
        <form onSubmit={handleBurn} style={{alignContent: 'center', textAlign: 'center'}}>
          <>
            <h2 className={styles.title} style={{color: 'black', textAlign: 'center'}}> Alephium NGU Signals ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{color: 'black', textAlign: 'center'}}> Enter in how much $NGU to burn. </p>
            <label htmlFor="symbol"> Discord Name in $NGU :</label>
            <input
                className={styles.inputToken}
                type="text"
                id="symbol"
                name="symbol"
                value={burn}
                onChange={(e) => setBurn(e.target.value)}
            />
            <br/>
            <br/>
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Burn $NGU" />
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

