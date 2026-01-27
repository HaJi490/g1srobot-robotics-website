import React from 'react'

interface InputProps 
extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
{
    label: string
    required?: boolean
    isTextArea?: boolean
}

export default function Input ({
    label,
    required = false,
    isTextArea = false,
    className = '',
    ...props // type, placeholder, value, onChange 등을 한꺼번에 받음
}: InputProps) {
    const inputStyles = 'w-full border border-gray-300 p-4 outline-none focus:border-main transition-colors'

    return (
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-start 
                        py-4 px-2 last:border-b border-gray-200 first:border-t"
        >
            {/* 라벨 영역 */}
            <div className="flex items-center gap-1 font-bold text-gray-800 py-2">
                {label}
                {required && <span className="text-main">*</span>}
            </div>

            {/* 입력 영역 */}
            <div className="w-full">
                {isTextArea ? (
                    <textarea
                        className={`${inputStyles} h-40 resize-none ${className}`}
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : (
                    <input
                        className={`${inputStyles} ${className}`}
                        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                    />
                )}
            </div>
        </div>
    )
}
