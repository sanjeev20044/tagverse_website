'use client';

import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    blur?: string;    // e.g., "10px"
    staggerChildren?: number;
    ease?: any; // Custom bezier array e.g. [0.22, 1, 0.36, 1]
    fullWidth?: boolean;
}

const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    direction = 'up',
    distance = 40,
    blur = "5px",
    staggerChildren = 0,
    ease = [0.25, 0.1, 0.25, 1], // Even smoother cubic-bezier
    fullWidth = false,
    ...props
}, ref) => {

    const getInitialVariants = (dir: string, dist: number, blurVal: string) => {
        const base = { opacity: 0, filter: `blur(1px)` };
        switch (dir) {
            case 'up': return { ...base, y: dist };
            case 'down': return { ...base, y: -dist };
            case 'left': return { ...base, x: dist };
            case 'right': return { ...base, x: -dist };
            case 'none': return { ...base };
            default: return { ...base, y: dist };
        }
    };

    const variants: Variants = {
        hidden: getInitialVariants(direction, distance, blur),
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration,
                ease: ease,
                delay: delay / 800,
                when: "beforeChildren", // ensure stagger works if needed
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} // Trigger when 10% visible
            variants={variants}
            className={`relative ${className} ${fullWidth ? 'w-full' : ''}`}
            {...props}
        >
            {children}
        </motion.div>
    );
});

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;
