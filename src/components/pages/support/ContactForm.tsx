'use client'

import { useState } from 'react'

import FormField from '@/components/ui/FormField'
import Input from '@/components/ui/Input'
import { ChevronDown } from 'lucide-react'

export default function ContactForm() {
    const inputBase = 'border border-gray-300 p-4 outline-none focus:border-main transition-colors'
    const [emailDomainOpt, setEmailDomainOpt] = useState<string>('직접입력');
    const [inputDomain, setInputDomain] = useState<string>('');

    const onDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setEmailDomainOpt(value);
        if (value !== 'direct') {
            setInputDomain(value);
        } else {
            setInputDomain('');
        }
    }
    return (
        <div className='border-y border-gray-200'>
            <FormField label="문의유형" required className='border-b border-gray-200'>
                <div className='relative'>
                    <select className={`${inputBase} w-full appearance-none cursor-pointer`} >
                        <option value='' disabled hidden>문의유형을 선택해주세요.</option>
                        <option value='inquiry'>구매문의</option>
                        <option value='tech'>기술지원</option>
                    </select>
                    <ChevronDown className="absolute z-1 right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={16} />
                </div>
            </FormField>
            <Input label="회사명" required placeholder='회사명을 입력해주세요' />
            <Input label="이름" required placeholder='이름을 입력해주세요' />
            <FormField label="이메일" required placeholder='이메일을 입력해주세요'
                className='w-full'
            >
                <div className='relative flex gap-2 items-center'>
                    <input type='text' className={`${inputBase} flex-1`} placeholder='이메일을 입력해주세요' />
                    <span className='text-gray-500'>@</span>
                    <input type='text'
                        value={inputDomain}
                        onChange={e => setInputDomain(e.target.value.trim())}
                        disabled={emailDomainOpt !== 'direct'}
                        className={`${inputBase} flex-1`}
                    />
                    <select value={emailDomainOpt}
                        onChange={e => onDomainChange(e)}
                        className={`${inputBase} flex-1 appearance-none cursor-pointer`}
                    >

                        <option value='direct'>직접 입력</option>
                        <option value='naver.com'>naver.com</option>
                        <option value='gmail.com'>gmail.com</option>
                    </select>
                    <ChevronDown className="absolute z-1 right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={16} />
                </div>
            </FormField>
            <Input label="전화번호" required type="tel" placeholder='전화번호를 입력해주세요' />
            <Input label="문의사항" required isTextArea placeholder='문의내용을 입력해주세요' />
        </div>
    )
}
