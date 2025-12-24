'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, X, Facebook } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Reduced motion check
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReduced && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.removeAttribute('autoplay');
            return;
        }

        // Lazy load logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.preload = 'auto';
                    videoRef.current.play().catch(() => { });
                    observer.disconnect();
                }
            });
        }, { rootMargin: '200px' });

        if (videoRef.current) {
            observer.observe(videoRef.current.parentElement!);
        }

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { icon: <Linkedin size={18} />, href: '#', key: 'li' },
        { icon: <Facebook size={18} />, href: 'https://m.facebook.com/61584759519825/', key: 'fb' },
        { icon: <Instagram size={18} />, href: '#', key: 'in' },
    ];

    // Hide public footer on all admin routes
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className="relative overflow-hidden bg-[#0b0f1a] text-[#E8EAF6] mt-auto">
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none h-full w-full" aria-hidden="true">
                <video
                    ref={videoRef}
                    id="footer-anim"
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover object-center transform filter brightness-[0.9] saturate-[1.25]"
                >
                    <source src="/assets/footer-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/40 to-transparent mix-blend-multiply opacity-60" />
            </div>

            {/* Footer Content */}
            <div className="relative z-20 max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 footer-grid">
                    <ScrollReveal className="col-span-1 md:col-span-1 footer-col" delay={0}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white font-serif text-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">T</div>
                            <span className="text-xl font-serif text-white tracking-tight">TagVerse</span>
                        </div>
                        <p className="text-white/60 text-sm leading-loose font-light">
                            TagVerse: An enterprise solutions provider of rare intelligence and vision. Wielding the power of AI with masterful restraint.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal className="col-span-1 footer-col" delay={100}>
                        <h4 className="font-semibold text-white mb-8 tracking-widest text-[10px] uppercase opacity-80">Explore</h4>
                        <ul className="space-y-4 text-sm text-white/50 font-light">
                            {['About', 'Services', 'Portfolio', 'Insights'].map(item => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300 relative group inline-block footer-link">
                                        {item}
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal className="col-span-1 footer-col" delay={200}>
                        <h4 className="font-semibold text-white mb-8 tracking-widest text-[10px] uppercase opacity-80">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/50 font-light">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                                <li key={item}><Link href="#" className="hover:text-white transition-colors duration-300">{item}</Link></li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal className="col-span-1 footer-col" delay={300}>
                        <h4 className="font-semibold text-white mb-8 tracking-widest text-[10px] uppercase opacity-80">Connect</h4>
                        <div className="text-sm text-white/50 font-light mb-4 hover:text-white transition-colors cursor-pointer">Tagverse.io@gmail.com </div>
                        <div className="text-sm text-white/50 font-light mb-8">+91 99419 68238</div>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.key}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all duration-500 cursor-pointer flex items-center justify-center text-white/40 backdrop-blur-sm"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 footer-bottom">
                    <p className="text-xs text-white/30 font-light tracking-wide">© 2025 tagverse.io. All rights reserved.</p>
                    <p className="text-xs text-white/30 font-light tracking-wide">Designed with silence and precision.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
