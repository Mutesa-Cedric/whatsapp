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
          style={{ backgroundImage: `url(https://z-p3-scontent.fkgl3-1.fna.fbcdn.net/v/t39.8562-6/217186020_771263430211888_7039309491108113142_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=myEmPnytyYkAX-KP93O&_nc_pt=5&_nc_ht=z-p3-scontent.fkgl3-1.fna&oh=00_AT_rxl4qJ8p9alQmReNOAFetwLutuA8eyrkyFjwGkVcBMA&oe=62FE4FB2)` }}>
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
