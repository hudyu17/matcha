import PathSection from "@/components/PathSection"

const sections = [
    {
        id: 1,
        name: 'Consulting',
        href: 'paths/consulting',
        categories: [
            { name: 'Management', initials: '👔', href: '/paths/consulting/management', members: 16 },
            { name: 'Tech', initials: '💻', href: '/paths/consulting/tech', members: 17 },
            { name: 'Analytics', initials: '📊', href: '/paths/consulting/analytics', members: 16 },
            { name: 'Design', initials: '🎨', href: '/paths/consulting/design', members: 10 },
          ]
    },
    {
        id: 2,
        name: 'Software Engineering',
        href: 'paths/swe',
        categories: [
            { name: 'Full Stack', initials: '💾', href: '#', members: 28 },
            { name: 'Frontend', initials: '🖥', href: '#', members: 12 },
            { name: 'Management', initials: '👔', href: '#', members: 9 },
            { name: 'Devops', initials: '🛠', href: '#', members: 4 },
          ]
    },
    {
        id: 3,
        name: 'Startups',
        href: 'paths/startups',
        categories: [
            { name: 'Fintech', initials: '💸', href: '#', members: 32 },
            { name: 'Cleantech', initials: '🌳', href: '#', members: 12 },
            { name: 'B2B SaaS', initials: '🏢', href: '#', members: 11 },
            { name: 'Consumer', initials: '📱', href: '#', members: 21 },
          ]
    }
]

export default function Paths() {
    
  return (
    <div className="mx-auto max-w-2xl py-8 sm:py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Careers involving...</h2>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
                Fringilla egestas justo massa purus sagittis malesuada.
            </p>
        </div> */}
        {sections.map((section) => (
            <PathSection section={section}/>
        ))}
        
    </div>
  )
}
