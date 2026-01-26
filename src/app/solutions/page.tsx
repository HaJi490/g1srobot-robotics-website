import React from 'react'

import HeroBanner from '@/components/elements/hero/HeroBanner'
import SubCategoryTab from '@/components/elements/hero/SubCategoryTab'
import SolutionContainer from '@/components/pages/solutions/SolutionContainer'

export default function page() {
  return (
    <div>
        <HeroBanner />
        <SolutionContainer />
    </div>
  )
}
