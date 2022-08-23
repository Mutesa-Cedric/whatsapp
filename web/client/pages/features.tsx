import Head from 'next/head'
import React from 'react'
import Feature from '../components/Feature';
import { features } from '../constants/features';
function Features() {

  // determining postition of a feature
  const featuresOnLeft = features.filter(feature => feature.side === "left");
  const featuresOnRight = features.filter(feature => feature.side === "right");

  return (
    <div>
      <Head>
        <title>WhatsApp Features</title>
        <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
      </Head>
      <div className='grid h-full grid-cols-1 md:grid-cols-2 gap-4 px-6'>
        {/* left */}
        <div className='featuresContainer'>
          {featuresOnLeft.map(feature => (
            <Feature key={feature.name} {...feature} />
          ))}
        </div>

        {/* right */}
        <div className='featuresContainer'>
          {featuresOnRight.map(feature => (
            <Feature key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
