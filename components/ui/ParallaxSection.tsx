'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // 0 = no movement, 1 = normal scroll, >1 = faster, <1 = slower (parallax) typically -0.5 to 0.5 for subtle effect
}

const ParallaxSection = ({ children, className = '', speed = 0.5 }: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Map scroll progress (0 to 1) to a Y translation
    // If speed is positive, element moves SLOWER than scroll (appears further away)
    // If speed is negative, element moves FASTER than scroll
    const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 10}%`]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export default ParallaxSection;
