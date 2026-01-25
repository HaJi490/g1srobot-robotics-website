
import React from 'react'
import { client } from "@/lib/sanity";

import { USE_CASES_QUERY } from '@/lib/queries'
import { INDUSTRY_QUERY } from '@/lib/queries';
import { PRODUCT_LINE_QUERY } from '@/lib/queries';
import HeroBanner from '@/components/elements/hero/HeroBanner'
import UseCaseContainer from '@/components/pages/use-cases/UseCaseContainer';
import { UseCaseDTO } from '@/types/respDto';
import { IndustryDTO } from '@/types/respDto';
import { ProductLineDTO } from '@/types/respDto';

export default async function page() {
  const useCases: UseCaseDTO[] = await client.fetch(USE_CASES_QUERY) || [];
  const industries: IndustryDTO[] = await client.fetch(INDUSTRY_QUERY) || [];
  const productLine: ProductLineDTO[] = await client.fetch(PRODUCT_LINE_QUERY) || []



  return (
    <div className=''>
        <HeroBanner />
        <UseCaseContainer initialUseCases = {useCases}
                          industries = {industries}
                          productLine = {productLine}
        />
    </div>
  )
}
