import Image from 'next/image';
import React from 'react'
import { Feature } from '../@types/typings'
import EncryptionAnimation from "./EncryptionAnimation";
import { DataChargesText, Description, MainContainer, Name, Title } from './styledComponents/FeaturesComponents';
function Feature({
    name, title, image, description, dataCharges, backgroundColor, imagePosition, height, imageHeight, security
}: Feature) {

    return (
        <MainContainer backgroundColor={backgroundColor} height={height}>
            {security && <EncryptionAnimation />}
            <Name>{name}</Name>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <DataChargesText>
                * Data charges may apply. Contact your provider for details.
            </DataChargesText>

            {/* image part */}
            {
                // single image
                typeof image === "string" && <Image src={`/images/${image}`} width={200} height={imageHeight || 200} />
            }
            {
                // multiple images
                typeof image === "object" && (
                    <div className={"relative border-2 border-red-500"}>
                        {
                            image.map(img => (
                                <div className='flex flex-col items-center'>
                                    <div className="rounded-full">
                                        <Image src={`/images/${img.url}`} width="100" height={100} objectFit="contain" />
                                    </div>
                                    <p>{img.caption}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {/* image part */}

        </MainContainer>
    )
}

export default Feature