// Page index.tsx
import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { NodeProvider } from '@alephium/web3';

// Graphics
import { ThreeTorus } from '@/components/ThreeTorus';
import { SubscribeConfig } from '@/services/utils';

export default function HomePage() {

    useEffect(() => {
        
    }, []);

  return (
      <div>

        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <ThreeTorus config={SubscribeConfig}></ThreeTorus>
        <br/>
        <div className={styles.NFTheader}>
        <h1 className={styles.alphpacaTitleGlow}> NGU Money </h1>
        <h5 className={styles.pacaDescript}> A project specializing in number go up technologies. </h5>
        </div>

        <div className={styles.movingText}>
          <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                "You buy, NUMBER GO UP!",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "You sell, NUMBER GO UP!",
                1000,
                'You do nothing, ... NUMBER STILL GO UP!',
                1000,
                'Welcome to NGU.',
                1000,
                'A project that only goes up and likes the number 7.',
                1000
            ]}
            speed={30}
            repeat={Infinity}
          />
        </div>

        <div className={styles.uiHub}>
          <div className={`${styles.showBorder} ${styles.uiNav}`} style={{height: 300}}>
            <table className={styles.uiNavItems}>
              <tr> <button className={styles.buttonSite}> <Link href="/subscribe" className={styles.link}> $NGU Signals </Link></button> </tr>
              <tr> <button className={styles.buttonSite}> <Link href="/burn" className={styles.link}> 🔥 </Link></button> </tr>
              <tr> <button className={styles.buttonSite}> <Link href="/" className={styles.link}> Coming Soon! </Link></button> </tr>
              <tr> <button className={styles.buttonSite}> <Link href="/" className={styles.link}> Coming Soon! </Link></button> </tr>
            </table>
          </div>
        </div>
        <br/>
      </div>
  )
}
