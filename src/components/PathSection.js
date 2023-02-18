import Link from "next/link"
import PathSectionCategories from "./PathSectionCategories"

export default function PathSection({ section }) {
    return (
        <div className="bg-white">
        <div className="py-8 sm:py-12 ">
            <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-lg font-medium leading-6 text-gray-900">{section.name}</h2>
            <Link href={section.href} className="hidden text-sm font-medium text-green-700 hover:text-green-500 md:block">
                More paths with {section.name}
                <span aria-hidden="true"> &rarr;</span>
            </Link>
            </div>            
            <PathSectionCategories categories={section.categories}/>
            <div className="mt-6 text-sm md:hidden">
            <Link href={section.href} className="font-medium text-green-700 hover:text-green-500">
            More paths with {section.name}
                <span aria-hidden="true"> &rarr;</span>
            </Link>
            </div>
        </div>
        </div>
    )
}
  