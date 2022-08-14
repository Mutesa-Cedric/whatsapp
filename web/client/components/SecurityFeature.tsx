import React from 'react'
import { SecurityFeatures } from '../@types/typings'

function SecurityFeature({ title, description }: SecurityFeatures) {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className='text-3xl tracking-wide'>{title}</h2>
            <p className="text-xl opacity-75">{description}</p>
        </div>
    )
}

export default SecurityFeature