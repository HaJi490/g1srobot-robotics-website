import React from 'react'
import { client } from "@/lib/sanity";

import { USE_CASES_QUERY } from '@/lib/queries'
import UseCaseCard from '@/components/elements/card/UseCaseCard'
import { UseCaseDTO } from '@/types/respDto';
import ScrollReveal from '@/motions/ScrollReveal';

export default async function UseCaseSection() {
    const useCases: UseCaseDTO[] = await client.fetch(USE_CASES_QUERY) || [];
    
  return (
     <section className='w-full py-20'>
        <div className='mx-auto max-w-7xl px-5 md:px-10 lg:px-20'>
            <h3 className='text-main'>Use Cases</h3>
            <h2 className='text-4xl font-bold mb-15 max-w-2xl leading-tight'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <ScrollReveal>
            <div className='grid grid-cols-3 gap-5'>
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
            </ScrollReveal>
        </div>
    </section>
  )
}
