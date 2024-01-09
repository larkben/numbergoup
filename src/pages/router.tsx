// Router

// Imports
import { useRouter } from 'next/router'
import Home from './index'
import Swaps from './swaps'
import Token from './subscribe'
import Tools from './tools'
import NFT from './swaps'

import React from 'react'
import AutoSubscribe from './subscribe'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tools',
    component: Tools
  },
  {
    path: '/swaps',
    component: Swaps
  },
  {
    path: '/subscribe',
    component: AutoSubscribe
  }
]

export default function Router() {
  const router = useRouter()
  const { pathname } = router

  const route = routes.find(route => route.path === pathname)

  if (!route) {
    return <div>Page not found, ALPHpaca&apos;s pulled the plug.</div>
  }

  const { component: Component } = route

  return <Component />
}
