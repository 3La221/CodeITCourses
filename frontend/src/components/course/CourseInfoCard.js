import React from 'react'
import { CiTimer } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdNumbers } from "react-icons/md";

const CourseInfoCard = ({ course }) => {
  return (
    <div className='flex flex-col bg-primary-foreground text-primary gap-4 rounded-xl w-full h-auto p-6'>
      
      <div className='text-left text-xl'>
      <CiTimer className='inline-block mb-1' /> Duration: {course.duration} Week 
      </div>

      <div className='text-left text-xl'>
      <MdNumbers className='inline-block mb-1' />   Number of  Sessions Per Week : {course.nbr_sessions} 
      </div>

      <div className='text-left text-xl'>
      <IoLocationSharp className='inline-block mb-1' /> 
      <a href='https://maps.app.goo.gl/vXaLLQM8ojQSTEqB9' className='border-b-2' >
      Location : { course.isOnline ? "Online" : `${course.location}` }
      </a>
      </div>
      
    </div>
  )
}

export default CourseInfoCard
