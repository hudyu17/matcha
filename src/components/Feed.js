function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feed({ title, number, name, content }) {
  return (
    <div className="flow-root">
      <ul role="list" className="mb-8">
        <h3 className='font-medium pb-4 text-black text-lg'>{title}</h3>
        <h2 className="pb-4 font-medium leading-8 tracking-tight text-green-700">Career #{number}
        : <span className="font-normal">{name}'s path</span>
        </h2>

        {content.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx < content.length - 2 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              {eventIdx === content.length - 2 ? (
                <span className="absolute top-4 left-4 -ml-px h-full lg:h-4/6 w-0.5 bg-gray-200 lg:bg-gray-100" aria-hidden="true" />
              ) : null}
              <div className={ eventIdx === content.length - 1 ? 'relative flex space-x-3 lg:opacity-25' : 'relative flex space-x-3' }>
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
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
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
