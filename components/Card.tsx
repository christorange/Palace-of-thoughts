import { HTMLProps, FC, useState } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from "framer-motion"
interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string
  img: string
  feeling: string
  note: string
}

export const Card: FC<CardProps> = (props) => {

  const {img, title, feeling, note, className, ...rest} = props

  return (
    <div
      {...rest}
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
      <AnimatePresence>
        <motion.img
          key={img}
          src={img} 
          alt={title}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className='duration-500'
        />
      </AnimatePresence>
    </div>
  )
}
