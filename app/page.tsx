'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Brain, Layers, ShieldCheck, Zap, Code2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/ui/FadeIn';
import ParallaxVideo from '@/components/ui/ParallaxVideo';
import ParallaxSection from '@/components/ui/ParallaxSection';
import MouseParallax from '@/components/ui/MouseParallax';
import ParallaxImage from '@/components/ui/ParallaxImage';
import TextReveal from '@/components/ui/TextReveal';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import AnimatedBackground from '@/components/ui/AnimatedBackground';


const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-12 overflow-hidden">
      {/* Background Video - Expanded to Hero Dimensions */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/home.bg.mp4" type="video/mp4" />
      </video>

      {/* Added Overlay to mute video intensity */}
      <div className="absolute inset-0 bg-white/60 z-[0]" />

      {/* Soft Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-porcelain/50 to-porcelain pointer-events-none z-[1]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-5xl">
          <ParallaxSection speed={-0.2}>
            <MouseParallax strength={0.02}>
              <div className="mb-8">
                {/* Replaced FadeIn H1 with TextReveal for word-by-word entry */}
                <h1 className="text-6xl md:text-7xl font-serif font-medium tracking-tight text-midnight leading-[1.05]">
                  <TextReveal text="AI Solutions & Automation" delay={200} /> <br />
                  <span className="text-subtext font-light italic pr-4 font-sans text-5xl md:text-6xl inline-block transform translate-y-[-8px]">with</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-signature-start to-signature-end">
                    <TextReveal text="poise & precision." delay={800} mode="char" stagger={0.03} />
                  </span>
                </h1>
              </div>
            </MouseParallax>
          </ParallaxSection>

          <ParallaxSection speed={0.1}>
            <MouseParallax strength={0.01}>
              <FadeIn delay={1200} duration={1}>
                <p className="text-xl md:text-2xl text-subtext leading-relaxed max-w-2xl mb-10 font-light tracking-wide">
                  TagVerse is a premier AI Solutions & Automation Agency helping businesses scale with custom AI automation systems, GPT-based AI agents, AI chatbots, SaaS platforms, and AI marketing automation.
                </p>
              </FadeIn>
            </MouseParallax>
          </ParallaxSection>

          <ParallaxSection speed={0.2}>
            <FadeIn delay={1500} direction="up">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link href="/contact">
                  <MagneticWrapper strength={0.3}>
                    <Button variant="default" size="default" icon>Start Transformation</Button>
                  </MagneticWrapper>
                </Link>
                <Link href="/services">
                  <MagneticWrapper strength={0.3}>
                    <Button variant="outline" size="default">View Capabilities</Button>
                  </MagneticWrapper>
                </Link>
              </div>
            </FadeIn>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

const WhatIsTagVerse = () => (
  <section className="py-16 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ParallaxSection speed={0.05}>
          <FadeIn direction="right" duration={0.8}>
            <h2 className="text-5xl font-serif text-midnight mb-8 leading-tight">
              AI-Powered Business Solutions, <span className="italic text-signature-end">Manifested.</span>
            </h2>
            <div className="space-y-6 text-lg text-subtext font-light leading-relaxed">
              <p>
                As a leading AI Solutions & Automation Agency, we architect intelligent automation services where AI-powered precision meets elegant design.
              </p>
              <p>
                We deliver custom GPT AI agents, AI chatbots for enterprises, AI SaaS development, and AI marketing automation systems that transform workflows with composure and clarity.
              </p>
            </div>
          </FadeIn>
        </ParallaxSection>

        <ParallaxSection speed={-0.1} className="flex justify-center md:justify-end">
          <FadeIn delay={200} direction="left" duration={1}>
            {/* Abstract AI Video Background - Wrapped in MouseParallax for subtle interactivity */}
            <MouseParallax strength={0.03}>
              <ParallaxVideo
                src="/assets/intel-bg.mp4"
                className="w-full aspect-square max-w-md rounded-full border border-signature-start/10 flex items-center justify-center shadow-2xl shadow-signature-start/5"
              />
            </MouseParallax>
          </FadeIn>
        </ParallaxSection>
      </div>
    </div>
  </section>
);

const CapabilitiesTeaser = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Custom GPT AI Agents",
      desc: "Deploy intelligent agents that autonomously handle complex workflows. Our custom architecture ensures predictive accuracy and seamless integration with your existing data systems."
    },
    {
      icon: Zap,
      title: "AI Automation Services",
      desc: "Revolutionize your operational efficiency with end-to-end automation. We streamline repetitive processes, allowing your team to focus on strategic growth and innovation."
    },
    {
      icon: Globe,
      title: "AI SaaS & Marketing Automation",
      desc: "Scale your digital presence with powerful, AI-driven marketing engines. Drive e-commerce growth through personalized customer experiences and automated campaign management."
    },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <ParallaxSection speed={0}>
            <FadeIn>
              <h2 className="text-4xl font-serif text-midnight">Core Capabilities</h2>
            </FadeIn>
          </ParallaxSection>
          <ParallaxSection speed={0}>
            <FadeIn delay={100} direction="left">
              <Link href="/services">
                <Button variant="text" size="sm" icon>View All Services</Button>
              </Link>
            </FadeIn>
          </ParallaxSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <ParallaxSection key={idx} speed={idx * 0.05} className="h-full">
              <MouseParallax strength={0.05} className="h-full">
                <FadeIn delay={idx * 150} className="h-full">
                  <div className="group p-10 bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 hover:border-signature-start/30 transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-signature-start/5 via-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="w-14 h-14 rounded-2xl bg-porcelain flex items-center justify-center mb-8 group-hover:bg-midnight group-hover:text-white transition-all duration-500 relative z-10 group-hover:scale-110 shadow-sm group-hover:shadow-md">
                      <cap.icon className="w-7 h-7 text-subtext group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-serif text-midnight mb-4 relative z-10">{cap.title}</h3>
                    <p className="text-subtext font-light text-base leading-relaxed relative z-10 mb-8 flex-grow">{cap.desc}</p>

                    <div className="relative z-10 flex items-center text-signature-start font-medium text-sm overflow-hidden">
                      <span className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                        Explore Solution <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </MouseParallax>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamIntro = () => (
  <section className="py-16 overflow-hidden relative z-10">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <ParallaxSection speed={0.1}>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-midnight mb-6">Meet the Visionaries</h2>
            <p className="text-xl text-subtext font-light">
              Our team blends AI expertise with strategic foresight, committed to crafting solutions that redefine the world of AI.
            </p>
          </div>
        </FadeIn>
      </ParallaxSection>

      <ParallaxSection speed={-0.1}>
        <FadeIn delay={200} fullWidth>
          {/* Replaced Static Image Div with ParallaxImage for window effect */}
          <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-midnight/5 group">
            {/* Using a placeholder image for now, but enabling the parallax effect */}
            <ParallaxImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
              alt="TagVerse Team"
              speed={0.15}
              className="absolute inset-0 w-full h-full"
            />

            {/* Overlay Content remains on top */}
            <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/40 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white text-3xl font-serif mb-2">The Collective</h3>
                  <p className="text-white/80 font-light text-base">Designers, Engineers, Strategists</p>
                </div>
                <Link href="/about">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-midnight transition-all text-white cursor-pointer group-hover:scale-110 duration-500">
                    <ArrowUpRight size={24} strokeWidth={1.5} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </ParallaxSection>
    </div>
  </section>
);

const ClosingCTA = () => (
  <section className="py-20 relative overflow-hidden z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/80 to-transparent pointer-events-none" />
    <div className="max-w-4xl mx-auto px-9 relative z-10 text-center">
      <ParallaxSection speed={0}>
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-serif text-midnight mb-8 tracking-tight">
            Scale Your Business <span className="text-signature-end italic">with AI.</span>
          </h2>
          <p className="text-2xl text-subtext font-light mb-12 max-w-2xl mx-auto">
            Ready to architect a future of your business? Let&apos;s discuss your vision.
          </p>
          <Link href="/contact">
            <MagneticWrapper strength={0.4}>
              <Button size="lg" className="h-20 px-16 text-xl rounded-full shadow-2xl shadow-signature-start/30 hover:scale-105 transition-transform">
                Schedule Consultation
              </Button>
            </MagneticWrapper>
          </Link>
        </FadeIn>
      </ParallaxSection>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Hero />
      <WhatIsTagVerse />
      <CapabilitiesTeaser />
      <TeamIntro />
      <ClosingCTA />
    </main>
  );
}
