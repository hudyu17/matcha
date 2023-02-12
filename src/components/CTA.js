import { QueueListIcon } from "@heroicons/react/24/outline"
import Footer from "./Footer"
import SignupForm from "./SignupForm"
import { useState } from "react"

/* This example requires Tailwind CSS v3.0+ */
export default function CTA({ setShowSuccess, setShowExists, setShowError }) {
    
    return (
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Find your matcha 🍵
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Make your next move with 
              <span className="text-green-100 font-medium"> CareerMatcha</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <SignupForm setShowSuccess={setShowSuccess} setShowExists={setShowExists} setShowError={setShowError}/>
            {/* <div className="mx-auto flex rounded-md shadow-sm">
                    <div className="text-black flex focus-within:z-10 w-min">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="rounded-none rounded-l-md border-green-800 focus:border-indigo-500 focus:ring-indigo-500 text-sm w-min"
                            placeholder="my@email.com"
                        />
                    </div>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-green-800 bg-green-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-600 hover:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <QueueListIcon className="h-5 w-5" aria-hidden="true" />
                        <span>Join waitlist</span>
                    </button>
                </div> */}
            </div>
          </div>
        </div>
        <Footer/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#69bf64" />
              <stop offset={1} stopColor="#2f632c" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }
  