import '@/styles/globals.css'
import PlausibleProvider from 'next-plausible'
import { SessionProvider } from "next-auth/react"
import { CurrPathProvider } from 'context/currPathProvider'

export default function App({ 
  Component,
  pageProps: { session, ...pageProps },
 }) {


  return (
    <PlausibleProvider domain="careermatcha.com">
      <SessionProvider session={session}>
        <CurrPathProvider>
          <Component {...pageProps}/>
        </CurrPathProvider>
      </SessionProvider>
    </PlausibleProvider>
  )
}
