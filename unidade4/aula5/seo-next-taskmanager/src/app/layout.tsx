import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'


export const metadata: Metadata = {
  title: 'Gerenciador de Tarefas',
  description: 'Gerenciador de tarefas com Next.js e NextAuth',
  robots: {
    follow: true,
    index: true,
  },
  keywords: ['nextjs', 'nextauth', 'typescript', 'tailwindcss', 'gerenciador de tarefas'],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  ;
  return (
    <html lang="pt-BR">
      <body>
        <SessionProvider session={ session }>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
