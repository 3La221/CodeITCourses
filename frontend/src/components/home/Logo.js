"use client"
import { useTheme } from "next-themes"
import Link from "next/link"


const Logo = ({style}) => {
  const {theme,setTheme} = useTheme()
  return (
    <Link className={`${style}`}   href={"/formation"}>
      {
        theme === "dark" ? <img src="/logo/dark-logo.png" alt="logo" /> : <img src="/logo/logo.png" alt="logo" />
      }
    
    </Link>

  )
}

export default Logo
