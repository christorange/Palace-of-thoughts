import { Dialog } from "@headlessui/react"
import { HTMLProps, FC } from "react"
import { cn } from "@/lib/utils"

interface ModalProps extends HTMLProps<HTMLElement> {
  open: boolean
  onClose: (open: boolean) => void
  title: string
  img: string
  feeling: string
  note: string
}

export const Modal: FC<ModalProps> = (props) => {

  const {open, onClose, title, img, feeling, note, className, ...rest} = props

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      className={cn(
        'z-10 inset-0 overflow-y-auto',
        className
      )}
    >
      <Dialog.Panel>
        <Dialog.Title className="">
          {title}
        </Dialog.Title>
      </Dialog.Panel>
    </Dialog>
  )
}
