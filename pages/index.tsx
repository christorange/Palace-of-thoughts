import Image from 'next/image'
import { Julius_Sans_One, Inknut_Antiqua } from 'next/font/google'
import { Header } from '@/components/Header'
import { Card } from '@/components/Card'

export const fontJulius = Julius_Sans_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-primary'
})

export const fontInknut = Inknut_Antiqua({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-secondary'
})

const data = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1]

export default function Home() {
  return (
    <main className='min-h-screen min-w-[800px]'>
      <Header />
      <section className='bg-primary-100 min-h-[calc(100vh-40px)] px-10 py-5 pb-24'>
        <h1 className='text-[46px] font-bold text-primary-400 text-end'>
          Palace of thoughts
        </h1>
        <div className='w-full h-[2px] bg-primary-400'></div>
        <section className='mt-6 grid grid-cols-5 w-full gap-5 place-items-center justify-center'>
          {
            data.map((item, index) => (
              <Card 
                key={index}
                title='test'
                img ='https://assets.vogue.com/photos/5c1952f0ae39a02cec3bd46a/4:3/w_1600%2Cc_limit/00-promo-galiano-getty.jpg'
                feeling='test'
                note='test'
                className='mt-2'
              />
            ))
          }
        </section>
      </section>
    </main>
  )
}
