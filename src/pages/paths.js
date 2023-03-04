import PathCard from "@/components/PathCard"
import PathHeading from "@/components/PathHeading"
import Link from "next/link"
import { FaceFrownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { prisma } from "@/prisma"
import Layout from "@/components/Layout"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { useCurrPathContext } from "context/currPathProvider"
import SavedAlert from "@/components/alerts/SavedAlert"
import Head from "next/head"

const sections = [
  {
      id: 1,
      name: 'Consulting',
      href: 'paths/consulting',
      categories: [
          { name: 'Partner', initials: '👔', href: '/paths/consulting/management', members: 16 },
          { name: 'MBA', initials: '💻', href: '/paths/consulting/tech', members: 17 },
          { name: 'Early Exit', initials: '🎨', href: '/paths/consulting/design', members: 10 },
          { name: 'Tech Pivot', initials: '💻', href: '/paths/consulting/design', members: 10 },
        ]
  }
]

export default function Paths({ careers, saved }) {
    const [showSaved, setShowSaved] = useState(false)
    const [cards, setCards] = useState(true)

    const { currPathContext, activeFiltersContext, filtersContext } = useCurrPathContext();

    const [currPath, setCurrPath] = currPathContext;
    const [activeFilters, setActiveFilters] = activeFiltersContext;
    const [filters, setFilters] = filtersContext;

    // const [currPath, setCurrPath] = useCurrPathContext();
    setCurrPath('Browse')

    // const [filters, setFilters] = useState([
    //   {
    //     id: 'category',
    //     name: 'Category',
    //     options: [
    //       { value: 'consulting', label: 'Consulting', checked: false },
    //       { value: 'swe', label: 'Software Engineering', checked: false },
    //       { value: 'aiml', label: 'AI/ML', checked: false },
    //       { value: 'product', label: 'Product', checked: false },
    //       { value: 'startups', label: 'Startups', checked: false },
    //     ],
    //   },
    //   {
    //     id: 'education',
    //     name: 'Education',
    //     options: [
    //       { value: 'eng', label: 'Engineering', checked: false },
    //       { value: 'biz', label: 'Business', checked: false },
    //       { value: 'cs', label: 'Comp. Sci', checked: false },
    //       { value: 'mba', label: 'MBA', checked: false },
    //       { value: 'masters', label: 'Grad School', checked: false },
    //     ],
    //   },
    // ])

    // const [activeFilters, setActiveFilters] = useState([])

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
        // return career.tags.some(tag => activeLabels.includes(tag))
        return activeLabels.every(label => career.tags.includes(label))
      })

      // return new array
      return filtered
    }

    const filteredCareers = searchFilter(careers)

    return (
      <div className="h-screen">
      <Head>
        <title>Browse | CareerMatcha</title>
        <meta name="description" content="Browse all Career Paths" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="Browse all Career Paths | CareerMatcha"/>
        <meta property="og:description" content="Career inspiration, curated for you."/>
        <meta property="og:image" content="/preview.png" />
      </Head>
      <Layout className=''
      heading={'Browse all Career Paths'}
      main={
      <div className='flex flex-col gap-6 lg:gap-10'>
          
          <div className="relative w-full -mb-4">
              <div className="z-10 m-auto">
              <h2 className="text-sm text-gray-900">Curated Paths
              <span className="text-gray-700">
                  {' '} - coming soon on <Link href="/careermatchaplus" className="text-green-700 font-plus-jakarta-sans font-bold">CareerMatcha<span className="text-base font-medium text-green-600">+</span></Link>
              </span>
              </h2>
              </div>
              <ul role="list" className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {sections[0]['categories'].map((category) => (
                  <div key={category.name} className="col-span-1 flex rounded-md shadow-sm opacity-50 hover:shadow-lg ease-in-out duration-300">
                  <div
                      className='hidden md:flex bg-slate-200 flex-shrink-0 flex items-center justify-center w-16 text-white text-2xl font-medium rounded-l-md border-t border-l border-b border-gray-200'
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
                  </div>
              ))}
              </ul>
          </div>
          
          <PathHeading filters={filters} setFilters={setFilters} activeFilters={activeFilters} setActiveFilters={setActiveFilters} cards={cards} setCards={setCards}/>

          <dl className="w-full gap-6 lg:gap-10 md:columns-2 xl:columns-3 2xl:columns-4">
              {filteredCareers.map((career) => (
              <div key={career.id} className='break-inside-avoid-column pb-10'>
                  <PathCard careerId={career.id} title={career.title} number={career.id} tags={career.tags} path={career.path} saved={saved} setShowSaved={setShowSaved} cards={cards}/>
              </div>
              ))}
          </dl>

          {filteredCareers.length === 0 &&
            <div className="h-screen text-center m-12">
              <FaceFrownIcon className="mx-auto h-12 w-12 text-gray-400"/>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No results (for now)</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your filters!</p>
            </div>
          }
      </div>
      
      }/>
      <SavedAlert showSaved={showSaved} setShowSaved={setShowSaved}/>
      </div>
    )
}

