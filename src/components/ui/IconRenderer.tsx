import React from 'react'
import * as Icons from 'lucide-react'

interface IconRendererProps {
    iconName: string; 
    [key: string]: any 
}

export default function IconRenderer({ iconName, ...props }: IconRendererProps) {
    const LucideIcon = (Icons as any)[iconName];

    if(!LucideIcon) return <Icons.HelpCircle{...props} />
    
    return <LucideIcon {...props} /> 
}
