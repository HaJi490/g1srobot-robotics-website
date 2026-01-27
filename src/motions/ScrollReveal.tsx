'use client'

import { useState, useEffect, useRef } from 'react'

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setIsVisible(true);   // 힌번보이면 계속 유지
            });
        }, { threshold: 0.1 }); // 감지민감도, 로딩시점

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, [])

    return (
        <div ref={domRef}
            className={`transition-all duration-1500 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    )
}
