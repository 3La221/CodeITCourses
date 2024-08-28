"use client"

import CancelSubscribtionModal from '@/components/modals/CancelSubscribtionModal';
import DetailsModal from '@/components/modals/DetailsModal';
import { Button } from '@/components/ui/button';
import axiosService from '@/helpers/axios';
import React, { useEffect , useState } from 'react';

const MyCourses = () => {
  const courses = [
    { id: 1, title: 'Course 1', status: 'Paid', diplomaLink: '#', isCancelable: false },
    { id: 2, title: 'Course 2', status: 'Pending', diplomaLink: null, isCancelable: true },
    { id: 3, title: 'Course 3', status: 'Done', diplomaLink: '#', isCancelable: false },
    // Add more courses as needed
  ];

  const [ myCourses , setMyCourses ] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const fetchMyCourses = async () => {
    axiosService.get(`${process.env.NEXT_PUBLIC_API_URL}student/subscribtions/`)
    .then((res)=>{
      
      setMyCourses(res.data)
    })
    .catch((err)=>{
      console.log(err) } )
  }

  useEffect(()=>{

    fetchMyCourses()
    
    

  },[])

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Courses</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-secondary text-left">
            <th className="p-2 border-b">Course Title</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b">Diploma</th>
            <th className="p-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {myCourses.map((myCourse) => (
            <tr key={myCourse.id} className="border-b">
              <td className="p-2">{myCourse.course.title}</td>
              <td className={`p-2 font-medium ${myCourse.status === 'Status.PAID' ? 'text-green-600' : myCourse.status === 'Status.PENDING' ? 'text-yellow-600' : 'text-blue-600'}`}>
                {myCourse.status.split('.')[1]}
              </td>
              <td className="p-2">
                {myCourse.diploma ? (
                  <a
                    href={course.diploma}
                    className="text-blue-500 hover:underline"
                  >
                    Download Diploma
                  </a>
                ) : (
                  'Not Available'
                )}
              </td>
              <td className="p-2">
                {myCourse.status === "Status.PENDING" && (
                  <div className='flex gap-2'>

                <button
                    onClick={() => {
                      setSelectedCourse(myCourse);
                      setIsModalOpen(true);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>

                  <button
                  onClick={() => {
                    setIsDetailsModalOpen(true);
                  }}
                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-slate-700 dark:hover:bg-slate-600">
                  Click Here to Pay

                  </button>
                 

                  </div>
                  
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <CancelSubscribtionModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} course={selectedCourse} fetchMyCourses={fetchMyCourses} />}
      {isDetailsModalOpen && <DetailsModal isOpen={isDetailsModalOpen} setIsModalOpen={setIsDetailsModalOpen} text={`Contact The Admin in Whatsapp : 0552987732`} />}
    </div>
  );
};

export default MyCourses;
