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
        <nav className='bg-slate-600 flex gap-4 p-3 text-yellow-100'>
          <Link href={"/"}>Página principal</Link>
          <Link href={"/users"}>Rota Users</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
