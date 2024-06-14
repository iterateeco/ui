import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Gabarito } from "next/font/google"

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: "--font-gabarito"
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={gabarito.variable}><Component {...pageProps} /></main>
}
