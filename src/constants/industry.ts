import {
    Car,
    Cpu,
    Ship,
    Battery,
    Settings,
} from 'lucide-react';

export const INDUSTRY_ICONS: Record<string, React.ElementType> = {
    'automotive': Car,
    'electronics': Cpu,
    'shipbuilding': Ship,
    'battery': Battery,
    'machinery': Settings,
};