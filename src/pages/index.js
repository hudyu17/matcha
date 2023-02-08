import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Preview from '@/components/Preview'
import Pathways from '@/components/Pathways'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>CareerMatcha</title>
        <meta name="description" content="Career inspiration, curated for you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Hero/>
      <Pathways/>
      <Preview/>
      <FAQ/>
      <CTA/>
    </div>
  )
}
