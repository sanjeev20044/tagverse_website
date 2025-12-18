'use client';

import React, { useEffect, useRef } from 'react';

/**
 * CursorSmokeEffect Component
 * 
 * Implements a high-performance canvas-based particle system that creates
 * a subtle, elegant smoky trail following the cursor.
 * 
 * Features:
 * - 60fps WebGL-like performance using 2D Canvas context
 * - Gradient particles (Royal Violet -> Indigo)
 * - Smooth fading and expansion physics
 * - Minimal performance impact (cleanup on unmount)
 */
export default function CursorSmokeEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        let particles: Particle[] = [];
        const maxParticles = 80; // Increased to allow continuous smooth trail
        let mouseX = 0;
        let mouseY = 0;
        let isMoving = false;
        let lastMoveTimeout: NodeJS.Timeout;

        // Resize handling
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Particle Class
        class Particle {
            x: number;
            y: number;
            size: number;
            maxSize: number;
            opacity: number;
            life: number;
            maxLife: number;
            vx: number;
            vy: number;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 5 + 5; // Start small
                this.maxSize = Math.random() * 60 + 40; // Bloom large
                this.opacity = 20; // Start semi-transparent (Subtle)
                this.life = 0;
                this.maxLife = Math.random() * 40 + 40; // 1-2 seconds at 60fps

                // Slight drift
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;

                // Color Palette: Royal Purple to Indigo
                // Randomly choose closer to violet or indigo
                const colors = [
                    '107, 70, 193', // Royal Purple
                    '67, 56, 202',  // Indigo
                    '159, 122, 234' // Amethyst
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.life++;
                this.x += this.vx;
                this.y += this.vy;

                // Grow logic
                if (this.size < this.maxSize) {
                    this.size += 0.5;
                }

                // Opacity logic: Fade in briefly, then fade out
                const lifeRatio = this.life / this.maxLife;
                if (lifeRatio < 0.1) {
                    // Fade in
                    this.opacity = Math.min(0.8, this.opacity + 0.05);
                } else {
                    // Fade out
                    this.opacity = Math.max(0, 0.8 * (1 - lifeRatio));
                }
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                // Create a radial gradient for soft smoke look
                const gradient = context.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size
                );

                gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
                gradient.addColorStop(0.5, `rgba(${this.color}, ${this.opacity * 0.5})`);
                gradient.addColorStop(1, `rgba(${this.color}, 0)`);

                context.fillStyle = gradient;
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
            }
        }

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new particle if moving
            if (isMoving) {
                // Remove throttle for continuous smoothness
                particles.push(new Particle(mouseX, mouseY));
            }

            // Update and draw
            particles.forEach((p, index) => {
                p.update();
                p.draw(ctx);
                if (p.life >= p.maxLife) {
                    particles.splice(index, 1);
                }
            });

            // Clean up limits
            if (particles.length > maxParticles) {
                particles.shift();
            }

            requestAnimationFrame(animate);
        };
        animate();

        // Mouse Handlers
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMoving = true;

            clearTimeout(lastMoveTimeout);
            lastMoveTimeout = setTimeout(() => {
                isMoving = false;
            }, 100);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        // Removed mixBlendMode to ensure visibility on light backgrounds (white/porcelain)
        />
    );
}
