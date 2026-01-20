import React from 'react'
import Link from 'next/link'

import NavDropbar from './NavDropbar'
import { House } from 'lucide-react'

export default function PageNav() {
  return (
    <div className='absolute bottom-10 flex gap-3'>
      <Link href='/' className='flex items-center justify-center p-2 bg-black/40 rounded-full cursor-pointer'>
        <House size={20}/>
      </Link>
      <NavDropbar />
    </div>
  )
}
