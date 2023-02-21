/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]
// const filters = [
//   {
//     id: 'category',
//     name: 'Category',
//     options: [
//       { value: 'consulting', label: 'Consulting', checked: true },
//       { value: 'swe', label: 'Software Engineering', checked: false },
//       { value: 'product', label: 'Product', checked: true },
//       { value: 'startups', label: 'Startups', checked: false },
//     ],
//   },
//   {
//     id: 'industry',
//     name: 'Industry',
//     options: [
//       { value: 'white', label: 'White', checked: false },
//       { value: 'beige', label: 'Beige', checked: false },
//       { value: 'blue', label: 'Blue', checked: false },
//     ],
//   },
//   {
//     id: 'education',
//     name: 'Education',
//     options: [
//       { value: 'eng', label: 'Engineering', checked: false },
//       { value: 'fin', label: 'Finance', checked: false },
//       { value: 'cs', label: 'Comp. Sci', checked: false },
//       { value: 'mba', label: 'MBA', checked: false },
//       { value: 'masters', label: 'Grad School', checked: false },
//     ],
//   },
// ]
const activeFilters = [{ value: 'product', label: 'Product' }, { value: 'consulting', label: 'Consulting' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PathHeading({ filters, setFilters, activeFilters, setActiveFilters }) {
  const [open, setOpen] = useState(false)

  const handleFilterChange = (section, option) => {

    // for (var i = 0; i < filters.length; i++) {
    //     if (filters[i].id === section.id) {
    //         // console.log(filters[i])
    //         setFilter(currFilters => ({}))
    //     }
    // }
    var indexFilter = filters.findIndex(x => x.id === section.id);
    var indexOption = filters[indexFilter]['options'].findIndex(x => x.value === option.value);
    // console.log(indexFilter, indexOption)
    console.log(filters[indexFilter]['options'][indexOption])
    const currOption = filters[indexFilter]['options'][indexOption]
    const newOption = {...currOption, checked: !currOption.checked}

    const options = filters[indexFilter]['options']
    options[indexOption] = newOption

    const newFilterItem = filters[indexFilter]
    newFilterItem['options'] = options

    const newFilters = filters.slice(0, indexFilter).concat(
        newFilterItem, 
        filters.slice(indexFilter + 1)
    )
    
    setFilters(newFilters)
    
    // update active filters
    if (newOption.checked) {
        console.log('lol')
        // const activeAdd = {value: currOption.value, label: currOption.label}
        // console.log(activeAdd)
        setActiveFilters([...activeFilters, {value: currOption.value, label: currOption.label}])
    } else {
        let indexActive;
        for (var i = 0; i < activeFilters.length; i++) {
            if (activeFilters[i].value === currOption.value) {
                indexActive = i
            }}
        
        setActiveFilters(activeFilters.splice(indexActive))
    }
  }

  return (
    <div className=" rounded-lg shadow">
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.name} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>


      {/* Filters */}
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        <div className="border-b border-gray-200 bg-green-700 py-4 rounded-t-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-100 hover:text-white">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-100 group-hover:text-white"
                    aria-hidden="true"
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* mobile filters button */}
            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <Popover key={section.name} className="relative inline-block px-4 text-left">
                      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-100 hover:text-white">
                        <span>{section.name}</span>
                        {sectionIdx === 0 ? (
                          <span className="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
                            2
                          </span>
                        ) : null}
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-100 group-hover:text-white"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  value={option.value}
                                  type="checkbox"
                                  checked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                  onChange={(e) => handleFilterChange(section, option)}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-brown rounded-b-lg">
          <div className="mx-auto max-w-7xl py-3 px-2 md:px-0 sm:flex sm:items-center ">
            
            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.length > 0 ? 
                    <p className='text-gray-400 text-sm font-medium pr-2'>Active filters</p>
                    :
                    <p className='text-gray-400 text-sm font-medium py-3 pr-2'>No active filters</p>
                }
                
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.value}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-green-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                    >
                      <span className="sr-only">Remove filter for {activeFilter.label}</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
