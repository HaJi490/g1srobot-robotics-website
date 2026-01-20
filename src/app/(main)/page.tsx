import { INDUSTRY } from '@/constants/industry';

import ProductSection from '@/components/pages/main/ProductSection';
import IconBtn from '@/components/ui/IconBtn';
import { MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col gap-30'>
      <div className="w-full h-screen bg-black 
                    flex flex-col items-center justify-center
                    text-white"
      >
        <h1 className="text-4xl">Lorem ipsum dolor sit amet do eiusmod</h1>
        <p className="">consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
        <button className="mt-10 px-8 py-4 bg-white/30 rounded-full 
                          flex gap-2 items-center text-sm
                          hover:bg-white hover:text-black cursor-pointer"
        >
          G1sRobot과 함께 상상을 실현해 보세요
          <MoveRight size={14} />
        </button>
      </div>
      <div className="w-full h-fit flex flex-col items-center">
        <h3 className='text-main'>Solution</h3>
        <h2 className='text-3xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <div className='flex gap-10 mt-15'>
          {INDUSTRY.map(item => (
            <IconBtn key={item.label} 
                    label={item.label}
                    icon={item.icon}
                    href={item.href}
            />
          ))}
        </div>
      </div>
      <ProductSection />
      <div>

      </div>
    </div>
  )
}
