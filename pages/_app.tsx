import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {Noto_Sans} from '@next/font/google'

const notoSans = Noto_Sans({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>R&R</title>
    </Head>
    <Component {...pageProps} />
  </>
}
