export type FooterLinks =
    {
        title: string,
        links:
        {
            name: string,
            link: string,
            external?: boolean
        }[]

    }[]

export interface SecurityFeatures {
    title: string,
    description: string,
}

export interface SecurityAds extends SecurityFeatures {
    image: string
}

type ImageWithCaption={
    caption:string,
    url:string
}


export interface Feature{
    name:string,
    title:string,
    image?:string|ImageWithCaption[],
    description:string,
    dataCharges?:boolean,
    side:"left"|"right",
    backgroundColor:string,
    imagePosition?:"left"|"right"|"top"|"bottom"|"center",
    height:string,
    imageHeight?:number,
    security?:boolean
}