import { useState, useRef } from 'react'

import { sendInquiry } from '@/app/support/actions'

export function useInquiryForm() {
    const [isAgreed, setIsAgreed] = useState(false);

    const refs = {
        inquiryTypeRef: useRef<HTMLSelectElement>(null),
        emailRef: useRef<HTMLInputElement>(null),
        companyRef: useRef<HTMLInputElement>(null),
        nameRef: useRef<HTMLInputElement>(null),
        phoneRef: useRef<HTMLInputElement>(null),
        contentRef: useRef<HTMLTextAreaElement>(null),
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const emailId = formData.get('emailId') as string;
        const emailDomain = formData.get('emailDomain') as string;
        const fullEmail = `${emailId}@${emailDomain}`;

        const checkList = [
            { name: 'inquiryType', label: '문의유형', ref: refs.inquiryTypeRef },
            { name: 'company', label: '회사명', ref: refs.companyRef },
            { name: 'name', label: '이름', ref: refs.nameRef },
            { name: 'emailId', label: '이메일', ref: refs.emailRef },
            { name: 'phone', label: '전화번호', ref: refs.phoneRef },
            { name: 'content', label: '문의내용', ref: refs.contentRef },
        ]

        for (const item of checkList) {
            const value = formData.get(item.name) as string;
            if (!value || !value.trim()) {
                alert(`${item.label}을(를) 입력해주세요.`);
                item.ref.current?.focus();
                return;
            }
        };

        if (!isAgreed) {
            alert('개인정보 수집에 동의해주세요.');
            return;
        };

        //ServerAction 호출
        const result = await sendInquiry(formData);
        if(result.success) {
            alert(result.message);
            window.location.reload();
        }
    };

    return {isAgreed, setIsAgreed, refs, handleFormSubmit};

}