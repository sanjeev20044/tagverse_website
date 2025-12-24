'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    Users,
    BarChart3,
    Phone,
    MessageSquare,
    LayoutTemplate
} from 'lucide-react';

const AdminSecondaryNav = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/admin/home', icon: Home },
        { name: 'About', href: '/admin/about', icon: Users },
        { name: 'Trust Stats', href: '/admin/trust-stats', icon: BarChart3 },
        { name: 'Contact', href: '/admin/contact', icon: Phone },
        { name: 'Enquiries', href: '/admin/enquiries', icon: MessageSquare },
        { name: 'Footer', href: '/admin/footer', icon: LayoutTemplate },
    ];

    return (
        <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 min-w-max bg-white p-1 rounded-xl border border-black/5 shadow-sm">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                                flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                                ${isActive
                                    ? 'bg-signature-start text-white shadow-md'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-midnight'
                                }
                            `}
                        >
                            <Icon size={16} className={isActive ? 'stroke-white' : 'stroke-current'} />
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AdminSecondaryNav;
