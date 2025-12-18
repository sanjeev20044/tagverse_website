'use client';

import React, { useEffect, useRef } from 'react';

interface ParallaxVideoProps {
    src: string;
    className?: string;
}

const ParallaxVideo = ({ src, className = "" }: ParallaxVideoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !videoRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only animate when visible/near viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate relative position (-1 to 1 range approx)
                const relativePos = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;

                // Parallax strength (move video opposite to scroll)
                const offset = relativePos * 40; // 40px movement

                videoRef.current.style.transform = `translateY(${offset}px) scale(1.15)`; // Scale needed to cover edges
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden group ${className}`}>
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover filter saturate-[1.2] opacity-90 transition-transform duration-100 ease-out will-change-transform"
                style={{ transform: 'scale(1.15)' }} // Initial scale
            >
                <source src={src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay" />
        </div>
    );
};

export default ParallaxVideo;
