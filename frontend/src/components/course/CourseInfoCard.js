import React from 'react'
import { GoPackage } from "react-icons/go";
import { CiTimer } from "react-icons/ci";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { MdNumbers } from "react-icons/md";

const CourseInfoCard = ({ course }) => {
  return (
    <div className='flex flex-col bg-primary-foreground text-primary gap-4 rounded-xl w-full h-auto p-6'>
      
      <div className='text-left text-xl'>
      <GoPackage className='inline-block text-xl mb-1' />  Subject: Python Development
      </div>

      <div className='text-left text-xl'>
      <CiTimer className='inline-block mb-1' /> Duration: {course.duration} Week 
      </div>

      <div className='text-left text-xl'>
      <MdNumbers className='inline-block mb-1' />   Number of  Sessions Per Week : {course.nbr_sessions} 
      </div>

      <div className='text-left text-xl'>
      <IoLocationSharp className='inline-block mb-1' /> Location : { course.isOnline ? "Online" : `${course.location}` } 
      </div>
      
    </div>
  )
}

export default CourseInfoCard
