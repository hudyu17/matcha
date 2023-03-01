import Navbar from './Navbar'
import { useState } from 'react'
import SavedAlert from './alerts/SavedAlert'
import MobileNavbar from './MobileNavbar'
import { useSession } from 'next-auth/react'

export default function Layout({ heading, main }) {
    const {data: session} = useSession()
    const authenticated = !! session;

    return (
        <div className='flex flex-col lg:flex-row'>
            {authenticated && <div>
                <aside className="hidden lg:block h-screen sticky top-0">
                <Navbar/>
            </aside>
            <aside className="lg:hidden sticky top-0 z-20">
                <MobileNavbar/>
            </aside>
                
            </div>}
            
            
            <main 
                className='bg-green-50 w-full mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6'
            >
                <heading className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                    {heading}
                </heading>
                {main}
            </main>
        </div>
    )
}
