'use client'

import { useState, useEffect } from 'react'


import UseCaseCard from '@/components/elements/card/UseCaseCard'
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { UseCaseDTO } from '@/types/respDto';
import { IndustryDTO } from '@/types/respDto';
import { ProductLineDTO } from '@/types/respDto';
import { RotateCw } from 'lucide-react';


interface UseCaseContainerProps {
    initialUseCases: UseCaseDTO[]
    industries: IndustryDTO[]
    productLine: ProductLineDTO[]
}

export default function UseCaseContainer({ initialUseCases, industries, productLine }: UseCaseContainerProps) {
    const [filterType, setFilterType] = useState<'industry' | 'product'>('industry'); 
    const [selectedFilters, setSelectedFilters] = useState<string[] >([]); //현재 선택된 필터
    const [filteredCases, setFilteredCases] = useState(initialUseCases);    // 화면에 뿌릴 데이터

    useEffect(() => {
        const allLabels = filterType === 'industry'
            ? industries.map(i => i.label)
            : productLine.map(p => p.label)
        
        setSelectedFilters(allLabels);
    },[filterType, industries, productLine])
    
    // 핸들 on/off 로직
    const handleToggle = (label: string) => {
        setSelectedFilters(
            prev => prev.includes(label)
                ?prev.filter(item => item !== label)
                : [...prev, label]
            );
    };

    // 검색하기 필터링 수행
    const handleSearch = () => {
        if (!selectedFilters) {
            setFilteredCases(initialUseCases);
        } else {
            const filtered = initialUseCases.filter(uc => {
                if (filterType === 'industry') {
                    uc.industries.some(ind => selectedFilters.includes(ind.name));
                }
                if (filterType === 'product') {
                    uc.products.some(pred => selectedFilters.includes(pred.name));
                }
            });
            setFilteredCases(filtered);
        }
    }


    return (
        <section className='mx-auto max-w-7xl px-5 md:px-10 lg:px-20'> 
            <div className='py-10 border-b border-gray-300  flex flex-col gap-5 items-center'>
                <div className='flex gap-3 text-xl font-bold text-gray-400 '>
                    <button onClick={() => setFilterType('industry')}
                            className={`${filterType === 'industry' ? 'text-main' : ''} cursor-pointer `}
                    >
                        산업군별
                    </button>
                    |
                    <button onClick={() => setFilterType('product')}
                            className={`${filterType === 'product' ? 'text-main' : ''} cursor-pointer `}
                    >
                        제품군별
                    </button>
                </div>
                <div className='max-w-4xl flex gap-4'>
                    {(filterType === 'industry' ? industries : productLine).map(item => (
                        <Badge key={item.label}
                                label={item.label}
                                variant='filter' 
                                isActive={selectedFilters.includes(item.label)}
                                onClick={()=>handleToggle(item.label)}
                                className='text-md cursor-pointer' />
                    ))}
                </div>
                <div className='flex gap-2'>
                    <Button label='검색하기'
                            onClick = {handleSearch}
                    />
                    <Button label={<RotateCw size={20} />}
                            variant='outline'
                            noMinWidth
                            onClick={() => setSelectedFilters([])}
                    />
                </div>
            </div>

            {/* use cases card */}
            <div className='py-20 
                        grid grid-cols-3 gap-5'
            >
                {initialUseCases.length > 0
                    ? initialUseCases.map(item => (
                        <UseCaseCard key={item.title}
                            useCase={item}
                        />
                    ))
                    : (
                        <p>등록된 사례가 없습니다.</p>
                    )
                }
            </div>
        </section>
    )
}
