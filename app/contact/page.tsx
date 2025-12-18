'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-white text-midnight pb-12 overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/50 z-[1]" />

            {/* Content Wrapper */}
            <div className="relative z-10">
                <section className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
                    <FadeIn>
                        <h1 className="text-5xl md:text-6xl font-serif text-midnight mb-6 tracking-tight">
                            Connect with <span className="text-signature-end italic">Vision.</span>
                        </h1>
                        <p className="text-xl text-subtext font-light max-w-2xl leading-relaxed">
                            Ready to transform your enterprise? Our team is ready to listen.
                        </p>
                    </FadeIn>
                </section>

                <section className="px-6 max-w-6xl mx-auto">
                    {/* Centered Form Container */}
                    <div className="max-w-xl mx-auto">
                        {/* Form */}
                        <FadeIn delay={200}>
                            <div className="bg-porcelain/80 backdrop-blur-xl p-12 rounded-[2rem] border border-subtext/10 shadow-xl shadow-midnight/5 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50" />

                                {/* Unique Parallax Floating Elements inside card */}
                                <motion.div
                                    className="absolute top-10 right-10 w-20 h-20 bg-signature-start/10 rounded-full blur-xl pointer-events-none"
                                    animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute bottom-10 left-10 w-32 h-32 bg-signature-end/5 rounded-full blur-2xl pointer-events-none"
                                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                />

                                <form className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-midnight font-serif tracking-wide">First Name</label>
                                            <Input className="bg-white border-subtext/10 focus:border-signature-start/50 h-12 rounded-xl transition-all duration-300 hover:border-signature-start/30" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-midnight font-serif tracking-wide">Last Name</label>
                                            <Input className="bg-white border-subtext/10 focus:border-signature-start/50 h-12 rounded-xl transition-all duration-300 hover:border-signature-start/30" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-midnight font-serif tracking-wide">Email</label>
                                        <Input type="email" className="bg-white border-subtext/10 focus:border-signature-start/50 h-12 rounded-xl transition-all duration-300 hover:border-signature-start/30" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-midnight font-serif tracking-wide">Message</label>
                                        <Textarea placeholder="Tell us about your vision..." className="bg-white border-subtext/10 focus:border-signature-start/50 min-h-[150px] rounded-xl resize-none transition-all duration-300 hover:border-signature-start/30" />
                                    </div>
                                    <Button className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-midnight text-white hover:bg-signature-start relative overflow-hidden">
                                        <span className="relative z-10">Send Message</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-signature-start to-signature-end opacity-0 hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </Button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </div>
    );
}
