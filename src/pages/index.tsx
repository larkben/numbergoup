// Page index.tsx
import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'
import { AlephiumWalletProvider } from '@alephium/web3-react';

export default function HomePage() {

    useEffect(() => {
        
    }, []);

  return (
      <div>
        <br/>
        <div>
        <h1> Number Go Up </h1>
        <h5> A project gearing up for something explosive! </h5>
        </div>
        <div>
          <div>
            <table>
              <tr> <button> <Link href="/subscribepage"> Signals Subscription </Link></button> </tr>
              <tr> <button> <Link href="/"> WhitePaper </Link></button> </tr>
              <tr> <button> <Link href="/"> Profile </Link></button> </tr>
              <tr> <button> <Link href="/"> Charts </Link></button> </tr>
            </table>
          </div>
        </div>
        <br/>
      </div>
  )
}
