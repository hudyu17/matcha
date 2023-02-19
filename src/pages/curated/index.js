import PathSection from "@/components/PathSection"

const sections = [
    {
        id: 1,
        name: 'Consulting',
        href: 'paths/consulting',
        categories: [
            { name: 'Partner Track', initials: '👔', href: '/paths/consulting/management', members: 16 },
            { name: 'Entry after MBA', initials: '💻', href: '/paths/consulting/tech', members: 17 },
            { name: 'Early Exit', initials: '🎨', href: '/paths/consulting/design', members: 10 },
          ]
    },
    {
        id: 2,
        name: 'Software Engineering',
        href: 'paths/swe',
        categories: [
            { name: 'Switch to Product', initials: '💾', href: '#', members: 28 },
            { name: 'Individual Contributor', initials: '🖥', href: '#', members: 12 },
            { name: 'Management', initials: '👔', href: '#', members: 9 },
          ]
    },
    {
        id: 3,
        name: 'Startups',
        href: 'paths/startups',
        categories: [
            { name: 'Serial Exits', initials: '💸', href: '#', members: 32 },
            { name: 'Started in School', initials: '🌳', href: '#', members: 12 },
            { name: 'Late Bloomers', initials: '🏢', href: '#', members: 11 },
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
        <div className="border-b border-gray-200 pb-5">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Curated Career Paths
            </h2>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Exclusively on CareerMatcha+            
            </p>
        </div>
        <div className="grid grid-cols-3 gap-24 w-full">
        {sections.map((section) => (
            <PathSection section={section}/>
        ))}
        </div>
    </div>
  )
}
