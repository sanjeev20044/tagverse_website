'use client';

import AdminTopNav from "@/components/admin/AdminTopNav";
import AdminSecondaryNav from "@/components/admin/AdminSecondaryNav";
import LogoutButton from "@/components/admin/LogoutButton";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    // More robust check to include potential trailing slashes or sub-routes
    const isLoginPage = pathname?.includes("/admin/login");

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-porcelain font-sans text-midnight">
            {/* 1. Top Navigation (Logo + Public Links) */}
            <AdminTopNav />

            {/* Main Wrapper */}
            <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">

                {/* 2. Admin Header Title & Logout */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-midnight text-transparent bg-clip-text bg-gradient-to-r from-signature-start to-signature-end">
                            Admin Dashboard
                        </h1>
                        <p className="text-subtext mt-1">Manage all site content from here</p>
                    </div>

                    <LogoutButton />
                </div>

                {/* 3. Secondary Navigation (Tabs) */}
                <div className="mb-8 sticky top-20 z-40 bg-porcelain/80 backdrop-blur-sm py-2 -mx-4 px-4 md:mx-0 md:px-0">
                    <AdminSecondaryNav />
                </div>

                {/* 4. Page Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {children}
                </div>
            </main>
        </div>
    );
}
