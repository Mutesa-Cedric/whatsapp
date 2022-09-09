import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className="w-full flex items-center justify-center py-24">
            <Head>
                <title>Page Not Found</title>
                <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
            </Head>
            <div className={'flex flex-col items-start justify-center mx-auto space-y-3'}>
                <h1 className='font-bold text-4xl'>We couldn't find the page you were looking for</h1>
                <p className="max-w-4xl">Looks like you're looking for a page that doesn't exist. Or a page we might have just deleted. Either way, go back or be sure to check the url, your spelling and try again.</p>
                <Link href={'/'}>
                    <button className="bg-green py-3 px-8 rounded-[50px] text-white uppercase">go to homepage</button>
                </Link>
            </div>
        </div>

    )
}

export default NotFound