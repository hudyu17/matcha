import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { prisma } from "@/prisma"
import Layout from "@/components/Layout"
import { useCurrPathContext } from "context/currPathProvider"
import PathCard from "@/components/PathCard"

export default function Saved({ savedCareers, savedIds }) {
  const [currPath, setCurrPath] = useCurrPathContext();
  setCurrPath('Saved')

  return (
    <div className="h-screen">
      <Layout 
        heading={'Saved Careers'}
        main={
          <dl className="w-full gap-6 lg:gap-10 md:columns-2 lg:columns-3">
              {savedCareers.map((career) => (
              <div key={career.id} className='break-inside-avoid-column pb-10'>
                  <PathCard careerId={career.id} title={career.title} number={career.id} tags={career.tags} path={career.path} saved={savedIds}/>
              </div>
              ))}
          </dl>
      }/>
    </div>
  )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    
    if (!session) {
      return {
        redirect: {
          destination: '/404',
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

    const savedCareers = await prisma.career.findMany({
      where: {
        id: {in: savedIds.saved}
      }
    })
  
    return {
      props: {
        savedCareers: JSON.parse(JSON.stringify(savedCareers)),
        savedIds: JSON.parse(JSON.stringify(savedIds))
      },
    }
  }
