import Image from 'next/image'

import Button from '@/components/ui/Button'
import { ProductDetailDTO } from '@/types/respDto'

interface ProductIntroSectionProps {
    product: ProductDetailDTO
}

export default function ProductIntroSection({ product }: ProductIntroSectionProps) {
    const buttonStyle = 'flex-1 justify-start text-md h-15'
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div className='relative aspect-square rounded-xl overflow-hidden bg-gray-100'>
                <Image src={product.mainImage}
                    alt={product.name}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='flex flex-col gap-10 '>
                <span className='text-4xl font-bold pb-5 border-b border-gray-200'>{product.name}</span>
                <div className='flex justify-between'>
                    {product.specs.map(spec => (
                        <div className='flex flex-col'>
                            <div className='text-2xl font-semibold'>
                                <span>{spec.value}</span>
                                <span>{spec.unit}</span>
                            </div>
                            <span className='text-sm text-gray-400'>{spec.label}</span>
                        </div>
                    ))}
                </div>
                <p className='h-35'>
                    {product.description}
                </p>
                <div className='flex gap-5'>
                    <Button label='제품 문의하기' className={buttonStyle} />
                    <Button label='카탈로그 다운로드' className={buttonStyle} />
                </div>
            </div>
        </div>
    )
}
