import React from 'react'
import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
function download() {
  return (
    <div className="flex space-x-6 justify-center">
      <Head>
        <title>WhatsApp</title>
        <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
      </Head>
      <div className='xl:w-[47vw] bg-[#e7f0e4] h-[120vh] flex items-center  flex-col py-20 px-20'>
        <h3 className="tracking-wide text-3xl mb-14">Phones</h3>
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-center space-y-4">
            <Image objectFit="contain"
              height={350} width="200"
              src="https://z-p3-scontent.fkgl3-1.fna.fbcdn.net/v/t39.8562-6/199496234_481826579786653_2728461741738467210_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=UTuuJ2jcySYAX8ub0xi&_nc_pt=5&_nc_ht=z-p3-scontent.fkgl3-1.fna&oh=00_AT-oAi5_iG1-ljx0_L4DToYt3aGNYjG6wtvfpAqn1KMvXw&oe=62FD1609" />
            <Link href="/android">
              <button className="bg-green py-3 px-7 rounded-3xl text-white">
                Android
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image objectFit="contain"
              height={350} width="200"
              src="https://z-p3-scontent.fkgl3-1.fna.fbcdn.net/v/t39.8562-6/199550118_324755862565614_5691081457398710133_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=81lIK4NL19EAX8UrUDk&_nc_pt=5&_nc_ht=z-p3-scontent.fkgl3-1.fna&oh=00_AT86n6fovpdeTSUk8h7aqTWzuOZvkyB-y-mx8UFEs0eqPw&oe=62FCBCFB" />
            <button className="bg-green py-3 px-7 rounded-3xl text-white">
              iPhone
            </button>
          </div>
        </div>
        <div className="mt-20 space-y-5">
          <h3 className="text-2xl text-center max-w-[30vw] tracking-wide">Visit <a href="http://whatsapp.com/dl" className="text-link">whatsapp.com/dl</a> on your mobile phone to install. </h3>
          <p className="text-[#5e5e5e]">By installing WhatsApp, you agree to our <a href="https://www.whatsapp.com/legal/" className="text-link">Terms &amp; Privacy Policy</a>.</p>
        </div>
      </div>
      <div className='xl:w-[47vw] bg-[#fcf2c6] min-h-screen flex flex-col items-center  py-20 px-20'>
        <h3 className="tracking-wide text-3xl mb-14">Mac or Windows PC</h3>
        <div className="flex flex-col items-center text-[#5e5e5e] ">
          <Image objectFit="contain"
            src="https://scontent.whatsapp.net/v/t39.8562-34/287074969_366222032253518_527990105710623653_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=8IK9bpQGIrQAX9hyC16&_nc_pt=5&_nc_ht=scontent.whatsapp.net&oh=01_AVw1LgFc83t70KGlBryISucHJnVSSvTiXD5GO9Gx7fuqDg&oe=62FCE37B"
            width="380" height="280" />
          <p >Windows 10 and higher. WhatsApp must be installed on your phone.</p>
          <Link href="/faq">
            <p className="text-link hover:underline cursor-pointer py-4">Learn more about desktop experiences on WhatsApp</p>
          </Link>
          <div className="mb-8">
            By clicking the Download button, you agree to our
            <Link href="/legal" >
              <span className="text-link hover:underline pl-1 cursor-pointer">Terms & Privacy Policy</span>
            </Link>
          </div>
          <Image objectFit="contain" src="https://z-p3-scontent.fkgl3-1.fna.fbcdn.net/v/t39.8562-6/215879867_338133114701801_84294422241792448_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6825c5&_nc_ohc=hgB4tuAQX5wAX9db5xG&_nc_pt=5&_nc_ht=z-p3-scontent.fkgl3-1.fna&oh=00_AT-734WrsKuN3RgEViSoAZ9O0WE7XKb4xm2CDK9OMG9SFw&oe=62FD1982"
          width={150} height={100} className="cursor-pointer "/>
        </div>
      </div>
    </div>
  )
}

export default download