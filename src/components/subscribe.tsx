// Component Token Create
import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium imports
import { SubscribeConfig } from '@/utils/utils'

// Token Creation
export const SubscribeAutomation: FC<{
  config: SubscribeConfig
}> = ({ config }) => {
  //const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  // Subscribe  Variables (Updating DevFee and or SignalFee)
  const [supply, setSupply] = useState('')

  // Handle of TokenCreation
  /*
  const handleBuildTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (context.signerProvider) {
      const result = await BuildToken(context.signerProvider, symbol, name, decimals, supply)
      setOngoingTxId(result.txId)
    }
  }
  */

  // Form submit to insert values and receive input
  return (
    <>
      Subscribe ot $NGU signals
    </>
  )
}