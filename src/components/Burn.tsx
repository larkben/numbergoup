// Component `Burn.tsx`
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'

// Alephium imports
import { BurnTokenContract, BurnTokenWang } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { node } from '@alephium/web3'
import { SubscribeConfig, TokenBurnConfig } from '../services/utils'
import { useWallet } from '@alephium/web3-react'

export const TokenBurnAutomation: FC<{
  config: SubscribeConfig
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // Token Variables
  const [tokenburn, setTokenBurn] = useState('')

  // Handle of Subscription
  const handleBurn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const tokenBurnValue = BigInt(Number(tokenburn) * 1e7).toString()
      const result = await BurnTokenContract(signer, tokenBurnValue)
      setOngoingTxId(result.txId)
    }
  }

  const handleBurnWang = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const tokenBurnValue = BigInt(Number(tokenburn) * 1e5).toString();
      const result = await BurnTokenWang(signer, tokenBurnValue)
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
        <form onSubmit={handleBurn} style={{ alignContent: 'center', textAlign: 'center' }}>
          <>
            <h2 className={styles.title} style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              Alephium $NGU Burn {/*({config.network})*/}
            </h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              You are now burning your most valuable asset. All contracts are final and irreversible.{' '}
            </p>
            <label htmlFor="burn" style={{ color: 'white' }}>
              {' '}
              Amount of $NGU to be burned.{' '}
            </label>
            <input
              className={styles.inputToken}
              type="number"
              id="burn"
              name="burn"
              value={tokenburn}
              onChange={(e) => setTokenBurn(e.target.value)}
            />
            <br />
            <br />
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Burn $NGU" />
          </>
        </form>
        <br/>
        <form onSubmit={handleBurn} style={{ alignContent: 'center', textAlign: 'center' }}>
          <>
            <h2 className={styles.title} style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              Alephium $WANG Burn {/*({config.network})*/}
            </h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              Your asset. All contracts are final and irreversible.{' '}
            </p>
            <label htmlFor="burn" style={{ color: 'white' }}>
              {' '}
              Amount of $WANG to be burned.{' '}
            </label>
            <input
              className={styles.inputToken}
              type="number"
              id="burn"
              name="burn"
              value={tokenburn}
              onChange={(e) => setTokenBurn(e.target.value)}
            />
            <br />
            <br />
            <input className={styles.buttonDapp} type="submit" disabled={!!ongoingTxId} value="Burn $WANG" />
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
