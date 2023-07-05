import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const allCookies = cookies().getAll()
  console.log(`cookies in handler: ${allCookies.length > 0 ? allCookies.toString : 'empty'}`)
  return new NextResponse("Done", {status: 200})
}