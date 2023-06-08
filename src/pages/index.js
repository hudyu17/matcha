import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '@/components/landingPage/Hero'
import Preview from '@/components/landingPage/Preview'
import Pathways from '@/components/landingPage/Pathways'
import CTA from '@/components/landingPage/CTA'
import FAQ from '@/components/landingPage/FAQ'
import { useState } from 'react'
import SuccessAlert from '@/components/alerts/SuccessAlert'
import EmailExistsAlert from '@/components/alerts/EmailExistsAlert'
import ErrorAlert from '@/components/alerts/ErrorAlert'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showExists, setShowExists] = useState(false)
  const [showError, setShowError] = useState(false)

  return (
    <div className='bg-white'>
      <Head>
        <title>CareerMatcha</title>
        <meta name="description" content="The first database for career paths, curated for you. Find your career inspiration today."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="CareerMatcha - the first database for career paths."/>
        <meta property="og:description" content="The first database for career paths, curated for you. Find your career inspiration today."/>
        <meta property="og:image" content="/preview.png" />
      </Head>
      <Hero setShowSuccess={setShowSuccess} setShowExists={setShowExists} setShowError={setShowError}/>
      <Pathways/>
      <Preview/>
      <FAQ/>
      <CTA setShowSuccess={setShowSuccess} setShowExists={setShowExists} setShowError={setShowError}/>
      <SuccessAlert showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
      <EmailExistsAlert showExists={showExists} setShowExists={setShowExists}/>
      <ErrorAlert showError={showError} setShowError={setShowError}/>
    </div>
  )
}
