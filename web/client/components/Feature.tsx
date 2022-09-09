import Image from 'next/image';
import React from 'react'
import { Feature, ImageWithCaption } from '../@types/typings'
import EncryptionAnimation from "./EncryptionAnimation";
import { DataChargesText, Description, MainContainer, Name, Title } from './styledComponents/FeaturesComponents';

interface ImageProps {
    src: string;
    height?: number;
    width?: number;
    position?: "left" | "right" | "top" | "bottom" | "center",
}

interface ImageGroupProps {
    images: ImageWithCaption[];
}

function SingleImage({ src, height, position, width }: ImageProps) {
    return (
        <div className={position==="right"?"relative left-[155px]":""}>
            <Image src={`/images/${src}`} width={width || 300} height={height || 400} 
            />
        </div>
    );
}

function ImageGroup({ images }: ImageGroupProps) {
    return (<div className={"relative"}>
        {
            images.map(img => (
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


function Feature({
    name, title, image, description, dataCharges, backgroundColor, imagePosition, height, imageHeight, security, imageWidth
}: Feature) {

    return (
        <MainContainer backgroundColor={backgroundColor || '#f0f4f9'} height={height} imagePosition={imagePosition} key={name} security={security}>
            {imagePosition === "top" && typeof image === "string" && <SingleImage src={image} height={imageHeight} width={imageWidth} />}
            {security && <EncryptionAnimation />}
            <Name>{name}</Name>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {dataCharges && imagePosition === "bottom" && <DataChargesText>
                * Data charges may apply. Contact your provider for details.
            </DataChargesText>}

            {typeof image === "string" && imagePosition === "center" && <SingleImage src={image} height={imageHeight} width={imageWidth} />}
            {
                // multiple images
                typeof image === "object" && imagePosition === "bottom" && (
                    <ImageGroup images={image} />
                )
            }
            {dataCharges && (imagePosition === "top" || imagePosition === "center") && <DataChargesText>* Data charges may apply. Contact your provider for details.</DataChargesText>}
            {typeof image === "string" && imagePosition === "bottom" && <SingleImage src={image} height={imageHeight} width={imageWidth} />}
            {typeof image === "string" && imagePosition === "right" && <SingleImage src={image} height={imageHeight} width={imageWidth} position={imagePosition} />}
        </MainContainer>
    )
}

export default Feature;