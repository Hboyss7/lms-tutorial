import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Định nghĩa các routes public (không cần đăng nhập)
const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    // '/test',
])

export default clerkMiddleware(async (auth, request) => {
    // Nếu không phải public route thì yêu cầu phải đăng nhập
    if (!isPublicRoute(request)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}