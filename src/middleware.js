import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request) {
  const response = intlMiddleware(request);

  const userDataCookie = request.cookies.get("userData");
  // console.log("userDataCookie", userDataCookie);
  const nextLocaleCookie = request.cookies.get("NEXT_LOCALE");
  const language = nextLocaleCookie?.value || "fr";

  //unauth case
  if (
    !userDataCookie ||
    !userDataCookie.value ||
    userDataCookie.value === "null" ||
    userDataCookie.value === "undefined" ||
    userDataCookie === undefined
  ) {
    // even if unauth u can access the following hh
    const excludedPaths = [
      "/ar",
      "/fr",
      "/ar/login",
      "/fr/login",
      "/ar/register",
      "/fr/register",
      "/ar/about",
      "/fr/about",
      "/fr/register/api/upload",
      "/ar/search",
      "/fr/search",
    ];

    const targetPath = `/${language}`;

    // Avoid redirecting to the same URL (dir infinite loop) and exclude the auth pages
    if (
      request.nextUrl.pathname === targetPath ||
      excludedPaths.includes(request.nextUrl.pathname)
    ) {
      // console.log(
      //   "Unauthenticated user already on redirection target:",
      //   targetPath,
      //   "or heading to an allowed path"
      // );
      return response;
    }

    // console.log("User is not authenticated. Redirecting to:", targetPath);
    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  try {
    const userData = JSON.parse(userDataCookie.value);

    if (userData?.role) {
      // Redirect authenticated users away from login or register paths
      const cantAccessIfLogged = [
        "/ar/login",
        "/fr/login",
        "/ar/register",
        "/fr/register",
      ];
      if (cantAccessIfLogged.includes(request.nextUrl.pathname)) {
        const rolePath = `/${language}/${userData.role || ""}`;
        // console.log(
        //   "Authenticated user attempting to access restricted path. Redirecting to:",
        //   rolePath
        // );
        return NextResponse.redirect(new URL(rolePath, request.url));
      }

      const rolePath = `/${language}/${userData.role}`;
      if (!request.nextUrl.pathname.startsWith(rolePath)) {
        // console.log("Redirecting to role path:", rolePath);
        return NextResponse.redirect(new URL(rolePath, request.url));
      }
    }
  } catch (error) {
    // console.error("Failed :", error);

    const targetPath = `/${language}`;
    if (request.nextUrl.pathname === targetPath) {
      // console.log(
      //   "Unauthenticated user already on redirection target:",
      //   targetPath
      // );
      return response;
    }

    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  // console.log("Allowing request to proceed.");
  return response;
}

export const config = {
  matcher: ["/", "/(ar|fr)/:path*"],
};
