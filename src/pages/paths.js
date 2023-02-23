import PathCard from "@/components/PathCard"
import PathHeading from "@/components/PathHeading"
import Link from "next/link"
import { RocketLaunchIcon, RectangleGroupIcon, AcademicCapIcon, PresentationChartLineIcon, CodeBracketIcon, GlobeAmericasIcon } from '@heroicons/react/20/solid'
import { useState } from "react"
import { prisma } from "@/prisma"
import Layout from "@/components/Layout"

const sections = [
  {
      id: 1,
      name: 'Consulting',
      href: 'paths/consulting',
      categories: [
          { name: 'Partner Track', initials: '👔', href: '/paths/consulting/management', members: 16 },
          { name: 'Entry after MBA', initials: '💻', href: '/paths/consulting/tech', members: 17 },
          { name: 'Early Exit', initials: '🎨', href: '/paths/consulting/design', members: 10 },
          { name: 'Pivot to Tech', initials: '💻', href: '/paths/consulting/design', members: 10 },
        ]
  }
]

export default function Paths({ careers }) {
    const [filters, setFilters] = useState([
      {
        id: 'category',
        name: 'Category',
        options: [
          { value: 'consulting', label: 'Consulting', checked: false },
          { value: 'swe', label: 'Software Engineering', checked: false },
          { value: 'product', label: 'Product', checked: false },
          { value: 'startups', label: 'Startups', checked: false },
        ],
      },
      {
        id: 'industry',
        name: 'Industry',
        options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: false },
        ],
      },
      {
        id: 'education',
        name: 'Education',
        options: [
          { value: 'eng', label: 'Engineering', checked: false },
          { value: 'fin', label: 'Finance', checked: false },
          { value: 'cs', label: 'Comp. Sci', checked: false },
          { value: 'mba', label: 'MBA', checked: false },
          { value: 'masters', label: 'Grad School', checked: false },
        ],
      },
    ])

    const [activeFilters, setActiveFilters] = useState([])

    const searchFilter = (careers) => {
      if (activeFilters.length === 0) {
        // if no filters are applied, then show all results
        return careers
      }

      const activeLabels = [];
      for (var i = 0; i < activeFilters.length; i++) {
        activeLabels.push(activeFilters[i].label)
      }

      const filtered = careers.filter(career => {
        // need to return careers with tags that are included in active filter labels
        return career.tags.some(tag => activeLabels.includes(tag))
      })

      // return new array
      return filtered
    }

    const filteredCareers = searchFilter(careers)

    return (
      <div className="h-screen">
      <Layout className=''
      main={
      <div className="">
      <div className='mx-auto max-w-2xl py-8 sm:py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6 lg:gap-10'>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Browse all Career Paths
          </h2>

          <div className="relative w-full">
              <div className="z-10 m-auto">
              <h2 className="text-sm text-gray-900">Curated Career Paths
              <span className="text-gray-700">
                  {' '} - coming soon on <span className="text-green-700 font-plus-jakarta-sans font-bold">CareerMatcha+</span>
              </span>
              </h2>
              </div>
              <ul role="list" className="mt-2 grid grid-cols-4 gap-5">
              {sections[0]['categories'].map((category) => (
                  <Link href='' key={category.name} className="col-span-1 flex rounded-md shadow-sm opacity-50 cursor-help hover:shadow-lg ease-in-out duration-300">
                  <div
                      className='bg-slate-200 flex-shrink-0 flex items-center justify-center w-16 text-white text-2xl font-medium rounded-l-md border-t border-l border-b border-gray-200'
                  >
                      {category.initials}
                  </div>
                  <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                      <div className="font-medium text-gray-900">
                          {category.name}
                      </div>
                      <p className="text-gray-500">{category.members} Paths</p>
                      </div>
                      
                  </div>
                  </Link>
              ))}
              </ul>
          </div>
          
          <PathHeading filters={filters} setFilters={setFilters} activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>

          <dl className="w-full gap-6 lg:gap-10 md:columns-2 lg:columns-3">
              {/* {pathways.map((pathway) => (
              <div key={pathway.id} className='break-inside-avoid-column pb-10'>
                  <PathCard key={pathway.id} title={pathway.title} number={pathway.number} tags={pathway.tags} content={pathway.content}/>
              </div>
              ))} */}
              {filteredCareers.map((career) => (
              <div key={career.id} className='break-inside-avoid-column pb-10'>
                  <PathCard key={career.id} title={career.title} number={career.id} tags={career.tags} path={career.path}/>
              </div>
              ))}
          </dl>
      </div>
      </div>
      }/>
      </div>
    )
}

export async function getServerSideProps(context) {
  
    const careers = await prisma.career.findMany();
    console.log(careers)
    return {
      props: {
        careers: JSON.parse(JSON.stringify(careers))
        // markers: JSON.parse(JSON.stringify(markers)),
        // locArray: JSON.parse(JSON.stringify(locArray)),
      },
    }
  }