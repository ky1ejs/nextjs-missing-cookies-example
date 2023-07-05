import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const allCookies = cookies().getAll()
  const result = `cookies in handler: ${allCookies.length > 0 ? allCookies.length : 'empty'}`
  return new NextResponse(result, {status: 200})
}