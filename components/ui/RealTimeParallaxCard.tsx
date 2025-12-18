'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface RealTimeParallaxCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    stats?: { label: string; value: string }[];
    features?: string[];
    className?: string;
}

const RealTimeParallaxCard = ({ title, description, icon: Icon, stats, features, className = '' }: RealTimeParallaxCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative h-full w-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-signature-start/20 group ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                {/* Internal Layer - Icon & Title */}
                <div
                    style={{ transform: "translateZ(50px)" }}
                    className="flex flex-col items-center justify-center p-6 text-center h-full w-full"
                >
                    <div className="w-16 h-16 rounded-2xl bg-porcelain group-hover:bg-midnight group-hover:text-white transition-all duration-500 flex items-center justify-center text-midnight shadow-sm mb-6">
                        <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-serif text-midnight mb-4">{title}</h3>
                    <p className="text-subtext font-light text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {description}
                    </p>

                    {/* Hidden Details Revealed on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 w-full">
                        {stats && (
                            <div className="grid grid-cols-2 gap-4 mb-4 border-t border-subtext/10 pt-4">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-signature-start font-bold text-lg">{stat.value}</div>
                                        <div className="text-xs text-subtext uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {features && (
                            <div className="flex flex-wrap gap-2 justify-center">
                                {features.slice(0, 3).map((feat, idx) => (
                                    <span key={idx} className="text-xs font-medium bg-porcelain text-midnight px-2 py-1 rounded-md">
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Background Gradient Effect */}
            <div
                style={{
                    transform: "translateZ(20px)",
                }}
                className="absolute inset-0 bg-gradient-to-br from-signature-start/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />
        </motion.div>
    );
};

export default RealTimeParallaxCard;
