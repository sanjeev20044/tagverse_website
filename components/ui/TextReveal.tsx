'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number; // Initial delay
    stagger?: number; // Delay between characters/words
    mode?: 'word' | 'char';
}

const TextReveal = ({ text, className = '', delay = 0, stagger = 0.05, mode = 'word' }: TextRevealProps) => {
    // Split text based on mode
    const items = mode === 'word' ? text.split(" ") : text.split("");

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay / 1000
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        }
    };

    return (
        <motion.span
            className={`inline-block whitespace-pre-wrap ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }} // trigger a bit earlier
        >
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <motion.span variants={itemVariants} className="inline-block">
                        {item}
                    </motion.span>
                    {mode === 'word' && index !== items.length - 1 && <span>&nbsp;</span>}
                </React.Fragment>
            ))}
        </motion.span>
    );
};

export default TextReveal;
