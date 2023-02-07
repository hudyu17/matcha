import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Pathways from '@/components/Preview'
import Preview from '@/components/Pathways'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Preview/>
      <Pathways/>
      <FAQ/>
      <CTA/>
    </div>
  )
}
