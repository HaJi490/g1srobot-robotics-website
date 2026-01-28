import React from 'react'
import { cn } from '@/lib/utils'

interface FormFieldProps 
extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
{
    label: string
    required: boolean
    children: React.ReactNode // 여기에 input, select, textarea
    className?: string
}

export default function FormField({
    label,
    required = false,
    children,
    className
}: FormFieldProps) {
    const basicStyles = 'grid grid-cols-1 md:grid-cols-[180px_1fr] items-start py-4 px-2 border-gray-200'

    return (
        <div className={cn(basicStyles, className)}>
            <div className='flex items-center gap-1 font-bold text-gray-800 py-2'>
                {label}
                {required && <span className='text-main'>*</span>}
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}
