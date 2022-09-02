import Head from 'next/head'
import React from 'react'
import EncryptionAnimation from '../components/EncryptionAnimation'
import SecurityAds from '../components/SecurityAds'
import SecurityFeature from '../components/SecurityFeature'
import { securityAds, securityFeatures } from '../constants/securityFeatures'

function security() {
  return (
    <div>
      <Head>
        <title>WhatsApp Security</title>
        <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
      </Head>
      <main className="flex flex-col">
        <div className='w-full h-[52vh] bg-center bg-cover bg-no-repeat'
          style={{ backgroundImage: `url(/images/security-bg.png)`}}>
        </div>
        <div className="w-full bg-[#f0f4f9] h-auto">
          <div className="mx-auto bg-white w-3/4 px-40 pt-16 pb-40 space-y-4">
            <h1 className='text-4xl pb-8 font-semibold'>WhatsApp Security</h1>
            <div className='flex flex-col space-y-12'>
              {
                securityFeatures.map((feature, index) => (
                  index === 0 ? (
                    <div className="flex flex-col">
                      <SecurityFeature key={index} {...feature} />
                      <EncryptionAnimation />
                    </div>
                  ) :
                    (<SecurityFeature key={index} {...feature} />)
                ))
              }
            </div>
            <div className="grid grid-cols-2 gap-24 pt-24">
              {
                securityAds.map((ads, index) => (
                  <SecurityAds key={index} {...ads} />
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default security
