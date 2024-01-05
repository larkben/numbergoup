import Image from 'next/image'
import styles from './page.module.css'

import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      NGU.money
      <Link href="/subscribe_page"> Subscribe to $NGU Signals </Link>
    </main>
  )
}
