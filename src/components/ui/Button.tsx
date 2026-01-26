import React from 'react'

interface ButtonProps {
    label: string | React.ReactNode
    variant?: 'filled' | 'outline'
    className?: string
    onClick?: () => void
    noMinWidth?: boolean
}

export default function Button({ 
    label, 
    variant = 'filled', 
    className,
    onClick,
    noMinWidth = false
}: ButtonProps) {
    const baseStyles = `${ noMinWidth ? 'p-2' :'min-w-40 px-4 py-2'} rounded-md 
                        flex justify-center items-center t
                        ext-lg font-semibold cursor-pointer`
    
    const variantStyles = {
        filled: 'bg-main text-white hover:bg-main/70',
        outline: 'border border-main text-main hover:bg-main/10'
    }
    return (
        <button onClick={onClick} 
                className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {label}
        </button>
    )
}
