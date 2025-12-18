'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Brain, Globe, ShieldCheck, Zap, Code2, Layers } from 'lucide-react';
import ParallaxSection from '@/components/ui/ParallaxSection';
import TextReveal from '@/components/ui/TextReveal';

import RealTimeParallaxCard from '@/components/ui/RealTimeParallaxCard';
import ProcessSteps from '@/components/ui/ProcessSteps';

export default function ServicesPage() {
    const services = [
        {
            id: "item-1",
            icon: Brain,
            title: "Custom GPT-Based AI Agents",
            desc: "Advanced GPT AI agents for intelligent automation, predictive analytics, and enterprise workflow optimization.",
            features: ["LLM Fine-tuning", "RAG Integration", "Multi-Agent Systems"],
            stats: [{ label: "Efficiency", value: "+40%" }, { label: "Accuracy", value: "99.9%" }]
        },
        {
            id: "item-2",
            icon: Zap,
            title: "AI Automation Services",
            desc: "Custom AI automation systems streamlining business operations with AI-powered precision.",
            features: ["Workflow Autopilot", "Zero-Touch Ops", "CRM Sync"],
            stats: [{ label: "Time Saved", value: "20hrs/wk" }, { label: "ROI", value: "3x" }]
        },
        {
            id: "item-3",
            icon: Code2,
            title: "AI SaaS Development",
            desc: "Building scalable AI SaaS platforms, websites, and apps with design-led engineering.",
            features: ["Scalable Arch", "Modern Stack", "AI Native"],
            stats: [{ label: "Speed", value: "2x" }, { label: "Uptime", value: "99.99%" }]
        },
        {
            id: "item-4",
            icon: Globe,
            title: "AI Marketing & E-commerce",
            desc: "AI-powered digital marketing automation and systems for e-commerce scaling.",
            features: ["Personalization", "Auto-Campaigns", "Data Insights"],
            stats: [{ label: "Conv. Rate", value: "+25%" }, { label: "Growth", value: "Rapid" }]
        },
        {
            id: "item-5",
            icon: ShieldCheck,
            title: "AI Chatbots for Business",
            desc: "Enterprise AI chatbots for customer support, sales, and seamless interactions.",
            features: ["24/7 Support", "Natural NLP", "Sentiment Analysis"],
            stats: [{ label: "Response", value: "<1s" }, { label: "Satisfaction", value: "4.9/5" }]
        }
    ];

    const processSteps = [
        { title: "Discovery & Strategy", desc: "We align with your vision, analyzing your operational bottlenecks to identify high-impact AI opportunities." },
        { title: "Architecture & Design", desc: "Our engineers architect a bespoke solution, prioritizing scalability, security, and elegant user experience." },
        { title: "Intelligent Development", desc: "We build using cutting-edge models (GPT-4o, Claude) and robust frameworks, ensuring precision in every line of code." },
        { title: "Deployment & Optimization", desc: "Seamless integration into your ecosystem, followed by continuous refinement to maximize ROI." }
    ];

    return (
        <div className="relative min-h-screen bg-white text-midnight pb-20 overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/assets/services-bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay to ensure readability but provide more intensity */}
            <div className="absolute inset-0 bg-white/70 z-[1]" />

            {/* Content Wrapper */}
            <div className="relative z-10">
                {/* Hero */}
                <section className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
                    <ParallaxSection speed={-0.1}>
                        <FadeIn>
                            <h1 className="text-5xl md:text-6xl font-serif text-midnight mb-8 tracking-tight">
                                <TextReveal text="AI Solutions &" mode="word" /> <span className="text-signature-end italic"><TextReveal text="Automation Services" mode="word" delay={300} /></span>
                            </h1>
                        </FadeIn>
                    </ParallaxSection>
                </section>

                {/* Service Listings */}
                <section className="px-6 max-w-6xl mx-auto pb-12">
                    <FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <ParallaxSection key={idx} speed={idx * 0.05} className="h-[400px]">
                                    <RealTimeParallaxCard
                                        title={service.title}
                                        description={service.desc}
                                        icon={service.icon}
                                        stats={service.stats}
                                        features={service.features}
                                        className="h-full"
                                    />
                                </ParallaxSection>
                            ))}
                        </div>
                    </FadeIn>
                </section>

                {/* Process Section - New */}
                <section className="py-16 bg-white relative">
                    <div className="max-w-4xl mx-auto px-6">
                        <FadeIn>
                            <h2 className="text-4xl font-serif text-midnight mb-16 text-center">Our Methodology</h2>
                        </FadeIn>
                        <ProcessSteps steps={processSteps} />
                    </div>
                </section>

                {/* Integration Section */}
                <section className="py-12 bg-white/50 border-t border-white mt-8">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-4xl font-serif text-midnight mb-6">Seamless Integration</h2>
                            <p className="text-subtext font-light text-lg mb-8 leading-relaxed">
                                Seamless AI integration into your enterprise infrastructure.
                            </p>
                            <Link href="/contact">
                                <Button>Request Demo</Button>
                            </Link>
                        </FadeIn>
                        <FadeIn delay={200}>
                            {/* Integration Benefits List */}
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-xl font-light text-midnight">
                                    <div className="w-8 h-8 rounded-full bg-signature-start/10 flex items-center justify-center text-signature-end">
                                        <Zap size={18} strokeWidth={2} />
                                    </div>
                                    Seamless API Connectivity
                                </li>
                                <li className="flex items-center gap-4 text-xl font-light text-midnight">
                                    <div className="w-8 h-8 rounded-full bg-signature-start/10 flex items-center justify-center text-signature-end">
                                        <Zap size={18} strokeWidth={2} />
                                    </div>
                                    Real-time Data Synchronization
                                </li>
                                <li className="flex items-center gap-4 text-xl font-light text-midnight">
                                    <div className="w-8 h-8 rounded-full bg-signature-start/10 flex items-center justify-center text-signature-end">
                                        <ShieldCheck size={18} strokeWidth={2} />
                                    </div>
                                    Enterprise-Grade Security Protocols
                                </li>
                                <li className="flex items-center gap-4 text-xl font-light text-midnight">
                                    <div className="w-8 h-8 rounded-full bg-signature-start/10 flex items-center justify-center text-signature-end">
                                        <Layers size={18} strokeWidth={2} />
                                    </div>
                                    Scalable Cloud Architecture
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </div>
    );
}
