import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Feed from './Feed'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Pathways() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-10 lg:px-12">
        
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-28 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              // <div key={feature.name} className="flex flex-col">
              //   <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              //     <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              //     {feature.name}
              //   </dt>
              //   <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              //     <p className="flex-auto">{feature.description}</p>
              //     <p className="mt-6">
              //       <a href={feature.href} className="text-base font-semibold leading-7 text-indigo-600">
              //         Learn more <span aria-hidden="true">→</span>
              //       </a>
              //     </p>
              //   </dd>
              // </div>
              <div>
                {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2> */}
                <Feed key={feature.name}/>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
