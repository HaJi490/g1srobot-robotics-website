import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { NAV_ITEMS } from '@/constants/navigation'
import NavItem from './NavItem'
import { Menu } from 'lucide-react';


export default function Nav() {

  return (
     <nav className='w-full h-18 border border-b border-gray-200 flex items-center justify-center'>
      <div className='w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 flex items-center justify-between '>
        <Link href='/'>
          <Image className="dark:invert "
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
          />
        </Link>
        <ul className='flex gap-6'> 
          {NAV_ITEMS.map(i => (
            <NavItem key={i.href} href={i.href}>{i.label}</NavItem>
          ))}
        </ul>
        <div className='flex gap-7 items-center'>
        <Link href={'/support'}
              className='px-5 py-2 bg-main rounded-full
                        text-white text-sm'      
        >
          고객 지원
        </Link>
        <Menu />
        </div>
      </div>
    </nav>
  )
}
