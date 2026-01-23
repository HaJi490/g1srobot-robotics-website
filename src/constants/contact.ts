import { Phone, Mail, MapPin } from 'lucide-react'

export const CONTACT_LIST = {
    PHONE: {
        id: 'phone',
        label: '전화번호',
        value: '010.0000.0000',
        icon: Phone
    },
    MAIL: {
        id: 'email',
        label: '이메일',
        value: 'example@gmail.com',
        icon: Mail
    },
    ADDRESS: {
        id: 'address',
        label: '주소',
        value: '부산 강서구 공항로 1207번길 29',
        href: 'https://map.kakao.com/...',
        icon: MapPin
    },
}