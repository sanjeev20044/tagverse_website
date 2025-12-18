'use client';

import { animate, useInView, useIsomorphicLayoutEffect, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

interface CounterAnimationProps {
    value: number;
    direction?: 'up' | 'down';
    className?: string;
    suffix?: string;
    prefix?: string;
}

const CounterAnimation = ({ value, direction = 'up', className = '', suffix = '', prefix = '' }: CounterAnimationProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? value : 0);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    useIsomorphicLayoutEffect(() => {
        if (inView) {
            const controls = animate(motionValue, value, {
                duration: 2,
                ease: 'easeOut',
            });
            return controls.stop;
        }
    }, [motionValue, inView, value]);

    useIsomorphicLayoutEffect(() => {
        return motionValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
            }
        });
    }, [motionValue]);

    return (
        <span className={className}>
            {prefix}
            <span ref={ref} />
            {suffix}
        </span>
    );
};

export default CounterAnimation;
