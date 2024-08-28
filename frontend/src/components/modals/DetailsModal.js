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
import { Button } from "@/components/ui/button"



const DetailsModal = ({text , isOpen , setIsModalOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={()=>{setIsModalOpen(false)}}>
          <DialogContent className="sm:max-w-md p-6">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl ">Code IT</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-center text-xl">
                  {text}
            </DialogDescription>
         <DialogFooter className="sm:justify-start w-full">
              <DialogClose className="flex justify-center " asChild>
                <Button type="button" className="bg-red-600 hover:bg-red-700">
                  Close
                </Button>
              </DialogClose>
              
            </DialogFooter>
          </DialogContent>
      </Dialog>
  )
}

export default DetailsModal
