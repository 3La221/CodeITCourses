import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FiHome, FiBook, FiInfo } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { RiHomeSmile2Fill  , RiHomeSmile2Line , RiInformationFill , RiInformationLine  } from "react-icons/ri";
import { IoBook  , IoBookOutline } from "react-icons/io5";
import { useTheme } from 'next-themes';


const links = [
  { path: "/formation", name: "Home", filledIcon : <RiHomeSmile2Fill className='text-primary' size={22} /> , outlineIcon : <RiHomeSmile2Line size={22} className='text-primary' /> },
  { path: "/courses", name: "Courses", filledIcon : <IoBook  size={22} className='text-primary' /> , outlineIcon : <IoBookOutline size={22} className='text-primary' /> },
  { path: "/about", name: "About", filledIcon: <RiInformationFill size={22}  className='text-primary' /> , outlineIcon : <RiInformationLine size={22} className='text-primary' /> },

];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  const { theme, setTheme } = useTheme() 

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
            <div className="flex items-center space-x-2 text-lg relative">
            <span className='text-primary' >{link.name}</span>

            <div className="icon-container">
              <div className={`filled-icon ${link.path === path ? 'opacity-100' : 'opacity-0'} transition-all duration-500 ease-in`}>
                {link.filledIcon}
              </div>
              <div className={`outline-icon ${link.path !== path ? 'opacity-100' : 'opacity-0'} transition-all duration-500 ease-in `}>
                {link.outlineIcon}
              </div>
            </div>

          </div>
         
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
