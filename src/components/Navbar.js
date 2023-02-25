import { CalendarIcon, MagnifyingGlassIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useCurrPathContext } from 'context/currPathProvider'

const navigation = [
  { name: 'Browse', icon: MagnifyingGlassIcon, href: '/paths', current: true },
  { name: 'Saved', icon: FolderIcon, href: '/saved', current: false },
  { name: 'CareerMatcha+', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const {data: session} = useSession()
    const authenticated = !! session

    const [currPath, setCurrPath] = useCurrPathContext();

    return (
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white h-screen lg:w-56">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            {/* <div className="flex flex-shrink-0 items-center px-4">
            <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
                alt="Your Company"
            />
            </div> */}
            <div className="flex px-4 pb-4 border-b">
                <a href="#" className="flex gap-2">
                <span className="sr-only">CareerMatcha</span>
                
                <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><ellipse fill="#292F33" cx="18" cy="26" rx="18" ry="10"/><ellipse fill="#66757F" cx="18" cy="24" rx="18" ry="10"/><path fill="#E1E8ED" d="M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"/><path fill="#77B255" d="M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"/><ellipse fill="#A6D388" cx="18" cy="13" rx="15" ry="7"/><path d="M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z" fill="#5C913B"/></svg>
                <h1 className='my-auto font-bold text-green-700 font-plus-jakarta-sans'>CareerMatcha</h1>
                </a>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
            {navigation.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className={classNames(
                    currPath === item.name
                    ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
                >
                {
                    item.icon &&
                    <item.icon
                        className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                    />
                }
                
                <span className="flex-1">{item.name}</span>
                {item.count ? (
                    <span
                    className={classNames(
                        item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                        'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                    )}
                    >
                    {item.count}
                    </span>
                ) : null}
                </Link>
            ))}
            </nav>
        </div>
        {authenticated ? 
        <div className='group flex items-center px-4 py-4 cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        onClick={() => signOut()}
        >
            <ArrowRightOnRectangleIcon className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6'/>
            
            <span className="flex-1">Logout</span>
        </div>
        :<div className='group flex items-center px-4 py-4 cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        onClick={() => signIn("google")}
        >
            <ArrowRightOnRectangleIcon className='text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6'/>
            
            <span className="flex-1">Login</span>
        </div>
        }
        {authenticated && 
        <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
            <div className="flex items-center">
                <img className='inline-block h-9 w-9 rounded-full' src={session.user.image}/>
                <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{session.user.name}</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
            </div>
            </a>
        </div>
        }
        
        
        
        
    </div>
  )
}
