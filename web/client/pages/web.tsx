import Head from 'next/head'
import React from 'react'
import UnderMaintenance from '../components/UnderMaintenance'

function web() {
  return (
    <div className={'flex items-center justify-center my-12'}>
      <Head>
        <title>Whatsapp Web</title>
        <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
      </Head>
      <UnderMaintenance />
    </div>
  )
}

export default web