export async function getServerSideProps(context) {
  
    const careers = await prisma.career.findMany();
    // console.log(careers)

    // oFFLINE DEV
  //   const careers = [
  //   {
  //     id: 1,
  //     title: 'Consultant to Test',
  //     path: [
  //       '{"id": "1", "content": "Chief Product Officer", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "RocketLaunchIcon", "iconBackground": "bg-green-600"}'
  //     ],
  //     updatedAt: '2023-02-20T02:57:53.550Z',
  //     tags: [ 'Consulting', 'Management Consulting' ]
  //   },
  //   {
  //     id: 2,
  //     title: 'Consultant to Founder',
  //     path: [
  //       '{"id": "1", "content": "Chief Product Officer", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "RocketLaunchIcon", "iconBackground": "bg-green-600"}',
  //       '{"id": "2", "content": "Chief Product Officer", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "RocketLaunchIcon", "iconBackground": "bg-green-600"}'
  //     ],
  //     updatedAt: '2023-02-20T03:04:27.111Z',
  //     tags: [ 'Consulting', 'Startups' ]
  //   },
  //   {
  //     id: 3,
  //     title: 'Consultant to Founder',
  //     path: [
  //       '{"id": "1", "content": "Chief Product Officer", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "RocketLaunchIcon", "iconBackground": "bg-green-600"}',
  //       '{"id": "2", "content": "Chief Product Officer", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "RocketLaunchIcon", "iconBackground": "bg-green-600"}'
  //     ],
  //     updatedAt: '2023-02-21T19:46:55.183Z',
  //     tags: [ 'Consulting', 'Startups' ]
  //   },
  //   {
  //     id: 4,
  //     title: 'Consultant to Founder',
  //     path: [
  //       '{"id": "1", "content": "Chief Product Officer", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "RocketLaunchIcon", "iconBackground": "bg-green-600"}',
  //       '{"id": "2", "content": "Final Step", "target": "at Marketplace ($11b mkt cap)", "date": "21-now", "icon": "PresentationChartLineIcon", "iconBackground": "bg-yellow-400"}'
  //     ],
  //     updatedAt: '2023-02-21T19:46:55.183Z',
  //     tags: [ 'Consulting', 'Startups' ]
  //   }
  // ] 


    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false
        }
      }
    }
    
    // let savedCareers;

    const userId = session.user.email

    // const user = await prisma.userSaved.upsert({
    //   where: { userId: userId },
    //   update: {},
    //   create: { 
    //     userId: userId,
    //     accessed: true
    //   },
    // })

    // const user = await prisma.userSaved.findUnique({
    //   where: {
    //     userId: userId
    //   },
    // }).catch(error => console.log('find user error: ', error))

    // if (user === null) {
    //   await prisma.userSaved.create({
    //     data: {
    //       userId: userId,
    //       accessed: true
    //     },
    //   }).catch(error => console.log('create user error: ', error))
    // }

    let savedCareers;

    savedCareers = await prisma.userSaved.findUnique({
      where: { userId: userId },
      select: {
        saved: true,
      },
    }).catch(error => console.log('select save error: ', error))
    


    if (savedCareers === null) {
      savedCareers = {saved: []}
      await prisma.userSaved.create({
        data: {
          userId: userId,
          accessed: true
        },
      }).catch(error => console.log('create user error: ', error))
    }
    
    return {
      props: {
        careers: JSON.parse(JSON.stringify(careers)),
        saved: JSON.parse(JSON.stringify(savedCareers)),
        // locArray: JSON.parse(JSON.stringify(locArray)),
      },
    }
  }