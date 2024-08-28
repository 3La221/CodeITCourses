import SubChapterCard from '@/app/dashboard/(components)/SubChapterCard'
import React from 'react'

const SubChapters = () => {
      const subChapters = [
      { id: 1, title: 'الدرس 1' , pdf : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' , video : 'https://www.youtube.com/watch?v=6IwUl-4pAzc' },
      { id: 2, title: 'الدرس 2' , pdf : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' , video : 'https://www.youtube.com/watch?v=6IwUl-4pAzc' },
      ]
  return (
    <div className='flex flex-col justify-center items-center gap-6 w-full'>
            <h1 className="text-3xl font-bold"> دروس  </h1>
            {
            subChapters.map(subChapter => (
                  <SubChapterCard subChapter={subChapter}/>
            ))
            }

    </div>
  )
}

export default SubChapters
