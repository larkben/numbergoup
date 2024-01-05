import React from 'react'
import type { AppProps } from 'next/app'
import { AlephiumWalletProvider } from '@alephium/web3-react'
import { SubscribeConfig } from '@/utils/utils'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlephiumWalletProvider
      network={SubscribeConfig.network}
      addressGroup={SubscribeConfig.groupIndex}
    >
      <Component {...pageProps} />
    </AlephiumWalletProvider>
  )
}
