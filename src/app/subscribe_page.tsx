import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react'
import { SubscribeConfig } from '@/utils/utils'
import { SubscribeAutomation } from '@/components/subscribe'
import { NodeProvider, EventSubscribeOptions } from '@alephium/web3'
//import { CreateToken, CreateTokenInstance, CreateTokenTypes } from 'artifacts/ts'

import Link from 'next/link'

export default function Subscribe() {
  
    return (
        <div className={styles.alignCenter}>
            <div className={styles.NFTheaderElement}>
                <button className={styles.buttonDapp}> <Link href='/' className={styles.link}> Back to Tools </Link> </button>
            </div>
            <br/>
            <div style={{backgroundColor: 'darkorange', padding: 20}} className={styles.showBorder}>
                <AlephiumConnectButton></AlephiumConnectButton>
                <h2 style={{color: 'black', textAlign: 'center'}}> Please connect wallet before creating token! </h2>
                <SubscribeAutomation config={SubscribeConfig}></SubscribeAutomation>
            </div>
        </div>
    )
}
