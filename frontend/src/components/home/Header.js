"use client"

import React, { useEffect, useState } from 'react'
import ThemeToggler from '../ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import { usePathname } from 'next/navigation'
import { Button } from "../ui/button";
import Link from 'next/link'
import { getUser } from '@/helpers/actions'

const Header = () => {
  const [header, setHeader] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [user, setUser] = useState(null);
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };

    fetchUser();
  }, [user]);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div 
      className={`${
        header 
        ? 'py-4 bg-white shadow-lg dark:bg-accent'
        : 'py-6 dark:bg-transparent'
      } ${pathname.startsWith("/dashboard") && 'hidden'} sticky top-0 z-30 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Logo style="mt-2 xl:h-[15%] xl:w-[15%] h-[40%] w-[40%] md:h-[25%] md:w-[25%]" />

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button 
            onClick={handleNavToggle} 
            className="text-2xl p-2 rounded-lg focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden xl:flex items-center gap-x-8`}>
          <Nav 
            containerStyles="flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          {user ? 
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
          <ThemeToggler />
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 w-[250px] h-full bg-white dark:bg-gray-800 shadow-lg transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden z-40`}
        >
          <div className="flex flex-col items-start p-4">
            <button 
              onClick={closeNav} 
              className="text-2xl self-end p-2"
            >
              ×
            </button>
            <Nav 
              containerStyles="flex flex-col items-start gap-y-4 mt-4"
              linkStyles="text-lg hover:text-primary transition-all"
              underlineStyles="hidden"
            />
            <div className="mt-6 flex flex-col items-start">
              <div className="mt-6 flex flex-col items-start">
                <Link href={user ? "/dashboard" : "/login"}>
                  <Button onClick={closeNav}>
                    {user ? "Dashboard" : "Login"}
                  </Button>
                </Link>
              </div>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
