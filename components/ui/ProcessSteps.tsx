'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

interface ProcessStep {
    title: string;
    desc: string;
}

interface ProcessStepsProps {
    steps: ProcessStep[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
    return (
        <div className="relative">
            {/* Central Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-signature-start/30 to-transparent transform md:-translate-x-1/2" />

            <div className="space-y-12">
                {steps.map((step, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={idx} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 relative`}>

                            {/* Dot on Line */}
                            <motion.div
                                className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-signature-end border-4 border-white transform -translate-x-1/2 z-10"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            />

                            {/* Text Content */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                <FadeIn delay={idx * 200} direction={isEven ? "right" : "left"}>
                                    <div className={`p-6 bg-white rounded-2xl border border-subtext/10 shadow-lg hover:shadow-xl transition-shadow ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                                        <span className="text-signature-start font-bold text-sm tracking-widest uppercase mb-2 block">Step {idx + 1}</span>
                                        <h3 className="text-xl font-serif text-midnight mb-2">{step.title}</h3>
                                        <p className="text-subtext font-light text-sm">{step.desc}</p>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Empty side for layout balance */}
                            <div className="hidden md:block w-1/2" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProcessSteps;
