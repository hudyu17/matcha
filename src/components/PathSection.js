import PathSectionCategories from "./PathSectionCategories"

export default function PathSection({ section }) {
    return (
        <div className="">
        <div className="py-8">
            <div className="md:flex md:items-center md:justify-between">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{section.name}</h2>
            </div>            
            <PathSectionCategories categories={section.categories}/>
        </div>
        </div>
    )
}
  