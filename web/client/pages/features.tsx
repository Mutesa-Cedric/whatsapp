import Head from 'next/head'
import React from 'react'

function Features() {
  return (
    <div>
      <Head>
        <title>WhatsApp Features</title>
        <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6'>
        {/* left */}
        <div className='cardContainer'>
          
        </div>

        {/* right */}
        <div className='cardContainer'>


        </div>
      </div>
    </div>
  )
}

export default Features
