import {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog"

import React from 'react'
import { Button } from "../ui/button"
import axios from "axios"
import axiosService from "@/helpers/axios"
import { useRouter } from "next/navigation"
import { getUser } from "@/helpers/actions"

const ConfirmSubscribtionModal = ({isOpen ,setIsModalOpen , course  }) => {

      const  router = useRouter()
      const user = getUser()



      const handleSubscribe = ()=>{
        if(!user){
          localStorage.setItem("course_id", course.id)
        
            router.push("/login")
            return

        }
            axiosService.post(`${process.env.NEXT_PUBLIC_API_URL}student/subscribe/${course.id}/`)
            .then((res)=>{

              setIsModalOpen(false)
                  router.push("/dashboard/my-courses")
    

            })
            .catch((err)=>{
                  if(err.response.status === 400){
                        router.push("/dashboard/my-courses")
                  }
              console.log(err)
            })

      }

  return (
      <Dialog open={isOpen} onOpenChange={()=>{setIsModalOpen(false)}}>
          <DialogContent className="sm:max-w-md p-6">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl ">{course.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-center text-xl">
                  Are you sure you want to subscribe to this course?
            </DialogDescription>
         <DialogFooter className="sm:justify-start w-full">
              <DialogClose className="flex justify-center " asChild>
                <Button type="button" className="bg-red-600 hover:bg-red-700">
                  close
                </Button>
              </DialogClose>
              <Button onClick={()=> {

                  handleSubscribe()
                
              }

               }>
                  Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
      
  )
}

export default ConfirmSubscribtionModal
