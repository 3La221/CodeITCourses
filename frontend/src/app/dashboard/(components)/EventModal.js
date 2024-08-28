import { Copy  , ExternalLink} from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCallback } from "react"



const EventModal = ({ isOpen, onClose, event }) => {
      const handleCopy = useCallback(() => {
            if (event && event.url) {
              navigator.clipboard.writeText(event.url)
                .then(() => {
                  alert('Link copied to clipboard!');
                })
                .catch((err) => {
                  console.error('Failed to copy text: ', err);
                });
            }
          }, [event]);


      const handleOpenLink = useCallback(() => {
            if (event && event.url) {
              window.open(event.url, '_blank');
            }
          }, [event]);

      return (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-right mr-12">رابط البث</DialogTitle>
             
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue={event ? event.url : ''}
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3" onClick={handleCopy} >
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
              <Button  type="button" size="sm" className="px-3" onClick={handleOpenLink}  >
                  <span className="sr-only">Open</span>
                  <ExternalLink className="h-4 w-4" />   
              </Button>
            </div>
            <DialogFooter className="sm:justify-start w-full">
              <DialogClose className="flex justify-center " asChild>
                <Button type="button" className="bg-red-600 hover:bg-red-700">
                  اغلق
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    };

export default EventModal