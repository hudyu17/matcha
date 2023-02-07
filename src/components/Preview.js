import { ClockIcon, ChartBarIcon, BellSlashIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Save weeks of research.',
    description:
      'Forget about the LinkedIn search limit. We bring together hundreds of career paths that are relevant to you, all in one place.',
    icon: ClockIcon,
  },
  {
    name: 'Make informed decisions.',
    description: 'Want to break into product from consulting? Deciding between management or IC? See what worked for others when they were in your shoes.',
    icon: ChartBarIcon,
  },
  {
    name: 'Quell the career anxiety.',
    description: `Most career paths aren't linear. Explore unique journeys to the role you're aiming for, knowing that it's already worked.`,
    icon: BellSlashIcon,
  },
]

export default function Preview() {
  return (
    <div className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">See how others got there</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reaching your career goals isn't always easy, but knowing how others did it can take out the guesswork. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
