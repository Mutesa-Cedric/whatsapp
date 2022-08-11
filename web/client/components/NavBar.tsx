import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function NavBar() {
    return (
        <div className="lg:px-52 flex items-center w-full justify-between text-white">
            <Link href="/">
                <div className="h-24 w-36 relative flex-shrink-0">
                    <Image src={'https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg'} alt="logo" objectFit='contain' layout='fill' />
                </div>
            </Link>
            <div className='flex items-center justify-between space-x-16 uppercase'>
                <Link href="/web">
                    <p className='navLinks'>WhatsApp web</p>
                </Link>
                <Link href="/features">
                    <p className='navLinks'>features</p>
                </Link>
                <Link href="/web">
                    <p className='navLinks'>download</p>
                </Link>
                <Link href="/security">
                    <p className='navLinks'>security</p>
                </Link>
                <Link href="/security">
                    <p className='navLinks'>privacy</p>
                </Link>
                <button className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                    <span>EN</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default NavBar
