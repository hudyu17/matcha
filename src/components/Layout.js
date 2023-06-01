import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import { useSession } from 'next-auth/react'

export default function Layout({ heading, main }) {
    const {data: session} = useSession()
    const authenticated = !! session;

    return (
        <div className='flex flex-col lg:flex-row'>
            {authenticated && 
                <div className='sticky top-0 z-20'>
                    <aside className="hidden lg:block h-screen sticky top-0">
                    <Navbar/>
                </aside>
                <aside className="lg:hidden sticky top-0 z-20">
                    <MobileNavbar/>
                </aside>
                </div>
            }
            
            <main 
                className='bg-green-50 w-full mx-auto py-8 sm:pt-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6'
            >
                <heading className='text-2xl font-bold leading-7 text-green-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                    {heading}
                </heading>
                {main}
                {/* {authenticated && 
                <div className='text-sm mt-8 border border-gray-200 bg-gray-50 rounded-md p-2 text-gray-700 w-full text-center'>
                    Have some feedback? Fill out {' '} 
                    <a href='https://tally.so/r/meMeLo' target='_blank' rel="noreferrer" className='font-medium text-green-700 hover:underline'>this form</a>
                    , or see what others have suggested {' '}
                    <a href='https://ninth-shear-060.notion.site/02ec820f92ec49b49250546baeb28ef2?v=57ff166be7e04686a42946bfa5e1b513' target='_blank' rel="noreferrer" className='font-medium text-green-700 hover:underline'>here</a>.
                </div>
                } */}
            </main>
        </div>
    )
}
