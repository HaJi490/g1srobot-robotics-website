import React from 'react'

import { CONTACT_LIST } from '@/constants/contact'
import FormField from '@/components/ui/FormField';
import Input from '@/components/ui/Input';

export default function ContactContainer() {
  const contacts = [CONTACT_LIST.MAIL, CONTACT_LIST.PHONE];
  const inputBase = 'border border-gray-300 p-4 outline-none focus:border-main transition-colors'

  return (
    <section className='mx-auto max-w-7xl px-5 md:px-10 lg:px-20 py-20'>
      <div className='mb-20 flex flex-col gap-5 items-center justify-center '>
        <h3 className='text-3xl font-bold '>
          궁금한 점을 남겨주시면 빠른 시간 내로 연락드리겠습니다.
        </h3>
        <div className='flex gap-10'>
          {contacts.map(item => {
            const {icon: Icon, value} = item
            return (
              <div className='flex gap-4 items-center text-gray-400'>
                <span className='p-3 border rounded-full'>
                  <Icon size={20} strokeWidth={1}/>
                </span>
                <span>{value}</span>
              </div>
            )
          })}
        </div>
      </div>
      <form className=''>
        <FormField label="문의유형" required className='border-b border-gray-200'>
          <select className={`${inputBase} w-full`} >
              <option value="" disabled hidden className='text-gray-400'>문의유형을 선택해주세요.</option>
              <option value='inquiry'>구매문의</option>
              <option value='tech'>기술지원</option>
          </select>
        </FormField>
        <Input label="회사명" required placeholder='회사명을 입력해주세요'/>
        <Input label="이름" required placeholder='이름을 입력해주세요'/>
        <Input label="이메일" required type="email" placeholder='이메일을 입력해주세요'/>
        <Input label="전화번호" required type="tel" placeholder='전화번호를 입력해주세요'/>
        <Input label="문의사항" required isTextArea placeholder='문의내용을 입력해주세요'/>
      </form>
    </section>
  )
}
