'use client';

import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const blob1Ref = useRef<SVGEllipseElement>(null);
    const blob2Ref = useRef<SVGEllipseElement>(null);
    const blob3Ref = useRef<SVGEllipseElement>(null);

    useEffect(() => {
        // Reduced motion check
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const blobEls = [blob1Ref.current, blob2Ref.current, blob3Ref.current];
        if (blobEls.some((el) => !el)) return;

        // Animation parameters
        const params = blobEls.map((el, i) => ({
            el: el!,
            baseX: Number(el!.getAttribute('cx')),
            baseY: Number(el!.getAttribute('cy')),
            ampX: 40 + i * 30,
            ampY: 30 + i * 25,
            speedX: 0.0009 + i * 0.0005,
            speedY: 0.0007 + i * 0.0004,
            baseScale: 1 - i * 0.04,
            scaleAmp: 0.02 + i * 0.01,
            baseOpacity: 0.6 - i * 0.08, // Increased transparency as requested (was 0.9)
            opacityAmp: 0.06 + i * 0.02,
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
            phaseS: Math.random() * Math.PI * 2,
            t0: performance.now(),
        }));

        let rafId: number;

        const render = (now: number) => {
            for (const p of params) {
                const t = now - p.t0;

                const dx = Math.sin(t * p.speedX + p.phaseX) * p.ampX +
                    Math.sin(t * p.speedX * 0.43 + p.phaseY) * (p.ampX * 0.35);
                const dy = Math.cos(t * p.speedY + p.phaseY) * p.ampY +
                    Math.cos(t * p.speedY * 0.67 + p.phaseX) * (p.ampY * 0.25);

                const scale = p.baseScale + Math.sin(t * 0.0009 + p.phaseS) * p.scaleAmp;
                const opacity = p.baseOpacity + Math.sin(t * 0.0006 + p.phaseS) * p.opacityAmp;

                // Apply transforms
                p.el.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;
                p.el.style.opacity = `${Math.max(0.3, Math.min(0.8, opacity))}`; // Capped opacity for subtle effect
            }
            rafId = requestAnimationFrame(render);
        };

        rafId = requestAnimationFrame(render);

        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <svg
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full opacity-70" // Overall reduced opacity
                aria-hidden="true"
            >
                <defs>
                    <radialGradient id="g1" cx="50%" cy="40%" r="70%">
                        <stop offset="0%" stopColor="#A29BFE" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6A4C93" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="g2" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="#6A4C93" stopOpacity="1" />
                        <stop offset="100%" stopColor="#A29BFE" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="g3" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="#A29BFE" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6A4C93" stopOpacity="0.95" />
                    </radialGradient>
                </defs>

                <g className="mix-blend-multiply"> {/* Premium blending */}
                    <ellipse
                        ref={blob1Ref}
                        cx="200"
                        cy="160"
                        rx="320"
                        ry="220"
                        fill="url(#g1)"
                        className="will-change-[transform,opacity] transition-opacity duration-700 blur-[80px]" // Increased blur
                        style={{ transformOrigin: 'center' }}
                    />
                    <ellipse
                        ref={blob2Ref}
                        cx="720"
                        cy="200"
                        rx="280"
                        ry="260"
                        fill="url(#g2)"
                        className="will-change-[transform,opacity] transition-opacity duration-700 blur-[80px]"
                        style={{ transformOrigin: 'center' }}
                    />
                    <ellipse
                        ref={blob3Ref}
                        cx="500"
                        cy="420"
                        rx="420"
                        ry="300"
                        fill="url(#g3)"
                        className="will-change-[transform,opacity] transition-opacity duration-700 blur-[80px]"
                        style={{ transformOrigin: 'center' }}
                    />
                </g>
            </svg>
            {/* Optional fallback overlay for extra cohesion */}
            <div className="absolute inset-0 bg-porcelain/30 mix-blend-overlay pointer-events-none" />
        </div>
    );
};

export default HeroBackground;
