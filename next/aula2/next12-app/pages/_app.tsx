import Link from 'next/link'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <nav>
      <ul>
        <li><Link href="/">Página principal</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/users/dashboard">Users/Dashboard</Link></li>
      </ul>
    </nav>
    <Component {...pageProps} />
  </>
} 

export default MyApp
