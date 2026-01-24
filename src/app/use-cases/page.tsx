import React from 'react'
import { client } from "@/lib/sanity";

import { USE_CASES_QUERY } from '@/lib/queries'
import HeroBanner from '@/components/elements/hero/HeroBanner'
import UseCaseCard from '@/components/elements/card/UseCaseCard'
import { UseCaseDTO } from '@/types/respDto';


export default async function page() {
  const useCases: UseCaseDTO[] = await client.fetch(USE_CASES_QUERY) || [];
  return (
    <div className=''>
        <HeroBanner />
        {/* 필터자리 */}
        <div className='flex flex-col items-center'>
          <p>
            산업군별 | 제품별
          </p>
          
        </div>

        {/* use cases card */}
        <div className='py-20 mx-auto max-w-7xl px-5 md:px-10 lg:px-20
                        grid grid-cols-3 gap-5'
        >
            {useCases.length > 0 
                ?useCases.map(item => (
                    <UseCaseCard key={item.title} 
                                useCase = {item}
                    />
                ))
                : (
                    <p>등록된 사례가 없습니다.</p>
                )
            }
        </div>
    </div>
  )
}
