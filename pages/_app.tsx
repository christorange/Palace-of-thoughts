import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Julius_Sans_One } from 'next/font/google'
import Head from 'next/head'

const fontJulius = Julius_Sans_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-primary'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Filter of Inspirations</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
