'use client';

import Link from 'next/link';

const AdminTopNav = () => {
    const publicLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav className="w-full bg-white border-b border-black/5 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
            {/* Logo */}
            <Link href="/admin/home" className="flex items-center gap-2 group">
                <span className="text-2xl font-serif font-bold text-midnight tracking-tight group-hover:opacity-80 transition-opacity">
                    TagVerse<span className="text-signature-start">.</span>
                </span>
            </Link>

            {/* Public Links - Restored on the right side */}
            <div className="hidden md:flex items-center gap-8">
                {publicLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        className="text-sm font-medium text-gray-500 hover:text-signature-start transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default AdminTopNav;
