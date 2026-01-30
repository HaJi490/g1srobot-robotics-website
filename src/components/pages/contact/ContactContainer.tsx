'use client'

import { useState, useRef } from 'react'

import { sendInquiry } from '@/app/support/actions'
import ContactHeader from './ContactHeader'
import ContactForm from './ContactForm'
import PolicySection from './PolicySection'
import Button from '@/components/ui/Button'

export default function ContactContainer() {
  const [isAgreed, setIsAgreed] = useState(false);

  const inquiryTypeRef = useRef<HTMLSelectElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const formRefs = { inquiryTypeRef, emailRef, companyRef, nameRef, phoneRef, contentRef };
  // const formRefs = { 
  //   inquiryTypeRef : useRef<HTMLSelectElement>(null),
  //   emailRef : useRef<HTMLInputElement>(null),
  //   companyRef : useRef<HTMLInputElement>(null),
  //   nameRef : useRef<HTMLInputElement>(null),
  //   phoneRef : useRef<HTMLInputElement>(null),
  //   contentRef : useRef<HTMLTextAreaElement>(null),
  // };
  const agreeRef = useRef<HTMLInputElement>(null);  //useInquiryForm에 없음
  
  // const emailRef = useRef<HTMLInputElement>(null);

  // 폼 제출후 알림창 띄우기 위한 래퍼 함수
  async function handleSubmit(formData: FormData){
    const result = await sendInquiry(formData);
    if (result.success) {
      alert(result.message);
      window.location.reload(); //성공후 새로고침
    }
  }

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //기본 제출막기
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const {inquiryTypeRef, emailRef, companyRef, nameRef, phoneRef, contentRef} = formRefs;

    const emailId = formData.get('emailId') as string;
    const emailDomain = formData.get('emailDomain') as string;
    const fullEmail = `${emailId}@${emailDomain}`;
    
    const checkList = [
      {name: 'inquiryType', label: '문의유형', ref: inquiryTypeRef},
      {name: 'company', label: '회사명', ref: companyRef},
      {name: 'name', label: '이름', ref: nameRef},
      {name: 'emailId', label: '이메일', ref: emailRef},
      {name: 'phone', label: '전화번호', ref: phoneRef},
      {name: 'content', label: '문의내용', ref: contentRef},
    ]

    for(const item of checkList) {
      const value = formData.get(item.name) as string;  
      if (!value || !value.trim()){
        alert(`${item.label}을(를) 입력해주세요.`);
        item.ref.current?.focus();
        return;
      }
    };
    
    if (!isAgreed){
      alert('개인정보 수집에 동의해주세요.');
      return;
    };
    
    console.log('제출완료')
    handleSubmit(formData);
  }

  return (
    <section className='mx-auto max-w-7xl px-5 md:px-10 lg:px-20 py-20
                        flex flex-col gap-16'
    >
      <ContactHeader />

      <form onSubmit={handleCustomSubmit} className='flex flex-col gap-16'>
        <ContactForm refs={formRefs}/>
        <PolicySection ref={agreeRef}
                      isAgreed={isAgreed} 
                      setIsAgreed={setIsAgreed}
        />

        <div className='flex justify-center'>
          <Button type='submit'
                  label='문의하기'
                  className='md:min-w-80 h-16 text-xl shadow-lg shadow-main/20 '
          />
        </div>
      </form>
    </section>
  )
}
