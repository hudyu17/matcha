import Layout from "@/components/Layout"
import { useCurrPathContext } from "context/currPathProvider";
import Head from "next/head";
import { ChatBubbleBottomCenterIcon, CircleStackIcon, CloudArrowUpIcon, LockClosedIcon, QueueListIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ReadMe() {
    const {data: session} = useSession()
    const authenticated = !! session;

    const { currPathContext } = useCurrPathContext();
    const [currPath, setCurrPath] = currPathContext;
    setCurrPath('')

  return (
    <div className="h-screen">
    <Head>
        <title>README | CareerMatcha</title>
        <meta name="description" content="CareerMatcha+" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="Coming Soon | CareerMatcha+"/>
        <meta property="og:description" content="Career inspiration, curated for you."/>
        <meta property="og:image" content="/preview.png" />
      </Head>
    <Layout
    
    main={
        <div className="relative isolate py-4  h-full">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-6 gap-x-8 ">
            <div className="lg:pr-4">
              <div className="lg:max-w-none">
                <p className="text-base font-semibold leading-7 text-green-700">README</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thanks for stopping by!</h1>
                
              </div>
          </div>
          
          
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-xl gap-6 flex flex-col">
                <p>
                  This started out as an experiment for how LinkedIn career data could be better packaged to serve a specific purpose: providing career inspiration and reassurance that you&apos;re not on the &quot;wrong&quot; path.
                </p>
                <p>
                  Your reception has been great - over 300 people on the waitlist and plenty of beta testers providing feedback 😌
                </p>
                <p>
                  However, I&apos;ve decided to stop maintaining the site for now. I quite frankly couldn&apos;t figure out how to get the data volume and quality I wanted in order to make the site effective (in my eyes), and I don&apos;t have the time currently to launch new initiatives like a mentorship program.
                </p>
                <p>
                  Everything on this site is therefore static. It&apos;ll remain live (until I stop paying for the postgres hosting 🤡), but won&apos;t be doing much otherwise.
                </p>
                <p>Just for fun, here&apos;s my original plan below 😎</p>
                <p className="italic">
                  The beta will run until the end of March 2023 (ish) - here&apos;s the plan: 
                </p>
                <ul role="list" className="space-y-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <QueueListIcon className="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Waitlist gains access in batches.</strong> Spreading out access allows for quicker feedback loops, creates a better experience, and avoids major issues.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CircleStackIcon className="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">More career data will be added.</strong> Relevant paths are continually being added; batched access will focus the content that appears on the platform.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ChatBubbleBottomCenterIcon className="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">I&apos;ll ask for feedback.</strong> I&apos;ll reach out directly with questions and schedule calls to learn more.
                    </span>
                  </li>
                </ul>

                
                {!authenticated && 
                <div>
                    <p className="my-6">Head back home <Link href="/" className="font-bold text-green-700 ">here!</Link></p>
                    
                </div>
                }

                <a href="https://hudsonyuen.com" target="_blank" rel="noreferrer" className="text-gray-900 italic font-medium text-sm">
                    - Hudson
                </a>
              </div>
              
            </div>
            
        </div>
      </div>}
    />
    </div>
  )
}
