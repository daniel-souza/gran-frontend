import './globals.css'
import Link from 'next/link';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import AuthButton from '@/components/AuthButton';

export default async function RootLayout({children}:{children: React.ReactNode}) {
  const session = await getServerSession();
  return (
    <html>
      <body>
        <SessionProvider session={session}>
          <main className="mx-auto flex flex-col gap-2 font-bold">
            <nav className='flex gap-5 justify-around bg-blue-300'>
                <Link href="/">Página principal</Link>
                <AuthButton />
            </nav>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
    )
}
