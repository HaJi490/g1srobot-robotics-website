import React from 'react'
import Link from 'next/link';

import { NAV_ITEMS } from '@/constants/navigation';

interface NavDropdownProps {
    pathname: string,
    navMenu:
}

export default function NavDropdown({pathname}: NavDropdownProps) {
  return (
     <div>
         <ul className='absolute top-full left-0 mt-2 w-full bg-white text-black shadow-lg overflow-hidden py-2'>
            {NAV_ITEMS.map(item => (
                <li key={item.href} className='hover:text-main'>
                    <Link href={item.href}
                        className={`block px-4 py-2 ${pathname === item.href ? 'font-bold text-main' : ''}`}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
             </ul>

             <ul className='absolute top-[calc(100%+15px)] left-0 min-w-full w-max bg-white text-black shadow-xl rounded-xl py-2 z-50'>
                {NAV_ITEMS.map(item => (
                    <li key={item.href} className='hover:bg-gray-100'>
                        <Link href={item.href} className={`block px-5 py-2 ${pathname.startsWith(item.href) ? 'text-main font-bold' : ''}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className='absolute top-[calc(100%+15px)] left-0 min-w-full w-max bg-white text-black shadow-xl rounded-xl py-2 z-50'>
                {parentItem.items.map(sub => (
                    <li key={sub.href} className='hover:bg-gray-100'>
                        <Link href={sub.href} className={`block px-5 py-2 ${pathname === sub.href ? 'text-main font-bold' : ''}`}>
                            {sub.label}
                        </Link>
                    </li>
                ))}
            </ul>
     </div>

    
  )
}
