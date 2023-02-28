import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { CalendarIcon, XMarkIcon, Bars3Icon, BellIcon, MagnifyingGlassIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useCurrPathContext } from 'context/currPathProvider'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react';

const navigation = [
    { name: 'Browse', icon: MagnifyingGlassIcon, href: '/paths', current: true },
    { name: 'Saved', icon: FolderIcon, href: '/saved', current: false },
    { name: 'CareerMatcha+', href: '/careermatchaplus', current: false },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileNavbar() {
    const {data: session} = useSession()
    const authenticated = !! session

    const { currPathContext } = useCurrPathContext();
    const [currPath, setCurrPath] = currPathContext;

  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <div className="flex">
                <Link href="/paths" className="flex gap-2">
                    <span className="sr-only">CareerMatcha</span>
                    <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><ellipse fill="#292F33" cx="18" cy="26" rx="18" ry="10"/><ellipse fill="#66757F" cx="18" cy="24" rx="18" ry="10"/><path fill="#E1E8ED" d="M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"/><path fill="#77B255" d="M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"/><ellipse fill="#A6D388" cx="18" cy="13" rx="15" ry="7"/><path d="M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z" fill="#5C913B"/></svg>
                    <h1 className='my-auto font-bold text-green-700 font-plus-jakarta-sans'>CareerMatcha <span className='text-xs font-light'>beta</span></h1>
                </Link>
            </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          currPath === item.name 
                          ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={currPath === item.name ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={session?.user.image}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        
                        <div className='block px-4 py-2 text-sm text-gray-900 font-medium'>
                            {session?.user.name}
                        </div>
                        
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'flex block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                            onClick={() => signOut()}
                          >
                            Sign out
                            <ArrowRightOnRectangleIcon className='text-gray-700 group-hover:text-gray-500 ml-1 h-5 w-5'/>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    currPath === item.name ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={currPath === item.name ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
