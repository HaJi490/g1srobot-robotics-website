import React from 'react'
import Link from 'next/link';

import { CONTACT_LIST } from '@/constants/contact'
import { NAV_ITEMS } from '@/constants/navigation';
import ContactItem from './ContactItem'
import FooterNav from './FooterNav';

export default function Footer() {
  const allContacts = [CONTACT_LIST.MAIL, CONTACT_LIST.PHONE, CONTACT_LIST.ADDRESS];

  return (
    <div className='w-full h-100 py-20 px-5 md:px-10 lg:px-20 bg-black
                    grid grid-cols-2
                    text-white'
    >
        <div className='flex flex-col justify-between'>
            <h2 className='text-4xl font-bold text-main'>LOGOROBOT</h2>
            <div className='flex flex-col gap-8'>
              {allContacts.map(item => (
                <ContactItem key={item.id} info={item} />
              ))}
            </div>
        </div>
        <div className='flex flex-col items-end justify-between'>
            <div className='flex gap-8'>
              {NAV_ITEMS.map((item,idx) => (
                <Link key={`${idx}.${item.label}`}
                      href={item.href} className='font-bold'
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <span className='text-main'>개인정보처리방침</span>
              <span>@Copyright 2026 G1SRobot, All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}
