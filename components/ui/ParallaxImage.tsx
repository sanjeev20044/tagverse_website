'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number; // Scale of movement
}

const ParallaxImage = ({ src, alt, className = '', speed = 0.2 }: ParallaxImageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Image moves faster/slower than container to create window effect
    // We'll translate the image slightly on Y axis
    const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* We need a wrapper to handle the movement without affecting layout */}
            <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
                {/* Using a standard img or next/image. 
                 Since this is a simple implementation, standard img with object-cover is flexible. 
                 But user has next/image available. Let's stick to simple video/div for now if src is not an Next image object 
                 Wait, the user uses video backgrounds mostly. But for standard images:
             */}
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Overlay Content Support - Children can be added if needed, but for now just image */}
        </div>
    );
};

export default ParallaxImage;
