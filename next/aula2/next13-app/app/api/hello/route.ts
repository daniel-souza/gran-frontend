import { NextResponse } from "next/server";
// Neste arquivo podemos definir quaisquer tipos de requisições que queremos que sejam tratadas pelo Next.js à rota /api/hello:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
// app/api/hello/route.ts
// pages/api/hello.ts
//  A simple GET Example

// content-type: application/json
export async function GET(req: Request) {
  return NextResponse.json({ name: 'John Doe' }, { status: 200 })
}