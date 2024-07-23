import Image from 'next/image'
import React from 'react'
import { TypewriterEffect } from '../ui/typewriter-effect'
import { title } from 'process'
import Navbar from './Navbar'
import { MousePointer, MousePointer2 } from 'lucide-react'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const introText1 = "Hello, I am Justine Jerald Baliguat"
const introText2 = [
    // {text: "Hello,", className: "text-[18px] my-4"},
    // {text: "I", className: "text-[18px] my-4"},
    // {text: "am", className: "text-[18px] my-4"},
    // {text: "Justine", className: "text-[18px] text-[#00A3FF] dark:text-[#00A3FF] my-4"},
    // {text: "Jerald", className: "text-[18px] text-[#00A3FF] dark:text-[#00A3FF] my-4"},
    // {text: "Baliguat", className: "text-[18px] text-[#00A3FF] dark:text-[#00A3FF] my-4"},
    {text: "Full-Stack", className: "lg:text-[72px] md:text-[50px] text-[40px] my-4"},
    {text: "Web", className: "lg:text-[72px] md:text-[50px] text-[40px] my-4"},
    {text: "Developer", className: "lg:text-[72px] md:text-[50px] text-[40px] my-4"},
]

const socialImg = [
    "/github-logo.png",
    "/yt-logo.png",
    "/fb-logo.png"
]

function HeroSection() {
    
  return (
    <div className='relative pb-20 pt-28 min-h-[100vh] h-fit w-full'>
        <Navbar />
        <div className='w-full flex flex-col-reverse md:flex-row items-center gap-4 md:justify-between justify-center'>
            <div className='flex flex-col md:w-[70%] gap-8 md:items-start items-center'>
                <div className='md:text-left text-center'>
                <div className="inline-block">
                    {introText1.split(" ").map((char, index) => (
                        <span
                        key={`char-${index}`}
                        className={` ${index >= 3 ? 'dark:text-[#00A3FF]' : 'dark:text-white'}`}
                        >
                        {char}&nbsp;
                        </span>
                    ))}
                    </div>
                    <TypewriterEffect words={introText2} 
                    // cursorClassName='h-2'
                    className='md:text-left text-center'
                    />
                </div>
                <a href="#about">
                    <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>
                 {/* <button className="flex items-center gap-2 md:px-8 px-4 md:py-4 py-3 md:text-[16px] text-[14px] rounded-[14px] w-fit bg-gradient-to-r from-[#043A8C] via-[#062047] to-[#06091F] text-white hover:shadow-xl transition duration-200">
                    Show my work <MousePointer2 />
                </button> */}
                <div className='flex flex-col gap-2'>
                    <h1>My Social Accounts</h1>
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
                width={500}
                height={600}
                // sizes='100vw'
                style={{
                    width:'50%',
                    height: '(height: 500px), calc(500px - 50px)'
                }}
            />
        </div>
    </div>
  )
}

export default HeroSection