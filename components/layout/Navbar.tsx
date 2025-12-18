'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-12'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area - Width matches CTA area for perfect centering */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="group flex items-center gap-3 cursor-pointer select-none">
                        <div className="w-10 h-10 rounded-full bg-midnight flex items-center justify-center text-white font-serif text-xl shadow-lg transition-transform duration-500 group-hover:scale-105 relative overflow-hidden z-20 shrink-0">
                            <span className="relative z-10">T</span>
                        </div>
                        <div className="relative overflow-hidden transition-all duration-300 ease-in-out max-w-full opacity-100 md:max-w-0 md:opacity-0 md:group-hover:max-w-[140px] md:group-hover:opacity-100">
                            <span className="text-xl font-serif font-medium tracking-tight text-midnight whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-signature-end group-hover:to-signature-end transition-all duration-300">
                                TagVerse
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Centered Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 tracking-wide relative group ${pathname === link.href ? 'text-midnight' : 'text-subtext hover:text-midnight'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-signature-start to-signature-end transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
                        </Link>
                    ))}
                </div>

                {/* Right Area (CTA) - Empty to maintain center balance */}
                <div className="hidden md:flex flex-1 justify-end">
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-midnight"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-porcelain/95 backdrop-blur-xl p-8 flex flex-col space-y-6 md:hidden animate-in slide-in-from-top-4 duration-300 border-t border-subtext/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-light text-midnight py-4 border-b border-subtext/10"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>
            )}
        </nav>
    );
};

export default Navbar;
