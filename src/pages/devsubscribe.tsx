import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Router from './router'

import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react'
import { NodeProvider, EventSubscribeOptions } from '@alephium/web3'
import { CreateToken, CreateTokenInstance, CreateTokenTypes } from 'artifacts/ts'

import Link from 'next/link'
import { DevSubscribeAutomation } from '@/components/DevSubscribe'
import { SubscribeConfig } from '@/services/utils'

// Testnet: https://wallet-v20.testnet.alephium.org

// Mainnet: https://node-alephium.ono.re/

export default function AutoSubscribe() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.buttonDapp}> <Link href='/' className={styles.link}> Back to Tools </Link> </button>
            </div>
            <br/>
            <div style={{backgroundColor: 'green', padding: 20}} className={styles.showBorder}>
                <AlephiumConnectButton></AlephiumConnectButton>
                <h2 style={{color: 'black', textAlign: 'center'}}> Please connect wallet before subscribing to $NGU signals! </h2>
                {/*<TokenDapp config={TokenFaucetConfig}></TokenDapp> This is the $PACA faucet; actively not in use at the moment*/}
                {/*<DevBoard config={TokenFaucetConfig}></DevBoard> This is the dev dashboard*/}
                <DevSubscribeAutomation config={SubscribeConfig}/>
            </div>
        </div>
    )
}