import React from 'react';
import { FiFileText, FiVideo } from 'react-icons/fi';

const SubChapterCard = ({ subChapter }) => {
  return (
    <div className='flex flex-col bg-secondary shadow-sm rounded-lg p-6 w-full max-w-md'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full'>
          <h1 className='text-xl font-bold text-secondary '>{subChapter.id}</h1>
        </div>
        <h2 className='text-2xl font-semibold text-primary '>{subChapter.title}</h2>
      </div>

      <div className='flex flex-col mt-4 gap-4'>
        <a
          href={subChapter.pdf}
          className='flex items-center text-primary hover:underline transition'
          target='_blank' rel='noopener noreferrer'
        >
          <FiFileText className='mx-2' /> تحميل ملف الدرس
        </a>

        <a
          href={subChapter.video}
          className='flex items-center text-red-600 hover:underline transition'
          target='_blank' rel='noopener noreferrer'
        >
          <FiVideo className='mx-2' /> مشاهدة فيديو الدرس
        </a>
      </div>
    </div>
  );
};

export default SubChapterCard;
