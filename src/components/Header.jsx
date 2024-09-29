import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex items-start justify-between p-4 text-white bg-black">
        <Link href="/" className="font-bold text-xl">MiniKart</Link> 
        <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#products">Products</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </ul>
        <ul className="flex gap-4">
            <li>Cart</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default Header