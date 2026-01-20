'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';

import { PRODUCT_LINE } from '@/constants/productLine';
import { MoveRight } from 'lucide-react';

export default function ProductSection() {
    const [activeId, setActiveId] = useState(0); // 현재 활성화된 아이템 인덱스
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0% -40% 0%', //화면 중앙에 왔을 때 감지하도록 마진 조절
            threshold: 0,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 화면에 들어온 요소의 data-index 값을 읽어 상태 업데이트
                    const index = Number(entry.target.getAttribute('data-index'));
                    setActiveId(index);
                }
            })
        }, observerOptions);

        // 모든 리스트 아이템 관찰 시작
        itemRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className='mx-auto max-w-7xl px-10 '>
            <h3 className='text-main'>Products</h3>
            <h2 className='text-3xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <div className='flex flex-col gap-20'>
                {PRODUCT_LINE.map(item => (
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-xl font-bold'>{item.label}</h3>
                        <p>{item.content}</p>
                        <div>
                            {item.kind.map(sub => (
                                <span className='w-fit mr-2 px-3 py-2 bg-main/20 rounded-full text-main text-sm'>
                                    {sub.label}
                                </span>
                            ))}
                        </div>
                        <p className='flex items-center text-main'>더 알아보기<MoveRight size={14} /></p>
                    </div>
                ))}

            </div>
        </section>
    )
}
