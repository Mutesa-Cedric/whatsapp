import Image from 'next/image'
import React from 'react'
import { SecurityAds } from '../@types/typings'

function SecurityAds({ title, description, image }: SecurityAds) {
    return (
        <div className='flex flex-col space-y-3'>
            <div>
                <Image src={image} alt={title} width={150} height={150}
                    className="rounded-full" />
            </div>
            <h1 className="font-semibold">{title}</h1>
            <p className='max-w-lg'>{description}</p>
        </div>
    )
}

export default SecurityAds
