import { CheckIcon, HandThumbUpIcon, UserIcon, AcademicCapIcon, PresentationChartLineIcon, RocketLaunchIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import Feed from './Feed'

const pathways = [
  {
    id: 1,
    title: 'Consultant to CPO',
    content: [
      {
        id: 1,
        content: 'Chief Product Officer',
        target: 'at ___',
        href: '#',
        date: "'21-now",
        datetime: '2020-09-20',
        icon: RocketLaunchIcon,
        iconBackground: 'bg-green-600',
      },
      {
        id: 2,
        content: 'Senior Experience Architect and PM',
        target: 'at Connected',
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
        content: 'University of Toronto',
        target: 'MASc, Human Factors',
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
        content: 'University of Toronto',
        target: 'BASc, Industrial Engineering',
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
    title: 'SWE to Management',
    content: [
      {
        id: 1,
        content: 'Applied to',
        target: 'Front End Developer',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
      },
      {
        id: 2,
        content: 'Advanced to phone screening by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
      {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
      {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
    ]
  },
  {
    id: 3,
    content: [
      {
        id: 1,
        content: 'Applied to',
        target: 'Front End Developer',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
      },
      {
        id: 2,
        content: 'Advanced to phone screening by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
      {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
      {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
    ]
  },
]

export default function Pathways() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-10 lg:px-12">
        
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-28 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {pathways.map((pathway) => (
              <div>
                <Feed key={pathway.id} title={pathway.title} content={pathway.content}/>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
