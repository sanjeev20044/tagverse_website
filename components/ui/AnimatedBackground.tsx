'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-porcelain">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-porcelain to-white opacity-90" />

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-signature-start/10 rounded-full blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-signature-end/10 rounded-full blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
            <motion.div
                className="absolute top-[20%] right-[20%] w-[25vw] h-[25vw] bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, -50, 50, 0],
                    y: [0, -70, 70, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />
            <motion.div
                className="absolute bottom-[20%] left-[20%] w-[30vw] h-[30vw] bg-blue-100/30 rounded-full blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, 70, -70, 0],
                    y: [0, 100, -100, 0],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Overlay Mesh Pattern (Optional to give texture) */}
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-[0.02] mix-blend-overlay" />
        </div>
    );
};

export default AnimatedBackground;
