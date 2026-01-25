import React from 'react'
import Link from 'next/link';

import IconRenderer from '../ui/IconRenderer';

interface IconBtnProps {
    label: string;
    icon: string;
    href: string;
}

export default function IconBtn({ label, icon, href }: IconBtnProps) {
  return (
    <Link href={href} className='flex flex-col gap-3 items-center'>
        <div className='p-5 border border-gray-400 rounded-full text-gray-400 
                        hover:border-main hover:border-2 hover:shadow-main/50 hover:shadow-lg hover:text-main '
        >
            <IconRenderer iconName={icon} size={40} strokeWidth={1.2}/>
        </div>
        <span>{label}</span>
    </Link>
  )
}
