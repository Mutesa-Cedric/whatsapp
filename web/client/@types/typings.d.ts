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