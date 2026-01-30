'use client'

import { useState, useRef} from 'react'

import ContactForm from '../../contact/ContactForm'
import PolicySection from '../../contact/PolicySection'

export default function ProductInquirySection() {
  return (
    <div>
        <ContactForm />
        <PolicySection />
    </div>
  )
}
