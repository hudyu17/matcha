import { RocketLaunchIcon } from "@heroicons/react/20/solid"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import DynamicIcon from "./DynamicIcon"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function PathCard({ title, number, tags, path }) {
    let content = []
    for (var i = 0; i < path.length; i++) {
        content.push(JSON.parse(path[i]))
    }

    return (
      <div className="flow-root divide-y divide-gray-200 rounded-lg bg-white shadow">
        <ul role="list" className="p-5">
            <div className="flex justify-between">
                <h2 className="pb-4 font-medium leading-2 tracking-tight text-green-700">
                    Example #{number}: {title}
                </h2>
                <BookmarkIcon className="w-5 h-5 mt-1 text-green-900"/>
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
  