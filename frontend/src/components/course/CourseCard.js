import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"
import { Button } from "../ui/button"
import { RiStarSmileFill , RiStarSmileLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";


const CourseCard = ({course , setSelectedCourse , setIsModalOpen}) => {
  return (
    <div className=" flex flex-col  justify-between gap-0 w-[320px]  text-secondary ">
            <div className="course_img rounded-t-2xl overflow-hidden h-[200px]"> 
        <img
          className="w-full h-auto object-cover"
          src={course.cover}
          alt="course"
        />
      </div>

            <div className="flex flex-col gap-2 bg-card-foreground text-secondary py-4 px-2 rounded-b-2xl "> 
            
            <hr className="my-2 mx-3" />
            <Link href={`/courses/${course.id}`}>
            <div className="course_title text-center text-xl p-2   " >
                  {course.title}
            </div>
            </Link>
            

            {/* <hr className="my-2 mx-3" /> */}


            

            <div className="enroll w-full ">

                  <Button onClick={()=>{ setIsModalOpen(true) ; setSelectedCourse(course) }} className="bg-secondary text-primary hover:bg-primary-foreground w-full text-xl" >
                    Subscribe
                     </Button>


            </div>
            </div>

            
    </div>
  )
}

export default CourseCard
