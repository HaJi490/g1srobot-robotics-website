// cta(Call to Action) 영역
import React from 'react'
import Link from 'next/link';

import { Cta } from '@/types/cta'
import { ChevronRight, ChevronsRight } from 'lucide-react';

interface BannerBtnProps {
    cta: Cta
}

export default function BannerBtn({cta}: BannerBtnProps) {
    const {label, content, href} = cta
    return (
        <Link href={href} className='w-full h-45 p-15 bg-gray-200 rounded-lg
                        flex items-center justify-between'
        >
            <div className='flex flex-col gap-2'>
                <h3 className='text-3xl font-bold'>{label}</h3>
                <span className='text-gray-500'>{content}</span>
            </div>
            <ChevronRight size={70} strokeWidth={1.2} className='text-gray-800'/>
        </Link>
    )
}
