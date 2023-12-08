import { HTMLProps, FC, useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Modal } from './Modal'
interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string
  img: string
  feeling: string
  note: string
}

export const Card: FC<CardProps> = (props) => {

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const {img, title, feeling, note, className, ...rest} = props

  return (
    <div
      {...rest}
      onClick={() => setModalOpen(true)}
      className={cn(
        'border border-primary-400 hover:scale-105 transition-all duration-250 ease-in-out hover:cursor-pointer grayscale hover:grayscale-0 active:scale-100' ,
        className
      )}

    >
      <div className='text-center bg-primary-200 pt-2'>
        <p className='text-border-dark font-Inknut border-b border-primary-400 text-lg'>
          {title}
        </p>
      </div>
      <img
        src={img} 
        alt={title} 
        className='duration-500'
      />
      <Modal
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
        title={title}
        img={img}
        feeling={feeling}
        note={note}
      />
    </div>
  )
}
