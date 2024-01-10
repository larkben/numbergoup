// Component navbar.tsx
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { NodeProvider } from '@alephium/web3';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <style>
            @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
      <div className={styles.logo}>NGU</div>
      <ul className={styles.navItems}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/subscribe">
            $NGU Signals
          </Link>
        </li>
        <li>
          <Link href="/burn">
            Burn $NGU
          </Link>
        </li>
        <li>
          <Link href="/">
            Coming Soon!
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
};