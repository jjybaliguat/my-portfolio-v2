import Image from 'next/image'
import React from 'react'
import { TypewriterEffect } from '../ui/typewriter-effect'
import { title } from 'process'
import Navbar from '../Globals/Navbar'
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
    {text: "FullStack", className: "lg:text-[72px] md:text-[50px] text-[40px] my-4"},
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
    <section className='section-gap-bottom overflow-clip pt-12'>
        <div className='container'>
            <div className='grid-cols-12 flex-col items-center justify-between gap-6 max-md:flex md:grid'>
                <div className='relative h-[200px] w-[200px] rounded-full bg-secondary flex md:hidden'>
                    <Image
                        src="/mypic.png"
                        alt="my-profile-pic"
                        fill
                        className='rounded-full w-full h-full'
                        style={{
                            objectFit: "contain",
                            objectPosition: "center"
                        }}
                    />
                </div>
                <div className='col-start-1 col-end-9 lg:col-end-9 xxl:col-end-11'>
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
                </div>
                <div className='relative hidden md:flex'>
                    <Image
                        src="/mypic.png"
                        alt="my-profile-pic"
                        width={650}
                        height={850}
                        className='max-w-[unset]'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection

{/* <div className='w-full flex flex-col-reverse md:flex-row items-center gap-4 md:justify-between justify-center'>
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
    style={{
        width:'50%',
        height: '(height: 500px), calc(500px - 50px)'
    }}
/>
</div> */}