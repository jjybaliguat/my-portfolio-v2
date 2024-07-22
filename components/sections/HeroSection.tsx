import Image from 'next/image'
import React from 'react'
import { TypewriterEffect } from '../ui/typewriter-effect'
import { title } from 'process'
import Navbar from './Navbar'

const introText = [
    {text: "Hello,", className: "text-[18px] mb-10"},
    {text: "I", className: "text-[18px] mb-10"},
    {text: "am", className: "text-[18px] mb-10"},
    {text: "Justine", className: "text-[18px] text-[#00A3FF] dark:text-[#00A3FF] mb-10"},
    {text: "Jerald", className: "text-[18px] text-[#00A3FF] dark:text-[#00A3FF] mb-10"},
    {text: "Baliguat", className: "text-[18px] text-[#00A3FF] dark:text-[#00A3FF] mb-10"},
    {text: "Full-Stack", className: "text-[72px]"},
    {text: "Web", className: "text-[72px]"},
    {text: "Developer", className: "text-[72px]"},
]

const socialImg = [
    "/github-logo.png",
    "/yt-logo.png",
    "/fb-logo.png"
]

function HeroSection() {
    
  return (
    <div className='relative pb-20 pt-20 min-h-[100vh] h-fit w-full'>
        <Navbar />
        <div className='w-full flex items-center gap-4'>
            <div className='flex flex-col gap-12 min-w-[50%]'>
                <TypewriterEffect words={introText} 
                // cursorClassName='h-2'
                className='text-left gap-4'
                 />
                 <button className="px-8 py-4 rounded-[14px] w-fit bg-gradient-to-r from-[#043A8C] via-[#062047] to-[#06091F] text-white hover:shadow-xl transition duration-200">
                    View my work
                </button>
                <div className='flex flex-col gap-2'>
                    <h1>You can also see me on</h1>
                    <div className='flex items-center gap-4'>
                        {socialImg.map((_, i)=>(
                            <div key={i} className='relative h-[30px] w-[30px]'>
                                <Image 
                                    fill
                                    src={socialImg[i]}
                                    alt=''
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                    className='w-full h-full rounded-full'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Image
                src="/mypic.png"
                alt='my-profile-pic'
                width={400}
                height={500}
            />
        </div>
    </div>
  )
}

export default HeroSection