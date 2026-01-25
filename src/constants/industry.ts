import {
    Car,
    Cpu,
    Ship,
    Battery,
    Settings,
} from 'lucide-react';

export const INDUSTRY = [
    { label: '자동차', icon: Car, href: '/solutions/automotive' },
    { label: '전자', icon: Cpu, href: '/solutions/electronics' },
    { label: '조선', icon: Ship, href: '/solutions/shipbuilding' },
    { label: '이차전지', icon: Battery, href: '/solutions/battery' },
    { label: '기계장비', icon: Settings, href: '/solutions/machinery' },
]

export const INDUSTRY_ICONS: Record<string, React.ElementType> = {
    'automotive': Car,
    'electronics': Cpu,
    'shipbuilding': Ship,
    'battery': Battery,
    'machinery': Settings,
};