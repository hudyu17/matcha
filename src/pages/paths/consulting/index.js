import PathSectionCategories from '@/components/PathSectionCategories'
import { ChevronLeftIcon, ChevronRightIcon, RocketLaunchIcon, RectangleGroupIcon, AcademicCapIcon, PresentationChartLineIcon, CodeBracketIcon, GlobeAmericasIcon } from '@heroicons/react/20/solid'
import Feed from '@/components/Feed'

const categories = [
    { name: 'Management', initials: '👔', href: '/paths/consulting/management', members: 16 },
    { name: 'Tech', initials: '💻', href: '/paths/consulting/tech', members: 17 },
    { name: 'Analytics', initials: '📊', href: '/paths/consulting/analytics', members: 16 },
    { name: 'Design', initials: '🎨', href: '/paths/consulting/design', members: 10 },
  ]

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
          id: 3,
          content: 'Product Manager',
          target: 'at Freshbooks',
          href: '#',
          date: "'13-'14",
          datetime: '2020-09-22',
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
        ]
      },
  ]

export default function Consulting() {
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
            
          </ol>
        </nav>
      </div>
      <div className="mt-4 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1  pb-5">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Consulting
          </h2>
          <PathSectionCategories categories={categories}/>
        </div>
      </div>
      <div className="border-b border-gray-200 pt-12 pb-4 md:pb-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">All Consulting Paths</h3>
    </div>
      <dl className="pt-6 grid max-w-xl grid-cols-1 gap-x-28 lg:max-w-none lg:grid-cols-3">
            {pathways.map((pathway) => (
            <div key={pathway.id}>
                <Feed key={pathway.id} title={pathway.title} number={pathway.number} name={pathway.name} content={pathway.content}/>
            </div>
            ))}
        </dl>
    </div>
  )
}
