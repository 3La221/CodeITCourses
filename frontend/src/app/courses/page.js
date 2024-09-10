"use client";

import CourseCard from '@/components/course/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoSearch } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from 'react';
import axios from 'axios';
import SubscribedCourseCard from '../dashboard/(components)/SubscribedCourseCard';
import ConfirmSubscribtionModal from '@/components/modals/ConfirmSubscribtionModal';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  
  const subjects = [
    { id: "python", label: "Python Development" },
    { id: "web", label: "Web Development" },
    { id: "java", label: "Java Programming" },
    { id: "cybersecurity", label: "Cybersecurity" },
  ];

  const levels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  const modes = [
    { id: "online", label: "Online (Live)" },
    { id:"onlineRecorded", label: "Online (Recorded)" },
    { id: "offline", label: "Offline" },
  ];

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}course`)
      .then((res) => {
        console.log(res.data);
        setCourses(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-slide-up ${isVisible ? 'visible' : ''} px-4 sm:px-6 lg:px-8`}>

      <div className="flex flex-col gap-12 justify-center items-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center">
          Courses
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 w-full">
          {/* Filters */}
          {/* <div className="flex flex-col gap-4 w-full lg:w-1/4">
            <div className="flex gap-3 mb-4">
              <Input placeholder="Search courses" className="py-2 px-4 w-full" />
              <Button className="px-6 py-2 flex items-center gap-2">
                Search <IoSearch size={20} />
              </Button>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Levels</h2>
              <hr className="my-2" />
              <div className="flex flex-col gap-2">
                {levels.map((level) => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <Checkbox className="rounded-sm" id={level.id} />
                    <label htmlFor={level.id} className="text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer font-light leading-none">
                      {level.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Mode</h2>
              <hr className="my-2" />
              <div className="flex flex-col gap-2">
                {modes.map((mode) => (
                  <div key={mode.id} className="flex items-center space-x-2">
                    <Checkbox className="rounded-sm" id={mode.id} />
                    <label htmlFor={mode.id} className="text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer font-light leading-none">
                      {mode.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Courses */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} setIsModalOpen={setIsModalOpen} setSelectedCourse={setSelectedCourse} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <ConfirmSubscribtionModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} course={selectedCourse} />}
    </div>
  );
};

export default Courses;
