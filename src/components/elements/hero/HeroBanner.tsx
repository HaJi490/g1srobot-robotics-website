//SSR
import React from 'react'

import HeroTitle from './HeroTitle'
import SubCategoryTab from './SubCategoryTab'

export default function HeroBanner() {
  
  return (
    <div className='w-full'>
        <div className='relative h-130'>
            <HeroTitle />
        </div>
        <div className='h-15 bg-gray-200 flex justify-center items-center'>
          {/* 
          1. props로 사용유무 받기
          2. props로 array받아서 map으로 돌리기 
          */}
          <SubCategoryTab /> 
        </div>
    </div>
  )
}
