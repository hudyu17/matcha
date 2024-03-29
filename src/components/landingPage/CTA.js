import Footer from "./Footer"
import Link from "next/link"

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
              <span className="text-green-100 font-bold font-plus-jakarta-sans"> CareerMatcha</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              title="cta-two"
              href="/paths"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link title="readme-two" href="/readme" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
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
  