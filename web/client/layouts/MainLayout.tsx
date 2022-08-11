import Link from "next/link"
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
            <div className="bg-gray flex flex-col justify-between">
                <Footer />
                <div className="bg-dark text-white flex justify-between items-center lg:px-40 pt-5 pb-8">
                    <div className="flex items-center space-x-1 text-lg">
                        <span>
                            {new Date().getFullYear()}
                        </span>
                        <span>
                            &copy; Mutesa Cedric
                        </span>

                    </div>
                    <Link href={'/privacy'}>
                        <p className="flex items-center">
                            Privacy &amp; Terms
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </p>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default MainLayout