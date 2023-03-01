import Layout from "@/components/Layout"
import { useCurrPathContext } from "context/currPathProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Head from "next/head";
import { ChatBubbleBottomCenterIcon, CircleStackIcon, CloudArrowUpIcon, LockClosedIcon, QueueListIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useSession } from "next-auth/react";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function Example() {
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
        <div className="relative isolate overflow-hidden px-6 py-4 lg:overflow-visible lg:px-0 mb-12">
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-green-700">README</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thanks for stopping by!</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                    Your beta testing is critical to making 
                        <span className="font-bold text-green-700 font-plus-jakarta-sans"> 
                        {' '}CareerMatcha{' '}
                        </span>
                    better for everyone. 

                </p>
              </div>
            </div>
          </div>
          <div className="lg:sticky lg:w-5/6 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              src="https://images.unsplash.com/photo-1510347630658-50da9aac096e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                There are a <span className="italic">lot</span> of careers out there and an infinite number of ways to slice it. This version is one such way, but it&apos;s just the start. 
                The beta will run until the end of March 2023 (ish) - here&apos;s the plan: 

                </p>
                <ul role="list" className="mt-6 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <QueueListIcon className="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Waitlist gains access in batches.</strong> Spreading out access over time will allow for quicker feedback loops, create a better experience, and avoid major issues.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CircleStackIcon className="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">More career data will be added.</strong> Relevant career paths are continually being added; batched access will help focus the content that appears on the platform.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ChatBubbleBottomCenterIcon className="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">I&apos;ll ask for feedback.</strong> At the end of each week, I&apos;ll send each batch a survey, reach out directly with questions, or schedule calls with those that are interested.
                    </span>
                  </li>
                </ul>
                <p className="mt-6">
                    Thank you for your help and patience - I want to make 
                    <span className="font-bold text-green-700 font-plus-jakarta-sans"> 
                        {' '}CareerMatcha{' '}
                    </span> 
                    the best it can be for everyone, and that starts here. 
                </p>

                <p className="my-6">
                    In the meantime, please reach out with any thoughts, comments, feedback, concerns, if you want to hang out 🤡 - <span className="text-green-700 font-medium">hudson(@)careermatcha(dot)com</span>
                </p>

                {!authenticated && 
                <div>
                    <p className="my-6">Head back <Link href="/" className="font-bold text-green-700 ">home</Link> and join the waitlist if you haven't already!</p>
                    
                </div>
                }

                <a href="https://hudsonyuen.com" target="_blank" rel="noreferrer" className="text-gray-900 italic font-medium text-sm">
                    - Hudson
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>}
    />
    </div>
  )
}

export async function getServerSideProps(context) {
  
    // const session = await getServerSession(context.req, context.res, authOptions)

    // if (!session) {
    //   return {
    //     redirect: {
    //       destination: '/signin',
    //       permanent: false
    //     }
    //   }
    // }

    return {
        props: {}
    }
}