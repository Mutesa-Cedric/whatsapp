import { Feature } from "../@types/typings";

export const features: Feature[] = [
    {
        name: "TEXTS",
        title: "Simple, Reliable Messaging",
        description: "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees",
        dataCharges: true,
        image: "text-feat.png",
        side: "left",
        backgroundColor: "#fcf2c6",
        imagePosition: "center",
        height: "120vh",
    },
    {
        name: "WHATSAPP VOICE AND VIDEO CALLS",
        title: "Speak Freely",
        description: "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough. WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges.",
        dataCharges: true,
        image: "call-feat.png",
        side: "left",
        backgroundColor: "#d8e8ea",
        imagePosition: "bottom",
        height: "90vh"
    },
    {
        name: "PHOTOS AND VIDEOS",
        title: "Share Moments that Matter",
        description: "Send photos and videos on WhatsApp instantly. You can even capture the moments that matter to you most with a built-in camera. With WhatsApp, photos and videos send quickly even if you're on a slow connection.",
        image: "photos-vid-feat.png",
        backgroundColor: "#fcf2c6",
        height: "95vh",
        imagePosition: "top",
        side: "left"
    },
    {
        name: "DOCUMENTS",
        title: "Document Sharing Made Easy",
        description: "Send PDFs, documents, spreadsheets, slideshows and more, without the hassle of email or file sharing apps. You can send documents up to 100 MB, so it's easy to get what you need over to who you want.",
        image: "documents-feat.png",
        height: "80vh",
        side: "left",
        imagePosition: "bottom",
        backgroundColor: "#fcf2c6"
    },
    {
        name: "GROUP CHAT",
        title: "Groups to keep in touch",
        description: "Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more.",
        height: "90vh",
        image: [
            {
                caption: "FRIENDS",
                url: "friends.png"
            },
            {
                caption:"FAMILY",
                url:"family.png"
            },
            {
                caption:"WEEKEND",
                url:"weekend.png"
            }
        ],
        side:"right",
        backgroundColor:"#e7f0e4",
        imagePosition:"bottom"

    },
    {
        name:"WHATSAPP ON WEB AND DESKTOP",
        title:"Keep the Conversation Going",
        description:"With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you. Download the desktop app or visit web.whatsapp.com to get started",
        side:"right",
        imagePosition:"right",
        image:"web-and-desktop.png",
        backgroundColor:"##f0f4f9",
        height:"80vh"
    },
    {
        name:"END-TO-END ENCRYPTION",
        title:"Security by Default",
        description:"Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.",
        imagePosition:"top",
        security:true,
        side:"right",
        height:"95vh",
        backgroundColor:"#e7f0e4"
    },
    {
        name:"VOICE MESSAGES",
        title:"Say What's On Your Mind",
        description:"Sometimes, your voice says it all. With just one tap you can record a Voice Message, perfect for a quick hello or a longer story.",
        image:"voice-feat.png",
        side:"right",
        height:"75vh",
        imagePosition:"top",
        backgroundColor:"#d8e8ea"
    }
]


