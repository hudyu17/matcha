import '@/styles/globals.css'
import PlausibleProvider from 'next-plausible'
import { SessionProvider } from "next-auth/react"

export default function App({ 
  Component,
  pageProps: { session, ...pageProps },
 }) {
  return (
    <PlausibleProvider domain="careermatcha.com">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PlausibleProvider>
  )
}
