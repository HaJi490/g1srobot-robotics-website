'use client'

import { useState } from 'react'

import ContactHeader from './ContactHeader'
import ContactForm from './ContactForm'
import AgreementSection from './AgreementSection'
import Button from '@/components/ui/Button'

export default function ContactContainer() {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <section className='mx-auto max-w-7xl px-5 md:px-10 lg:px-20 py-20
                        flex flex-col gap-24'
    >
      <ContactHeader />

      <form action={} className='flex flex-col gap-16'>
        <ContactForm />
        <AgreementSection/>

        <div>
          <Button type='submit'
                  label='문의하기' 
                  disabled={!isAgreed}
                  className='mx-auto md:min-w-80 h-16 text-xl shadow-lg shadow-main/20 '/>
        </div>
      </form>
    </section>
  )
}
