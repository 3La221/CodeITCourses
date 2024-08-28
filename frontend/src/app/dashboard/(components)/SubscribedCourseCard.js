import { Button } from '@/components/ui/button'
import React from 'react'

const SubscribedCourseCard = ({course}) => {


  return (

<div className="container flex  justify-center drop-shadow-lg "> 
      <div className="title_card text-lg bg-primary px-12 py-6 rounded-xl text-secondary gap-6 flex flex-col justify-evenly">
            <h1 className="font-bold text-3xl" >{course.title}</h1>
            <Button variant="secondary"> شاهد الوحدات </Button>
      </div>
</div>


  )
}

export default SubscribedCourseCard
