import React from 'react'
import Navbar from './Navbar'

export default function Layout({ main }) {
  return (
    <div className='flex'>
        <aside className="h-screen sticky top-0">
            <Navbar/>
        </aside>
        <main className='bg-green-50 w-full'>
            {main}
        </main>
    </div>
  )
}
