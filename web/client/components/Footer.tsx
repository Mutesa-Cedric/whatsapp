import Link from 'next/link'
import React from 'react'
import { footerLinks } from '../constants/links'
function Footer() {
  return (
    <div className="grid grid-cols-4 lg:px-40 lg:pt-12 lg:pb-16">
      {
        footerLinks.map((section,i) => (
          <div className="space-y-8 text-white" key={i}>
            <h3 className="uppercase font-bold tracking-widest leading-[17px] text-[#f0f4f9]">{section.title}</h3>
            <div className={'flex flex-col'}>
              {section.links.map((link) => (
                <Link href={link.link} key={i}>
                  <p className="cursor-pointer text-lg hover:underline leading-[26px] font-[300]">{link.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Footer