import ScrollReveal from '@/motions/ScrollReveal';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-black 
                    flex flex-col items-center justify-center
                    text-white"
    >
      <ScrollReveal>
        <h1 className="text-4xl">Lorem ipsum dolor sit amet do eiusmod</h1>
        <p className="">consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
        <button className="mt-10 px-8 py-4 bg-white/30 rounded-full
                            flex gap-2 items-center text-sm
                            hover:bg-white hover:text-black cursor-pointer"
        >
          G1sRobot과 함께 상상을 실현해 보세요
          <MoveRight size={14} />
        </button>
      </ScrollReveal>
    </div>
  )
}
