import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { prisma } from "@/prisma"
import Layout from "@/components/Layout"
import { useCurrPathContext } from "context/currPathProvider"
import PathCard from "@/components/PathCard"
import Head from "next/head"
import { FolderOpenIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Saved({ savedCareers, savedIds }) {
  const { currPathContext } = useCurrPathContext();
  const [currPath, setCurrPath] = currPathContext;
  setCurrPath('Saved')

  return (
    <div className="h-screen">
      <Head>
        <title>Saved | CareerMatcha</title>
        <meta name="description" content="Browse all Career Paths" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="Saved Career Paths | CareerMatcha"/>
        <meta property="og:description" content="Career inspiration, curated for you."/>
        <meta property="og:image" content="/preview.png" />
      </Head>
      <Layout 
        heading={'Saved Careers'}
        main={
          <div>
          <dl className="w-full gap-6 lg:gap-10 md:columns-2 xl:columns-3 2xl:columns-4">
              {savedCareers.map((career) => (
              <div key={career.id} className='break-inside-avoid-column pb-10'>
                  <PathCard careerId={career.id} title={career.title} number={career.id} tags={career.tags} path={career.path} saved={savedIds} cards={true}/>
              </div>
              ))}
              
          </dl>
          {savedCareers.length === 0 &&
            <div className="h-screen bg-green-50 text-center">
              <FolderOpenIcon className="mx-auto h-12 w-12 text-gray-400 mt-32"/>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No saved careers (for now)</h3>
              <p className="mt-1 text-sm text-gray-500">Browse careers <Link href="/paths" className="text-green-700 font-medium">here!</Link></p>
            </div>
          }
          </div>
      }/>
      
    </div>
  )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    
    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
      }
    }
    
    const userId = session.user.email
    const savedIds = await prisma.userSaved.findUnique({
      where: { userId: userId },
      select: {
        saved: true,
      },
    })

    let savedCareers;

    if (savedIds === null) {
      savedCareers = []
    } else {
      savedCareers = await prisma.career.findMany({
        where: {
          id: {in: savedIds.saved}
        }
      })
    }
  
    return {
      props: {
        savedCareers: JSON.parse(JSON.stringify(savedCareers)),
        savedIds: JSON.parse(JSON.stringify(savedIds))
      },
    }
  }
