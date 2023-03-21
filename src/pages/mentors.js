import Layout from "@/components/Layout"
import { useCurrPathContext } from "context/currPathProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Head from "next/head";
import { useSession } from "next-auth/react";
import axios from 'axios'
import { UserIcon, TrashIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import MentorSwitch from "@/components/MentorSwitch";
import { prisma } from "@/prisma";

const features = [
  {
    name: 'Get 1:1 answers to your most burning questions',
    description:
      'Receive undivided attention as you figure out your next move, with advice and guidance specific to your situation.',
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'Leverage industry knowledge to chart your unique path',
    description:
      "There's no substitute for experience. Learn from someone who's been in your shoes and understands the space you're in.",
    href: '#',
    icon: BriefcaseIcon,
  },
  {
    name: 'Build an unbeatable network to land your next job, or the one after that',
    description:
      'Your mentors can turbocharge the size and depth of your network, bringing you knowledge and meaningful introductions.',
    href: '#',
    icon: TrashIcon,
  },
]


export default function Mentor({ initialEnabled }) {
    const { currPathContext } = useCurrPathContext();
    const [currPath, setCurrPath] = currPathContext;
    setCurrPath('Mentors')

    const [enabled, setEnabled] = useState(initialEnabled)


  return (
    <div className="h-screen">
    <Head>
        <title>Mentorship | CareerMatcha</title>
        <meta name="description" content="Mentorship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="Mentorship | CareerMatcha"/>
        <meta property="og:description" content="Career inspiration, curated for you."/>
        <meta property="og:image" content="/preview.png" />
      </Head>
    <Layout
    // heading={'Mentors (coming soon)'}

    main={
      <div className="relative isolate -mt-24">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <div className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
        <svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem]">
          <path
            fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
            fillOpacity=".3"
            d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
          />
          <defs>
            <linearGradient
              id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
              x1="508.179"
              x2="-28.677"
              y1="-116.221"
              y2="1091.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="">
        <div className="mx-auto  px-2 pb-24 pt-28 lg:px-4 ">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="max-w-lg text-4xl font-medium tracking-tight text-green-700 sm:text-5xl font-plus-jakarta-sans">
                CareerMatcha
                <span className="font-bold text-green-600">{' '}Mentors</span>
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-xl">
                We&apos;re working on a mentorship service to connect you with the same professionals that inspire you.
              </p>
              {/* <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                  I&apos;m interested
                </a>
              </div> */}
              <div className="mt-10">
                <MentorSwitch enabled={enabled} setEnabled={setEnabled} dark={false}/>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-32 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 -mx-4 sm:-mr-6 lg:-mr-8">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-2 lg:px-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-green-900">
            Grow with specific, personal guidance
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find a dedicated career coach that can help you achieve your specific goals.
          </p>
        </div>
        <div className="mx-auto lg:mx-0 my-16 max-w-2xl lg:max-w-7xl ">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-green-700">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-20 -mx-4 sm:mx-0">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Help us help you.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
            We need your input to build <span className="font-medium">CareerMatcha</span> <span className="font-bold text-white">Mentors</span>. Let us know if you&apos;re interested and want to be contacted.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <MentorSwitch enabled={enabled} setEnabled={setEnabled} dark={true}/>
          </div>
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
      </div>
    </div>
    
    }
    />
    </div>
  )
}

export async function getServerSideProps(context) {
  
    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false
        }
      }
    }

    const userId = session.user.email

    // get current save status from db
    const saved = await prisma.userSaved.findUnique({
      where: { userId: userId },
      select: {
        cmplus: true,
      },
    }).catch(error => console.log(error))

    // let enabled;
// it's throwing true for some reason on live version
    if (saved === null) {
      // enabled = false;
      return {
        props: {
          initialEnabled: false
        }
      }
    } 
    // else {
    //   enabled = true
    // }

    return {
        props: {
          initialEnabled: saved.cmplus
        }
    }
}