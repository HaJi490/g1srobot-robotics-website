import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import NavItem from './UserItems/NavItem'
import { Menu } from 'lucide-react';


export default function Nav() {
  const MENU_ITEM = [
    {href: '/products', label: '제품 및 서비스'},
    {href: '/use-cases', label: '적용 사례'},
    {href: '/tech-doc', label: '기술 자료'},
    {href: '/company', label: '회사 소개'},
  ]
  return (
     <nav className='w-full h-20 border border-b border-gray-200 flex items-center justify-center'>
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
        <ul className='flex gap-10'> 
          {MENU_ITEM.map(i => (
            <NavItem key={i.href} href={i.href}>{i.label}</NavItem>
          ))}
        </ul>
        <Menu />
      </div>
    </nav>
  )
}
