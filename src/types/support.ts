import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
    readonly id: string;
    readonly label: string;
    readonly value: string;
    readonly href?: string;
    readonly icon: LucideIcon;
}

// Key를 자유롭게 쓰면서도 값은 ContactInfo 타입을 따르도록 강제합니다.
export type ContactMap = {
    [key: string]: ContactInfo;
};