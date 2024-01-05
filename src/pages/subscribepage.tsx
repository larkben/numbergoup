// Page swaps.tsx
import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { SubscribeAutomation } from '@/components/subscribe';
import { SubscribeConfig } from '@/utils/utils';

//const API_KEY = "q4YJcksGa1ISzWPspxpSlKppgoHzodnpyWANx8nxtsUIFhtJ";
//const nodeProvider = new NodeProvider('http://98.227.84.182:12973', API_KEY);

export default function Signals() {

  return (
      <div>
        <AlephiumConnectButton></AlephiumConnectButton>
        <SubscribeAutomation config={SubscribeConfig}></SubscribeAutomation>
      </div>
  )
}