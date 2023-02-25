import { BookmarkIcon } from "@heroicons/react/24/outline"
import DynamicIcon from "./DynamicIcon"
import axios from 'axios'
import { useSession } from "next-auth/react"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { prisma } from "@/prisma"
import { useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function PathCard({ careerId, title, number, tags, path, saved, setShowSaved }) {
    const { data: session } = useSession()
    const [savedCareers, setSavedCareers] = useState(saved.saved)

    let content = []
    for (var i = 0; i < path.length; i++) {
        content.push(JSON.parse(path[i]))
    }

    const saveCareer = async (careerId) => {
      // tracking modified save locally before changes are made in db
      if (!session) {
        alert('sign in!')
        return
      }
      console.log(savedCareers)
      setSavedCareers([...savedCareers, careerId])
      setShowSaved(true)

      const userId = session.user.email;

      await axios.post("/api/saveCareer", {
        userId, careerId
      }).catch(error => {
        console.log(error.response.data)
      })

    }

    const unsaveCareer = async (careerId) => {
      setSavedCareers(savedCareers.filter(career => career !== careerId))

      const userId = session.user.email;

      await axios.post("/api/unsaveCareer", {
        userId, careerId
      }).catch(error => {
        console.log(error.response.data)
      })
    }

    console.log(tags)

    return (
      <div className="flow-root divide-y divide-gray-200 rounded-lg bg-white shadow">
        <ul role="list" className="p-5">
            <div className="flex justify-between">
                <h2 className="pb-4 font-medium leading-1 tracking-tight text-green-700">
                    Example #{number}: {title}
                </h2>
                {savedCareers?.includes(careerId) ? 
                  <BookmarkIcon 
                    className="w-5 h-5 -mr-1 text-green-700 fill-green-700 hover:fill-white cursor-pointer"
                    onClick={() => unsaveCareer(careerId)}
                  />
                  :
                  <BookmarkIcon 
                    className="w-5 h-5 -mr-1 text-green-700 hover:fill-green-700 cursor-pointer"
                    onClick={() => saveCareer(careerId)}
                  />
                }
                
            </div>
          {content.map((event, eventIdx) => (
            <li key={event.id}>
              <div className={ eventIdx === content.length - 1 ? 'relative pb-2' : 'relative pb-8' }>
                {eventIdx < content.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}

                <div className='relative flex space-x-3'>
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-white'
                      )}
                    >
                      {/* <event.icon className="h-5 w-5 text-white" aria-hidden="true" /> */}
                      <DynamicIcon style='h-5 w-5 text-white' icon={event.icon}/>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="font-medium text-gray-900 text-sm ">
                        {event.content}{' '}
                        <span className="text-gray-500">
                          {event.target}
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <div>'{event.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-4 py-3">
            {tags.map((tag) => (
                <div className="inline-block flex-shrink-0 rounded-full bg-green-100 m-1 px-2 py-0.5 text-xs font-medium text-green-800">
                {tag}
              </div>
            ))}
        
        </div>
      </div>
  )
}

export async function getServerSideProps(context) {
  
}