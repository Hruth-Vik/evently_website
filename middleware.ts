import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes:[
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",   // Match all routes except those with file extensions or under _next directory
    "/",                               // Match root route
    "/(api|trpc)(.*)",                  // Match routes starting with "/api" or "/trpc"
    "/favicon.ico",                     // Match specifically the favicon.ico route
  ],
};