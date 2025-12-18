'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import PerspectiveCard from '@/components/ui/PerspectiveCard';
import TextReveal from '@/components/ui/TextReveal';
import ParallaxSection from '@/components/ui/ParallaxSection';

export default function PortfolioPage() {
    const projects = [
        { title: "FinTech AI Automation", category: "Agents & Automation", image: "/assets/fintech-bg.jpg" },
        { title: "Healthcare Intelligent Systems", category: "AI-Powered Solutions", image: "/assets/health-bg.jpg" },
        { title: "E-commerce Scaling Platform", category: "AI Marketing & SaaS", image: "/assets/ecom-bg.jpg" },
        { title: "Predictive Analytics Engine", category: "Data Intelligence", image: "/assets/data-bg.jpg" },
        { title: "Retail Intelligence Suite", category: "Industry Solution", image: "/assets/industry-bg.jpg" },
        { title: "Secure Banking Infrastructure", category: "AI Powered Security", image: "/assets/secutity-bg.jpg" },
    ];

    return (
        <div className="bg-porcelain text-midnight pb-12 overflow-hidden">
            <section className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
                <ParallaxSection speed={-0.1}>
                    <FadeIn>
                        <h1 className="text-5xl md:text-6xl font-serif text-midnight mb-8 tracking-tight">
                            <TextReveal text="Proven Excellence in" mode="word" />
                            <br />
                            <span className="text-signature-end italic">
                                <TextReveal text="AI Solutions & Automation" mode="word" delay={300} />
                            </span>
                        </h1>
                    </FadeIn>
                </ParallaxSection>
            </section>

            <section className="px-6 max-w-6xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Updated with richer data */}
                    {[
                        { title: "FinTech AI Automation", category: "Agents & Automation", image: "/assets/fintech-bg.jpg", result: "40% Efficiency Boost" },
                        { title: "Healthcare Intelligent Systems", category: "AI-Powered Solutions", image: "/assets/health-bg.jpg", result: "99% Data Accuracy" },
                        { title: "E-commerce Scaling Platform", category: "AI Marketing & SaaS", image: "/assets/ecom-bg.jpg", result: "2.5x Revenue Growth" },
                        { title: "Predictive Analytics Engine", category: "Data Intelligence", image: "/assets/data-bg.jpg", result: "Real-time Forecasting" },
                        { title: "Retail Intelligence Suite", category: "Industry Solution", image: "/assets/industry-bg.jpg", result: "Omnichannel Unity" },
                        { title: "Secure Banking Infrastructure", category: "AI Powered Security", image: "/assets/secutity-bg.jpg", result: "Zero Breach Record" },
                    ].map((project, idx) => (
                        <ParallaxSection key={idx} speed={idx % 3 * 0.05}>
                            <FadeIn delay={idx * 100}>
                                <PerspectiveCard className="rounded-2xl h-full shadow-lg hover:shadow-2xl">
                                    <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-midnight border border-white/10 h-full w-full">
                                        {/* Background Image */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                                        />

                                        {/* Overlay Gradient - Premium & Classy */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out transform-style-3d">
                                            <div className="h-0.5 w-12 bg-signature-start mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                                            <p className="text-signature-start text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-90 group-hover:opacity-100 transition-opacity translate-z-10">{project.category}</p>
                                            <h3 className="text-white text-2xl font-serif tracking-wide group-hover:text-white transition-colors duration-500 translate-z-20 mb-2">{project.title}</h3>

                                            {/* Revealed Metric */}
                                            <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-700 ease-in-out">
                                                <p className="text-white/80 font-light text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                                    Impact: <span className="text-white font-medium">{project.result}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </PerspectiveCard>
                            </FadeIn>
                        </ParallaxSection>
                    ))}
                </div>
            </section>

            <section className="py-12 text-center bg-white relative z-10">
                <ParallaxSection speed={0.05}>
                    <FadeIn>
                        <h2 className="text-3xl font-serif mb-6">Ready to build your success story?</h2>
                        <Link href="/contact">
                            <Button>Connect for Custom Solutions</Button>
                        </Link>
                    </FadeIn>
                </ParallaxSection>
            </section>
        </div>
    );
}
