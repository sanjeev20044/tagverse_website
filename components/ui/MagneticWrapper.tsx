'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface MagneticWrapperProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How strong the pull is (default 0.5)
}

const MagneticWrapper = ({ children, className = '', strength = 0.5 }: MagneticWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const position = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    const smoothPosition = {
        x: useSpring(position.x, { stiffness: 150, damping: 15, mass: 0.1 }),
        y: useSpring(position.y, { stiffness: 150, damping: 15, mass: 0.1 })
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();

        // Calculate center
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Distance from center
        const x = clientX - centerX;
        const y = clientY - centerY;

        // Move element slightly towards cursor
        position.x.set(x * strength);
        position.y.set(y * strength);
    };

    const handleMouseLeave = () => {
        position.x.set(0);
        position.y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: smoothPosition.x, y: smoothPosition.y }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MagneticWrapper;
