import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function ConsultingSection({ idString }) {
   

    return (
        <div className='mx-auto max-w-2xl py-8 sm:py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div>
            <nav className="sm:hidden" aria-label="Back">
                <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                <ChevronLeftIcon className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                Back
                </a>
            </nav>
            <nav className="hidden sm:flex" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div className="flex">
                    <a href="/paths" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                        Paths
                    </a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a href="/paths/consulting" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                        Consulting
                    </a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a href="#" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                        {idString} Consulting
                    </a>
                    </div>
                </li>
                </ol>
            </nav>
            </div>
            <div className="mt-4 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {idString} Consulting
                </h2>
            </div>
            
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;

    const idString = id[0].toUpperCase() + id.slice(1);

    return {
      props: {idString}, // will be passed to the page component as props
    }
  }