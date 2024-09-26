'use client'

import { useState, useEffect } from 'react'
import {  Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaHome } from 'react-icons/fa'
import { FaLuggageCart } from "react-icons/fa";
import Image from 'next/image'

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <div className="">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out text-primary ${
          scrolled
            ? 'bg-white backdrop-blur-sm h-12'
            : 'bg-white h-[4.5rem]'
        }`}
      >
        <div className="container pl-4 pr-4 h-full flex items-center justify-between">
          <div className={`font-bold transition-all duration-300 ease-in-out flex gap-[1.9rem] justify-center items-center ${
            scrolled ? 'text-xl' : 'text-2xl'
          }`}>
            <a href='/'><FaHome  size={30} color="gray" className='hover-grow'/></a>
            <a href="/"><Image src="/gradSlogan.svg" alt="Site logo" className='w-52' width={1} height={1} /></a>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="/about" className="text-foreground hover:text-primary transition-colors outfit-bold ">About</a>
            <a href="/contect" className="text-foreground hover:text-primary transition-colors outfit-bold ">Contact</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors outfit-bold ">Services</a>

          </nav>

          <div>
            <FaLuggageCart size={30}  className='hover-grow'/>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>
    </div>
  )
}