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
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 py-8 px-8 flex items-center gap-8'>
        <NavItems />
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