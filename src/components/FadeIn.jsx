import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children }) => {
    const ref = useRef();

    useEffect(() => {
        const element = ref.current;

        // GSAP Animation
        gsap.fromTo(element,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

export default FadeIn;
