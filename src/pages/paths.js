import PathCard from "@/components/cards/PathCard"
import PathHeading from "@/components/PathHeading"
import { FaceFrownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { prisma } from "@/prisma"
import Layout from "@/components/Layout"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { useCurrPathContext } from "context/currPathProvider"
import SavedAlert from "@/components/alerts/SavedAlert"
import Head from "next/head"


export default function Paths({ careers, saved }) {
    const [showSaved, setShowSaved] = useState(false)
    const [cards, setCards] = useState(true)

    const { currPathContext, activeFiltersContext, filtersContext } = useCurrPathContext();

    const [currPath, setCurrPath] = currPathContext;
    const [activeFilters, setActiveFilters] = activeFiltersContext;
    const [filters, setFilters] = filtersContext;

    setCurrPath('Browse')

    const searchFilter = (careers) => {
      // If no filters are applied, then show all results
      if (activeFilters.length === 0) {
        return careers
      }

      // Grab active filters from context
      const activeLabels = [];
      for (var i = 0; i < activeFilters.length; i++) {
        activeLabels.push(activeFilters[i].label)
      }

      // Create array of careers with tags that are included in active filters
      const filtered = careers.filter(career => {
        return activeLabels.every(label => career.tags.includes(label))
      })

      // Return the new array of careers
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
      <div className='flex flex-col gap-6 lg:gap-8'>
          
          <p className="text-sm text-gray-400 italic -my-4">Newest first, updated Mar 25</p>
          
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
    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false
        }
      }
    }

    const careers = await prisma.career.findMany();
    const reversed = careers.reverse();

  //   // TEST ARRAY BELOW
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

    const userId = session.user.email

    let savedCareers;

    savedCareers = await prisma.userSaved.findUnique({
      where: { userId: userId },
      select: {
        saved: true,
      },
    }).catch(error => console.log('select save error: ', error))
    
    if (savedCareers === null) {
      savedCareers = {saved: []}
    }
    
    return {
      props: {
        careers: JSON.parse(JSON.stringify(reversed)),
        saved: JSON.parse(JSON.stringify(savedCareers)),
      },
    }
  }