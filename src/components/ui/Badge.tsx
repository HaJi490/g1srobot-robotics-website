import React from 'react'

interface BadgeProps {
    label: string
    variant?: 'filled' | 'outline'
    prefix?: string
    className?: string
}

export default function Badge({
    label,
    variant = 'filled',
    prefix,
    className = ''
}: BadgeProps) {
    const baseStyles = 'text-[12px] rounded-full transition-colors duration-300'

    const variantStyles = {
        filled: 'px-3 py-1 bg-main text-white font-semibold tracking-tight shadow-md rounded-md',
        outline: 'px-2 py-0.5 border border-white/50'
    }

    return (
        <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            {prefix && <span>{prefix}</span>}
            {label}
        </span>
    )
}
