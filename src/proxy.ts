import { NextResponse } from 'next/server'
 
export function proxy(request: Request) {
  const url = new URL(request.url);

  const language = request.headers.get("cookie")?.includes("lang");
  console.log(language)

  if (url.pathname === "/" && language) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}