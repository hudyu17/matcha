import React from 'react'
import Link from 'next/link'

export default function PathSectionCategories({ categories }) {
  return (
    <ul role="list" className="mt-5 grid grid-cols-1 gap-5">
        {categories.map((category) => (
            <Link href={category.href} key={category.name} className="col-span-1 flex rounded-md shadow-sm hover:shadow-lg ease-in-out duration-300">
            <div
                className='bg-slate-200 flex-shrink-0 flex items-center justify-center w-16 text-white text-2xl font-medium rounded-l-md border-t border-l border-b border-gray-200'
            >
                {category.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                <div className="font-medium text-gray-900">
                    {category.name}
                </div>
                <p className="text-gray-500">{category.members} Paths</p>
                </div>
                
            </div>
            </Link>
        ))}
        </ul>
  )
}
