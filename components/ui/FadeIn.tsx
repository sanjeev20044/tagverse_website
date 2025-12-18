'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    fullWidth?: boolean;
}

const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(({
    children,
    delay = 0,
    className = "",
    direction = 'up',
    duration = 0.8,
    fullWidth = false,
    ...props
}, ref) => {

    const getInitialVariants = (dir: string) => {
        switch (dir) {
            case 'up': return { opacity: 0, y: 40 };
            case 'down': return { opacity: 0, y: -40 };
            case 'left': return { opacity: 0, x: 40 };
            case 'right': return { opacity: 0, x: -40 };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: 40 };
        }
    };

    const variants = {
        hidden: getInitialVariants(direction),
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                ease: "easeInOut",
                delay: delay / 1000,
                staggerChildren: 0.1
            } as any
        }
    };

    return (
        <motion.div
            ref={ref as React.Ref<HTMLDivElement>}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={`${className} ${fullWidth ? 'w-full' : ''}`}
            {...props}
        >
            {children}
        </motion.div>
    );
});

FadeIn.displayName = 'FadeIn';

export default FadeIn;
