import React from "react";
import { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (ref.current) {
            const currentRef = ref.current;
            observer.observe(currentRef);
            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, []);


    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}

export default RevealOnScroll;