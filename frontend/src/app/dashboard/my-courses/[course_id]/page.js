import React from 'react'
import ChapterCard from '../../(components)/ChapterCard'

const CourseChapters = () => {
  

  const chapters = [
    {
      id: 1,
      title: 'الدوال',
      courses: ['الدرس 1', 'الدرس 2', 'الدرس 3', 'الدرس 4']
    },
    {
      id: 2,
      title : 'المصفوفات',
      courses: ['الدرس 1', 'الدرس 2', 'الدرس 3', 'الدرس 4']
    },
    {
      id: 3,
      title: 'المتغيرات',
      courses: ['الدرس 1', 'الدرس 2', 'الدرس 3', 'الدرس 4']
    }
  ]
            
  return (
      
    <div className='flex flex-col justify-center items-center gap-6 w-full'>
      <h1 className="text-3xl font-bold"> وحدات  </h1>

  
      {
        chapters.map(chapter => (
          <ChapterCard chapter={chapter}/>
        ))}

      

    </div>

      

    
  )
}

export default CourseChapters
