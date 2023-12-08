import { Dialog, Transition } from "@headlessui/react"
import { HTMLProps, FC, Fragment } from "react"
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
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 max-w-4xl" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-md transform overflow-hidden bg-white 
                align-middle shadow-xl transition-all border-2 border-primary-400"
              >
                <section className="bg-primary-200 pt-4 pb-4 border-b-2 border-b-primary-400">
                  <Dialog.Title
                    as="h1"
                    className="text-[42px] font-bold text-center leading-6 font-Inknut text-primary-400"
                    >
                    {title}
                  </Dialog.Title>
                </section>
                <img src={img} className="px-2"/>
                <section className="p-4 pb-8">
                  <p className="text-start text-3xl font-bold text-primary-400 mb-6">
                    Feeling: {feeling}
                  </p>
                  <p className="text-start text-3xl font-bold text-primary-400">
                    Note:
                  </p>
                  <p className="text-start">
                    {note}
                  </p>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
