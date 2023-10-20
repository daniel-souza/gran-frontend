import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="p-5 bg-slate-200 font-bold">
        <p>Layout da rota /users</p>
      </div>
      {children}
    </>
  )
}