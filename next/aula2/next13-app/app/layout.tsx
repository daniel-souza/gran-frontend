import './globals.css'
import Link from 'next/link'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body>
      <nav>
        <ul>
          <li><Link href="/">Página principal</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/users/dashboard">Users/Dashboard</Link></li>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  )
}
