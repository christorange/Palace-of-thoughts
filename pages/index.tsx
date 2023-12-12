import { Julius_Sans_One, Inknut_Antiqua } from 'next/font/google'
import { Header } from '@/components/Header'
import { Card } from '@/components/Card'
import { GetServerSideProps } from 'next'
import { Client } from '@notionhq/client'
import { InferGetServerSidePropsType } from 'next'
import { DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Masonry from 'react-masonry-css'
import { Modal } from '@/components/Modal'
import { useState } from 'react'

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

interface ImgDataProps {
  title: string
  feeling: string
  note: string
  url: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const notion = new Client({
    auth: process.env.NOTION_TOKEN
  })

  const databaseId = process.env.NOTION_DATABASE_ID as string
  const res = await notion.databases.query({
    database_id: databaseId
  })

  const results = res.results as DatabaseObjectResponse[]
  let imgData: ImgDataProps[] = []

  results.map((item) => {
    imgData.push({
      // @ts-ignore
      title: item.properties.title.title[0].plain_text,
      // @ts-ignore
      feeling: item.properties.feeling.rich_text[0].plain_text,
      // @ts-ignore
      note: item.properties.note.rich_text[0].plain_text,
      // @ts-ignore
      url: item.properties.image.files[0].file.url
    })
  })

  return {
    props: {
      imgData
    }
  }
}

export default function Home(
  { imgData }: InferGetServerSidePropsType<typeof getServerSideProps>
){
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ImgDataProps>(imgData[0])

  const handleCardClick = (data: ImgDataProps) => {
    setModalOpen(true)
    setModalData(data)
  }

  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    1000: 4,
    768: 3,
    640: 2
  }

  return (
    <main className='min-h-screen min-w-[800px]'>
      <Header />
      <section className='bg-primary-100 min-h-[calc(100vh-40px)] px-10 py-5 pb-24'>
        <h1 className='text-[46px] font-bold text-primary-400 text-end'>
          Palace of thoughts
        </h1>
        <div className='w-full h-[2px] bg-primary-400'></div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='flex w-auto gap-4'
          columnClassName='bg-clip-padding'
        >
          {
            imgData.map((e: ImgDataProps, index: number) => (
              <Card
                id='card'
                key={index}
                title={e.title}
                img ={e.url}
                feeling={e.feeling}
                note={e.note}
                className='mt-5'
                onClick={() => handleCardClick(e)}
              />
            ))
          }
        </Masonry>
      </section>
      <Modal
        title={modalData.title}
        img={modalData.url}
        feeling={modalData.feeling}
        note={modalData.note}
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
      />
    </main>
  )
}
