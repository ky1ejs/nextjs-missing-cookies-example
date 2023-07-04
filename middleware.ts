import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  console.log(`cookies in middleware: ${req.cookies.getAll().length}`)
  return NextResponse.next()
}
