import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import EncryptionAnimation from '../components/EncryptionAnimation'

const downloadLinks: { name: string, link: string, svg: JSX.Element }[] = [
  {
    name: "Android",
    link: "/android",
    svg: <svg width="14" height="14" fill="none" className="_wauiIcon__android _9u4c"><path d="M2.904 10.59c0 .365.324.663.722.663h.824v1.881c0 .477.415.866.925.866s.924-.387.924-.866v-1.882h1.44v1.88c0 .477.414.866.924.866.511 0 .924-.387.924-.865v-1.881h.825c.398 0 .721-.299.721-.664V4.413H2.904v6.176zM8.95 1.212L9.71.197c.045-.059.035-.139-.025-.178-.059-.037-.144-.018-.188.041l-.789 1.056A5.002 5.002 0 007.002.822c-.608 0-1.187.105-1.707.294L4.506.062c-.044-.06-.129-.08-.188-.041-.06.037-.07.116-.025.178l.76 1.016c-1.209.518-2.056 1.501-2.164 2.65h8.229c-.112-1.15-.96-2.133-2.168-2.652zM5.265 2.815a.483.483 0 01-.254-.071.43.43 0 01-.167-.189.39.39 0 01-.026-.243.411.411 0 01.124-.215.49.49 0 01.496-.091.45.45 0 01.205.155c.05.069.077.15.077.233a.406.406 0 01-.134.297.477.477 0 01-.321.124zm3.528 0a.483.483 0 01-.253-.071.43.43 0 01-.168-.189.39.39 0 01-.026-.243.411.411 0 01.125-.215.49.49 0 01.496-.091.45.45 0 01.205.155c.05.069.076.15.076.233a.406.406 0 01-.133.297.477.477 0 01-.322.124zm3.783 1.573c-.512 0-.925.387-.925.866v3.38c0 .477.415.866.925.866s.924-.387.924-.865V5.252c.002-.478-.411-.864-.925-.864zm-11.152 0c-.51 0-.924.387-.924.866v3.38c0 .477.415.866.924.866.512 0 .925-.387.925-.865V5.252c0-.478-.415-.864-.925-.864z" fill="currentColor"></path></svg>
  },

  {
    name: "iphone",
    link: "/unavailable",
    svg: <svg width="12" height="14" fill="none" className="_wauiIcon__apple _9u4c"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.973 0a3.133 3.133 0 01-.716 2.244 2.635 2.635 0 01-2.081.984 2.98 2.98 0 01.735-2.161A3.187 3.187 0 018.973 0zm1.455 5.916a3.181 3.181 0 00-.415 1.53 3.074 3.074 0 001.877 2.827 7.05 7.05 0 01-.976 1.989c-.575.86-1.178 1.7-2.135 1.716-.455.01-.762-.12-1.082-.257-.334-.142-.682-.29-1.227-.29-.577 0-.94.152-1.291.3-.303.127-.596.25-1.01.268-.911.034-1.608-.918-2.203-1.77-1.191-1.74-2.119-4.904-.876-7.057A3.417 3.417 0 013.966 3.42c.517-.011 1.013.188 1.448.363.332.133.629.253.872.253.214 0 .502-.115.838-.248.53-.21 1.178-.468 1.838-.398a3.256 3.256 0 012.566 1.387 3.181 3.181 0 00-1.1 1.14z" fill="currentColor"></path></svg>
  },
  {
    name: "Mac or Windows PC",
    link: "/download",
    svg: <svg width="16" height="14" fill="none" className="_wauiIcon__mac _9u4c"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.41 8.4h12.68v-7H1.41v7zM14.09 0H1.41C.633 0 0 .63 0 1.4v8.4c0 .77.634 1.4 1.41 1.4h4.93l-1.408 2.1v.7h5.636v-.7L9.16 11.2h4.932c.775 0 1.409-.63 1.409-1.4V1.4c0-.77-.634-1.4-1.41-1.4z" fill="currentColor"></path></svg>
  }
]

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <div className="flex items-center flex-col">
      <Head>
        <title>WhatsApp</title>
        <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
      </Head>
      <div className="flex flex-col justify-between" >

        {/* banner */}
        <div className="flex items-center justify-center my-12">
          <div className="flex flex-col space-y-4 mr-20">
            <div className="flex flex-col text-4xl mb-4 ">
              <span>Simple. Secure.</span>
              <span>Reliable messaging.</span>
            </div>
            <p className="max-w-[25vw] text-lg">
              With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.
            </p>
            <p className="text-[#5e5e5e] max-w-[25vw] pb-8">
              * Data charges may apply. Contact your provider for details.
            </p>
            <div className=" text-[#1cb39b] flex flex-col space-y-2 ">
              {
                downloadLinks.map(link => (
                  <Link href={link.link}>
                    <div className="flex items-center cursor-pointer hover:underline text-lg ">
                      {link.svg}
                      <p className="pl-4 pr-2">{link.name}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          <Image objectFit='contain'
            src="https://scontent.whatsapp.net/v/t39.8562-34/178505650_460141378430025_2455877548463147186_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=CLapMDW1tkcAX99kTJE&_nc_pt=5&_nc_ht=scontent.whatsapp.net&oh=01_AVzDYMG9OxH2mAOmkCZ5hqYE89CV2hl93yJ9pq7kyfwicQ&oe=62FD2D8C"
            height={600} width={310} />
        </div>
        {/* banner */}


        {/* ads */}
        <div className="w-full flex items-center justify-between space-x-6">
          <div className='w-[47vw] bg-[#d8e8ea] min-h-screen flex flex-col items-center justify-between '>
            <div className="flex flex-col items-center pt-20 space-y-10 mb-24">
              <h1 className="font-bold text-3xl ">WhatsApp Business App</h1>
              <p className='text-center text-lg max-w-xl text-[#1c1e21]'>
                <span className='text-[#39b3ed] hover:underline cursor-pointer'
                  onClick={() => router.push('/business')}
                >WhatsApp Business</span> is a free to download app that was
                built with the small business owner in mind. Create a catalog to
                showcase your products and services. Connect with your customers easily by using tools to automate,
                sort and quickly respond to messages.
              </p>
              <p className='text-center text-lg max-w-xl text-[#1c1e21]'>
                WhatsApp can also help medium and large businesses provide customer support and deliver
                important notifications to customers. Learn more about <span className='text-[#39b3ed] hover:underline cursor-pointer'
                  onClick={() => router.push('/business')}
                >WhatsApp Business API.</span>
              </p>
            </div>
            <Image src={'https://scontent.whatsapp.net/v/t39.8562-34/191731900_491358315413361_6968938602217354245_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=U_90mjWFTqcAX-RG328&_nc_pt=5&_nc_ht=scontent.whatsapp.net&oh=01_AVzGJkF-7KTZtPtyN3t1iZVqeyYN5P7PCqzC2jjQqmLNzg&oe=62FD0AF0'}
              height={410} width={400}
            />
          </div>
          <div className='w-[47vw] bg-[#e7f0e4] h-[120vh] flex items-center  flex-col'>
            {/* encryption animation */}
            <EncryptionAnimation />
            {/* encryption animation */}
            <div className="flex flex-col items-center space-y-4">
              <p className='text-[#5e5e5e] text-lg tracking-wide'>END-TO-END ENCRYPTION</p>
              <h1 className="font-bold text-4xl">Security by Default</h1>
              <p className='text-center max-w-xl text-lg pt-2'>
                Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating
                with can read or listen to them, and nobody in between, not even WhatsApp.
              </p>
            </div>

          </div>
        </div>
        {/* ads */}

        <div className="mx-auto mt-12 mb-20">
          <Link href={'/features'}>
            <button className="rounded-[28px] border-2 px-6 py-3 border-[#128c7e]/50 text-[#128c7e] text-lg uppercase">
              explore features
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
