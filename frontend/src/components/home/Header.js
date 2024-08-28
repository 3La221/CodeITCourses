"use client"

import React, { useContext, useEffect, useState } from 'react'
import ThemeToggler from '../ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { Button } from "../ui/button";
import Link from 'next/link'
import { CiUser } from "react-icons/ci";
import { getUser } from '@/helpers/actions'


const Header = () => {
  const [header , setHeader] = useState(false)
  const pathname = usePathname()

  const user = getUser()

  useEffect(()=>{
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      className={`${
        header 
        ? 'py-4 bg-white shadow-lg dark:bg-accent'
        : 'py-6 dark:bg-transparent'
      } ${ pathname.startsWith("/dashboard") && 'hidden' } sticky top-0 z-30 transition-all`}
    >
      <div className='container mx-auto'> 
        <div className='flex justify-between'>


        <Logo style={"mt-2 h-[15%] w-[15%]"}/>

          

   
    
    

          <Nav 
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />


  <div className='flex'>

    {
      user ? 
      <Link href="/dashboard">
        <Button>
          Dashboard
        </Button>
      </Link>
      :
      <Link href="/login">
        <Button>
          Login
        </Button>
      </Link>
    }
  
<ThemeToggler/>
  </div>

          
         
          
          <div className='xl:hidden'>
            <MobileNav/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
