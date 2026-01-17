import React from 'react'

import PageNav from './PageNav'
import SubCategoryTab from './SubCategoryTab'

export default function HeroBanner() {
  return (
    <div className='w-full'>
        <div className='h-120'>
            <div className='w-full h-full bg-gray-800 flex flex-col justify-center items-center text-white'>
                <span className='text-4xl'>제품군별</span>
                <PageNav />
            </div>
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
