import Image from 'next/image'
import { Julius_Sans_One, Inknut_Antiqua } from 'next/font/google'

const julius = Julius_Sans_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-primary'
})

const inknut = Inknut_Antiqua({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-secondary'
})


export default function Home() {
  return (
    <main>
      
    </main>
  )
}
