import Head from "next/head"

function Android() {
    return (
        <div className={'flex items-center justify-center my-20'}>
            <Head>
                <title>WhatsApp</title>
                <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" />
            </Head>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center border-b border-[#dadde1] space-y-2 pb-2">
                    <h1 className="text-2xl tracking-wide pb-6">Please download the latest version of WhatsApp Messenger.</h1>
                    <button className="bg-green py-3 px-6 rounded-3xl text-white">
                        Download now
                    </button>
                    <span className="text-[#5e5e5e] py-2">
                        Version 2.22.17.73
                    </span>
                </div>
                <div className="flex flex-col items-center space-y-4 mt-8">
                    <h1 className="font-semibold text-xl">Minimum Requirements</h1>
                    <ul className="list-disc space-y-4 text-lg">
                        <li>Android OS 4.0.3 or above</li>
                        <li>Unlimited internet data plan recommended</li>
                        <li>Tablet devices are not supported</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center space-y-4 mt-8">
                    <h1 className="font-semibold text-xl">Third-Party Sources</h1>
                    <ul className="list-disc space-y-4 text-lg">
                        <li>qcom.c: LGPL 2.1 (<a href="https://scontent.whatsapp.net/v/t61.22868-34/62599558_455388561676730_4004424832305867160_n.patch/whatsapp.patch?ccb=1-7&amp;_nc_sid=4a4126&amp;_nc_ohc=t8TL2Vjp3cAAX8UVZRI&amp;_nc_pt=5&amp;_nc_ht=scontent.whatsapp.net&amp;oh=01_AVzwHIF1cw7cOQSKh9uC85tMU4IemcDEZ5aLa_aA_UQv3w&amp;oe=62F979C3" className="text-[#39b3ed] hover:underline" target="_blank" rel="noopener">WhatsApp Modifications</a>)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Android
