'use client'

import React from 'react'

import ProductCard from '@/components/elements/card/ProductCard';
import { ProductLineDTO } from '@/types/respDto'

interface ProductContainerProps {
    productLines: ProductLineDTO[]
}

export default function ProductContainer({ productLines }: ProductContainerProps) {
    return (
        <section className='mx-auto max-w-7xl px-5 md:px-10 lg:px-20 py-20'>
            {productLines.map((line: any) => (
                <section key={line.id} id={line.id} className="mb-30 scroll-mt-28">
                    {/* --- 제품군(Product Line) 헤더 --- */}
                    <div className="flex gap-10 items-center mb-10">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">{line.label}</h2>
                            <p className="text-gray-600">{line.content}</p>
                        </div>
                        {/* <div className="flex-1 h-64 relative bg-gray-100 rounded-xl overflow-hidden">
                            
                        </div> */}
                    </div>

                    {/* --- 해당 제품군에 속한 제품(Products) 리스트 --- */}
                    <div className="grid grid-cols-3 gap-4">
                        {line.kind.map((product: any) => (
                            <ProductCard key={product.href} product={product} />
                        ))}
                    </div>
                </section>
            ))}
        </section>
    )
}
