import Link from 'next/link'
import React from 'react'

const navLinks = [
    {
        name: "About",
        path: "#about"
    },
    {
        name: "Projects",
        path: "#about"
    },
    {
        name: "Blogs",
        path: "#about"
    },
    {
        name: "Contact",
        path: "#about"
    },
]

function Navbar() {
  return (
    <div className='w-full shadow-md sticky top-0 z-50'>
        <nav className='mx-auto relative flex flex-wrap items-center justify-center py-6 px-8 xl:px-28'>
            <div className='flex items-center gap-8'>
                <NavItems />
            </div>
        </nav>
    </div>
  )
}

function NavItems(){
    return (
        navLinks.map((item, index)=>(
            <a key={index} href={item.path}>{item.name}</a>
        ))
    )
}

export default Navbar