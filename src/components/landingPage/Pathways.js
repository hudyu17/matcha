import { CheckIcon, HandThumbUpIcon, UserIcon, AcademicCapIcon, PresentationChartLineIcon, RocketLaunchIcon, RectangleGroupIcon, CodeBracketIcon, GlobeAmericasIcon } from '@heroicons/react/20/solid'
import Feed from './Feed'

const pathways = [
  {
    id: 1,
    title: 'Consultant to Product',
    number: 17,
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
    number: 53,
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
    number: 94,
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

export default function Pathways() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        
        <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-28 gap-y-6 lg:max-w-none lg:grid-cols-3">
              {pathways.map((pathway) => (
                <div key={pathway.id}>
                  <Feed key={pathway.id} title={pathway.title} number={pathway.number} name={pathway.name} content={pathway.content}/>
                </div>
              ))}
            </dl>
          <div className='lg:-mt-8 w-full flex font-medium pb-4 text-green-700 text-2xl'>
            <h2 className='lg:mx-auto'>+ hundreds more unique career paths, coming soon.</h2>
          </div>

        </div>
      </div>
    </div>
  )
}
