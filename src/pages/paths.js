import PathCard from "@/components/PathCard"
import PathHeading from "@/components/PathHeading"
import Link from "next/link"
import { RocketLaunchIcon, RectangleGroupIcon, AcademicCapIcon, PresentationChartLineIcon, CodeBracketIcon, GlobeAmericasIcon } from '@heroicons/react/20/solid'
import { useState } from "react"
import { prisma } from "@/prisma"

const pathways = [
    {
      id: 1,
      title: 'Consultant to Product',
      number: 1,
      name: 'Zyra',
      content: [
        {
          id: 1,
          content: 'Chief Product Officer',
          target: 'at Marketplace ($11b mkt cap)',
          href: '#',
          date: "'21-now",
          datetime: '2020-09-20',
          icon: RocketLaunchIcon,
          iconBackground: 'bg-green-600',
        },
        {
          id: 2,
          content: 'Senior PM, Experience Architect',
          target: 'at Paypal',
          href: '#',
          date: "'14-'21",
          datetime: '2020-09-20',
          icon: RectangleGroupIcon,
          iconBackground: 'bg-green-300',
        },
        
        {
          id: 4,
          content: 'MASc Human Factors,',
          target: 'University of Toronto',
          href: '#',
          date: "'11-'13",
          datetime: '2020-09-28',
          icon: AcademicCapIcon,
          iconBackground: 'bg-gray-300',
        },
        {
          id: 5,
          content: 'Consultant',
          target: 'at Deloitte',
          href: '#',
          date: "'06-'11",
          datetime: '2020-09-30',
          icon: PresentationChartLineIcon,
          iconBackground: 'bg-yellow-400',
        },
        {
          id: 6,
          content: 'BASc Industrial Engineering,',
          target: 'University of Toronto',
          href: '#',
          date: "'06",
          datetime: '2020-10-04',
          icon: AcademicCapIcon,
          iconBackground: 'bg-gray-300',
        },
      ],
      tags: [
        'Consulting',
        'Management Consulting',
        'Product',
        'Grad School',
        'Engineering'
      ]
    },
    {
      id: 2,
      title: 'SWE to Product',
      number: 2,
      name: 'Galio',
      content: [
        {
          id: 1,
          content: 'Product and Engineering Manager',
          target: 'at Climate Startup (Series B)',
          href: '#',
          date: "20-now",
          datetime: '2020-09-20',
          icon: RocketLaunchIcon,
          iconBackground: 'bg-green-600',
        },
        {
          id: 2,
          content: 'Product Architect',
          target: 'at Airtable',
          href: '#',
          date: "'18-20",
          datetime: '2020-09-22',
          icon: RectangleGroupIcon,
          iconBackground: 'bg-green-300',
        },
        {
          id: 3,
          content: 'Software Engineer, Early Employee',
          target: 'at Airtable',
          href: '#',
          date: "'15-18",
          datetime: '2020-09-28',
          icon: CodeBracketIcon,
          iconBackground: 'bg-yellow-400',
        },
        {
          id: 4,
          content: 'Software Engineer',
          target: 'at Optimizely',
          href: '#',
          date: "'11-'15",
          datetime: '2020-09-30',
          icon: CodeBracketIcon,
          iconBackground: 'bg-yellow-400',
        },
        {
          id: 5,
          content: 'BS Computer Science,',
          target: 'University of Michigan',
          href: '#',
          date: "'11",
          datetime: '2020-10-04',
          icon: AcademicCapIcon,
          iconBackground: 'bg-gray-300',
        },
      ],
      tags: [
        'SWE',
        'Startups',
        'Product',
        'Management'
      ]
    },
    {
      id: 3,
      title: 'Consultant to Founder',
      number: 3,
      name: 'Heimerdinger',
      content: [
        {
          id: 1,
          content: 'Co-Founder and COO',
          target: 'at Fintech Startup (Series C)',
          href: '#',
          date: "'15-now",
          datetime: '2020-09-20',
          icon: RocketLaunchIcon,
          iconBackground: 'bg-green-600',
        },

        
        {
          id: 4,
          content: 'Master in Public Administration,',
          target: 'Harvard University',
          href: '#',
          date: "'03-'05",
          datetime: '2020-09-28',
          icon: AcademicCapIcon,
          iconBackground: 'bg-gray-300',
        },
        {
          id: 5,
          content: 'Analyst',
          target: 'at Oliver Wyman',
          href: '#',
          date: "'00-'03",
          datetime: '2020-09-30',
          icon: PresentationChartLineIcon,
          iconBackground: 'bg-yellow-400',
        },
        {
          id: 6,
          content: "Bachelor of Commerce,",
          target: "Queen's University",
          href: '#',
          date: "'00",
          datetime: '2020-10-04',
          icon: AcademicCapIcon,
          iconBackground: 'bg-gray-300',
        },
      ],
      tags: [
        'SWE',
        'Startups',
        'Product',
        'Management'
      ]
    },
    {
        id: 4,
        title: 'Consultant to Founder',
        number: 4,
        name: 'Heimerdinger',
        content: [
          {
            id: 1,
            content: 'Co-Founder and COO',
            target: 'at Fintech Startup (Series C)',
            href: '#',
            date: "'15-now",
            datetime: '2020-09-20',
            icon: RocketLaunchIcon,
            iconBackground: 'bg-green-600',
          },
          {
            id: 2,
            content: 'North America Lead',
            target: 'at The Mission',
            href: '#',
            date: "'09-'14",
            datetime: '2020-09-20',
            icon: GlobeAmericasIcon,
            iconBackground: 'bg-green-300',
          },
          {
            id: 3,
            content: 'Sr. Manager, Global Biz Dev',
            target: 'at Maple Leaf Foods',
            href: '#',
            date: "'05-'08",
            datetime: '2020-09-22',
            icon: PresentationChartLineIcon,
            iconBackground: 'bg-yellow-400',
          },
          {
            id: 4,
            content: 'Master in Public Administration,',
            target: 'Harvard University',
            href: '#',
            date: "'03-'05",
            datetime: '2020-09-28',
            icon: AcademicCapIcon,
            iconBackground: 'bg-gray-300',
          },
          {
            id: 5,
            content: 'Analyst',
            target: 'at Oliver Wyman',
            href: '#',
            date: "'00-'03",
            datetime: '2020-09-30',
            icon: PresentationChartLineIcon,
            iconBackground: 'bg-yellow-400',
          },
          {
            id: 6,
            content: "Bachelor of Commerce,",
            target: "Queen's University",
            href: '#',
            date: "'00",
            datetime: '2020-10-04',
            icon: AcademicCapIcon,
            iconBackground: 'bg-gray-300',
          },
        ],
        tags: [
          'SWE',
          'Startups',
          'Product',
          'Management'
        ]
      },
      {
        id: 5,
        title: 'Consultant to Founder',
        number: 5,
        name: 'Heimerdinger',
        content: [
          {
            id: 1,
            content: 'Co-Founder and COO',
            target: 'at Fintech Startup (Series C)',
            href: '#',
            date: "'15-now",
            datetime: '2020-09-20',
            icon: RocketLaunchIcon,
            iconBackground: 'bg-green-600',
          },
          {
            id: 2,
            content: 'North America Lead',
            target: 'at The Mission',
            href: '#',
            date: "'09-'14",
            datetime: '2020-09-20',
            icon: GlobeAmericasIcon,
            iconBackground: 'bg-green-300',
          },
          {
            id: 3,
            content: 'Sr. Manager, Global Biz Dev',
            target: 'at Maple Leaf Foods',
            href: '#',
            date: "'05-'08",
            datetime: '2020-09-22',
            icon: PresentationChartLineIcon,
            iconBackground: 'bg-yellow-400',
          },
          {
            id: 4,
            content: 'Master in Public Administration,',
            target: 'Harvard University',
            href: '#',
            date: "'03-'05",
            datetime: '2020-09-28',
            icon: AcademicCapIcon,
            iconBackground: 'bg-gray-300',
          },
          {
            id: 5,
            content: 'Analyst',
            target: 'at Oliver Wyman',
            href: '#',
            date: "'00-'03",
            datetime: '2020-09-30',
            icon: PresentationChartLineIcon,
            iconBackground: 'bg-yellow-400',
          },
          {
            id: 6,
            content: "Bachelor of Commerce,",
            target: "Queen's University",
            href: '#',
            date: "'00",
            datetime: '2020-10-04',
            icon: AcademicCapIcon,
            iconBackground: 'bg-gray-300',
          },
        ],
        tags: [
          'SWE',
          'Startups',
          'Product',
          'Management'
        ]
      },
  ]

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
    },
    {
        id: 2,
        name: 'Software Engineering',
        href: 'paths/swe',
        categories: [
            { name: 'Switch to Product', initials: '💾', href: '#', members: 28 },
            { name: 'Individual Contributor', initials: '🖥', href: '#', members: 12 },
            { name: 'Management', initials: '👔', href: '#', members: 9 },
          ]
    },
    {
        id: 3,
        name: 'Startups',
        href: 'paths/startups',
        categories: [
            { name: 'Serial Exits', initials: '💸', href: '#', members: 32 },
            { name: 'Started in School', initials: '🌳', href: '#', members: 12 },
            { name: 'Late Bloomers', initials: '🏢', href: '#', members: 11 },
          ]
    }
]

export default function Paths({ careers }) {
    // console.log(careers)
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
      

      const filtered = careers.filter(career => {
        // return career.tags.some(tag => activeFilters.includes(r))
        return career.tags.includes('Startups')
      })

      // return new array
      return filtered
    }

    const filteredCareers = searchFilter(careers)

    return (
      <div className="bg-green-50 h-screen">
      <div className='mx-auto max-w-2xl py-8 sm:py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6 lg:gap-10'>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Browse all Career Paths
          </h2>

          <div className="relative w-full">
              <div className="z-10 m-auto">
              <h2 className="text-sm text-gray-900">Curated Career Paths
              <span className="text-gray-700">
                  {' '} - coming soon on <span className="text-green-700 font-bold">CareerMatcha+</span>
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