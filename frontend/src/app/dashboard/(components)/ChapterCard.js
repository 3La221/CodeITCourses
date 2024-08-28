"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLongArrowAltLeft } from "react-icons/fa";
const ChapterCard = ({ chapter }) => {
  

  return (
        <div className="flex justify-between px-8 py-6 bg-primary text-secondary rounded-md w-[50%]  ">

        <div className='flex items-center justify-center w-12 h-12 bg-secondary  rounded-full'>
          <h1 className='text-xl font-bold text-primary '>{chapter.id}</h1>
        </div>
          <h1 className="font-bold text-2xl md:text-3xl ">{chapter.title}</h1> 
          <Button>
            <FaLongArrowAltLeft className='text-2xl' />
            </Button>        
        </div>
  );
};

export default ChapterCard;
