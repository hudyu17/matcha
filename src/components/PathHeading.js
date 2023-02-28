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
import { XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useCurrPathContext } from 'context/currPathProvider'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PathHeading({ cards, setCards }) {
  const [open, setOpen] = useState(false)
  const { activeFiltersContext, filtersContext } = useCurrPathContext();

  const [activeFilters, setActiveFilters] = activeFiltersContext;
  const [filters, setFilters] = filtersContext;

  const handleFilterChange = (section, option) => {

    var indexFilter = filters.findIndex(x => x.id === section.id);
    var indexOption = filters[indexFilter]['options'].findIndex(x => x.value === option.value);

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
        setActiveFilters([...activeFilters, {value: currOption.value, label: currOption.label, checked: true, section: section}])
    } else {
        let indexActive;
        for (var i = 0; i < activeFilters.length; i++) {
            if (activeFilters[i].value === newOption.value) {
                indexActive = i
            }}
        
        // splice modifies array in place
        const newActive = activeFilters.slice(0, indexActive).concat(
          activeFilters.slice(indexActive + 1)
        )

        setActiveFilters(newActive)
    }
  }

  const removeActiveFilter = (filter) => {

    const tempSection = filter.section
    const tempOption = {
      value: filter.value,
      label: filter.label,
      checked: filter.checked
    }

    handleFilterChange(tempSection, tempOption)
    
    // let indexActive;
    // for (var i = 0; i < activeFilters.length; i++) {
    //     if (activeFilters[i].value === filter.value) {
    //         indexActive = i
    //     }}
    
    // // splice modifies array in place
    // const newActive = activeFilters.slice(0, indexActive).concat(
    //   activeFilters.slice(indexActive + 1)
    // )

    // setActiveFilters(newActive)

    // // remove checked in filters
    // console.log(filter.section)
    // var indexOption = filter.section.options.findIndex(x => x.value === filter.value);
    // const currOption = filter.section.options[indexOption]

    // const newOption = {...currOption, checked: !currOption.checked}
    // console.log(newOption)
    
  }

  return (
    <div className='top-16 lg:top-0 z-10 pt-4 sticky'>
    <div className="rounded-lg shadow">
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
                  <h2 className="text-xl font-medium text-gray-900">Filters</h2>
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
                    <div key={section.name} className="border-t border-gray-200 px-4 py-6">
                      
                          <h3 className="-my-2 flow-root">
                            {/* <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"> */}
                              <span className="font-sm text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {/* <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                /> */}
                              </span>
                            {/* </Disclosure.Button> */}
                          </h3>
                          <div className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    value={option.value}
                                    type="checkbox"
                                    checked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    onChange={(e) => handleFilterChange(section, option)}
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
                          </div>
                       </div> 
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

        <div className={classNames(
          "bg-green-700 py-4", 
          activeFilters.length > 0 && 'rounded-t-lg border-b border-gray-200 ',
          activeFilters.length === 0 && 'rounded-lg '
        )}
        >
          <div className="mx-auto flex items-center justify-between px-4 sm:px-6">
              <div 
                className="cursor-pointer group inline-flex justify-center text-sm font-medium text-gray-100 hover:text-white"
                onClick={() => setCards(!cards)}
              >
                { cards ? 
                  <p>Hide Paths</p>
                  : <p>Show Paths</p>
                }
                  {/* Toggle Cards */}
                  <Squares2X2Icon
                    className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-100 group-hover:text-white group-hover:fill-white'
                    aria-hidden="true"
                  />
              </div>

              

            {/* mobile filters button */}
            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-100 hover:text-gray-900 sm:hidden"
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
                        {/* {sectionIdx === 0 ? (
                          <span className="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
                            2
                          </span>
                        ) : null} */}
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
        {activeFilters.length > 0 &&
        <div className="bg-green-50 rounded-b-lg">
          <div className="mx-auto py-3 px-4 sm:px-6 sm:flex sm:items-center ">
            
            <div className="">
              <div className="-my-1 -mx-3 flex flex-wrap items-center">
                {/* {activeFilters.length > 0 ? 
                    <p className='text-gray-400 text-sm font-medium pr-1'>Active filters:</p>
                    :
                    // <p className='text-gray-400 text-sm font-medium py-2 pr-2'>No active filters</p>
                    null
                } */}
                
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.value}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-green-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                      onClick={(e) => removeActiveFilter(activeFilter)}
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
        }
      </section>
    </div>
    </div>
  )
}
