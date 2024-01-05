// Router

// Imports
import { useRouter } from 'next/router'
import Home from './index'
import Signals from './subscribepage'

import React from 'react'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/subscribepage',
    component: Signals
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
