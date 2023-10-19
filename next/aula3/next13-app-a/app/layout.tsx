import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href={"/"}>Página principal</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
