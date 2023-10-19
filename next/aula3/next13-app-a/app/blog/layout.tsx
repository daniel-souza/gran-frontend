import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="p-5 bg-slate-200 font-bold">
        <p>Layout do blog, clique em um dos posts abaixo:</p>
        <ul>
          <li><Link href="/blog/a">Post a</Link></li>
          <li><Link href="/blog/b">Post b</Link></li>
          <li><Link href="/blog/c">Post c</Link></li>
        </ul>
      </div>
      {children}
    </>
  )
}