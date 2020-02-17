import React from 'react'

import { Footer, Header } from './lib'

export default (props) => {
  const { children } = props

  return (
    <div className="main">
      <div className="app">
        <Header />
        { children }
      </div>
      <Footer includeSubscription={true} />
    </div>
  )
}
