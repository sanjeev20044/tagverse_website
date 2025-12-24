import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Only protect /admin routes, but allow /admin/login itself
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        const session = req.cookies.get('admin_session');

        if (!session || session.value !== 'authenticated') {
            const loginUrl = new URL('/admin/login', req.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
