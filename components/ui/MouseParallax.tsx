'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MouseParallaxProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How much the element moves relative to mouse (e.g., 0.05)
}

const MouseParallax = ({ children, className = '', strength = 0.05 }: MouseParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    // Transform mouse position to element movement
    // if strength is 0.1 and screen is 1000px wide, max move is 50px
    const x = useTransform(smoothX, (value) => (value - 0.5) * strength * 1000);
    const y = useTransform(smoothY, (value) => (value - 0.5) * strength * 1000);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position from 0 to 1
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth);
            mouseY.set(e.clientY / innerHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div ref={ref} style={{ x, y }} className={className}>
            {children}
        </motion.div>
    );
};

export default MouseParallax;
