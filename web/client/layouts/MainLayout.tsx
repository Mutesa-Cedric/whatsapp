import React from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

interface Props {
    children: React.ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <div className="sticky top-0 shadow-sm z-50 w-full bg-green ">
                <NavBar />
            </div>
            <div>
                {children}
            </div>
            <div className="bg-gray h-24 flex flex-col justify-between">
                <Footer />
                <div className="bg-dark">
                    Copyright
                </div>
            </div>
        </div>
    )
}

export default MainLayout