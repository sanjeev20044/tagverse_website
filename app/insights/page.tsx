'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function InsightsPage() {
    return (
        <div className="min-h-screen bg-white text-midnight flex flex-col relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-porcelain via-white to-white z-0 pointer-events-none" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex-grow flex items-center justify-center pt-28 pb-20 px-6">
                <div className="w-full max-w-2xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-serif text-midnight mb-4 tracking-tight">
                                Your Vision. <span className="text-signature-end italic">Our Insight.</span>
                            </h1>
                            <p className="text-lg text-subtext font-light max-w-lg mx-auto leading-relaxed">
                                Share your perspective. Help us architect the future of intelligence tailored to your needs.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl shadow-midnight/5 relative overflow-hidden group">
                            {/* Subtle inner gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent opacity-80 pointer-events-none" />

                            <form className="space-y-8 relative z-10">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Name</label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                            className="bg-porcelain/50 border-subtext/10 focus:border-signature-start/50 h-12 rounded-xl transition-all duration-300 hover:border-signature-start/30 focus:bg-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="bg-porcelain/50 border-subtext/10 focus:border-signature-start/50 h-12 rounded-xl transition-all duration-300 hover:border-signature-start/30 focus:bg-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="feedback" className="text-sm font-medium text-midnight font-serif tracking-wide ml-1">Your Perspective</label>
                                        <Textarea
                                            id="feedback"
                                            placeholder="Tell us about your needs, challenges, or vision..."
                                            className="bg-porcelain/50 border-subtext/10 focus:border-signature-start/50 min-h-[160px] rounded-xl resize-none transition-all duration-300 hover:border-signature-start/30 focus:bg-white leading-relaxed"
                                        />
                                    </div>
                                </div>

                                <Button className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-midnight text-white hover:bg-signature-start mt-4">
                                    Share Insight
                                </Button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
