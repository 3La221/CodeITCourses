import React from 'react'
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
import { Button } from '../ui/button'
import axiosService from '@/helpers/axios'


const CancelSubscribtionModal = ({isOpen , setIsModalOpen , course , fetchMyCourses }) => {

      const handleCancel = ()=>{
            axiosService.delete(`${process.env.NEXT_PUBLIC_API_URL}subscribtion/${course.id}/`)
            .then((res)=>{
                  console.log("result",res.data)
                  setIsModalOpen(false)
                  fetchMyCourses()
                  
                  
                  
            })
            .catch((err)=>{
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
                  Are you sure you want to Cancel the Subscribtions?
            </DialogDescription>
         <DialogFooter className="sm:justify-start w-full">
              <DialogClose className="flex justify-center " asChild>
                <Button type="button" >
                  Close
                </Button>
              </DialogClose>
              
              <Button onClick={handleCancel} className="bg-red-600 hover:bg-red-700">
                  Cancel Subscribtion
              </Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
  )
}

export default CancelSubscribtionModal
