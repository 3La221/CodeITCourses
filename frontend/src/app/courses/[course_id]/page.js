"use client";
import { RiStarSmileFill, RiStarSmileLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import CourseInfoCard from "@/components/course/CourseInfoCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosService from "@/helpers/axios";
import { useRouter } from "next/navigation";
import ConfirmSubscribtionModal from "@/components/modals/ConfirmSubscribtionModal";

const Course = () => {
  const {course_id} = useParams();

  const [course , setCourse] = useState({})
  const [modules , setModules] = useState([])
  const [to_learn , setToLearn] = useState([])

  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}course/${course_id}`)
    .then((res)=>{
      console.log("Course",res.data)
      setCourse(res.data)
      setModules(res.data.modules)
      setToLearn(res.data.to_learn)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 md:p-12">

      <div className="flex flex-col md:flex-row justify-center md:justify-evenly">

        <div className="flex flex-col w-full md:w-1/2">

          {/* Title */}
          <h1 className="text-2xl md:text-3xl my-4">
            {course.title}
          </h1>

          <CourseInfoCard course={course} />

          <div className="w-full mt-2">
            <Button onClick={()=>{setIsModalOpen(true)}} className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="h-[250px] md:h-[400px] w-full md:w-[600px] overflow-hidden mt-4 md:mt-0">
          <img
            className="h-full w-full object-cover rounded-md"
            src={course.cover}
            alt="Python Development Course"
          />
        </div>

      </div>

      {/* What You Will Learn */}
      <div className="flex flex-col justify-center items-center w-full gap-6 mt-12">
        <h2 className="text-3xl md:text-4xl">What You Will Learn</h2>
        <ul className="list-disc pl-6">
          {to_learn.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>

      {/* Chapters */}
      <div className="flex flex-col justify-center items-center w-full gap-6 mt-12">
        <h1 className="text-3xl md:text-4xl">
          Course Modules
        </h1>

        {modules.map((chapter,key) => {
          return (
            <div key={key} className="w-[90%] md:w-[75%] h-[50px] cursor-pointer bg-secondary rounded-md flex items-center text-lg md:text-2xl p-5">
              <span className="mr-2">{key}.</span> {chapter}
            </div>
          );
        })}
      </div>

      {isModalOpen && <ConfirmSubscribtionModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} course={course} />}

    </div>
  );
}

export default Course;
