import React from 'react'

import { ContactInfo } from '@/types/support'

interface ContactItemProps {
  info: ContactInfo
}

export default function ContactItem({info}: ContactItemProps) {
  const {icon: Icon, value, href} = info;
  
  return (
    <div className='flex gap-7 text-white'>
      <Icon />
      <span>{value}</span>
    </div>
  )
}
