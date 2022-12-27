import { useState } from 'react'
import { Button, Htag, Rating, Tag, Card, withLayout, Input, Textarea } from '../components'
import axios from 'axios'
import { IMenuItem } from '../models/IMenu'
import { GetStaticProps } from 'next'

function Home({menu, firstCategory}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
    <>

      <Input placeholder='Имя' />

      <Textarea />
      <Htag tag={'h1'}>text</Htag>
      <Htag tag={'h2'}>text</Htag>
      <Htag tag={'h3'}>text</Htag>

      <Button apearance='primary' arrow='down'>puCh</Button>
      <Button apearance='ghost' arrow='right'>puCh</Button>

      <Card color='white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero molestias aliquid ipsum laborum et dolore tempore hic? Fugiat recusandae nulla similique officia eveniet animi at. Praesentium laudantium iure alias!
      </Card>

      <Tag>tagTeam</Tag>
      <Tag href='ya.ru'>tagTeam</Tag>
      <Tag color='primary'>tagTeam</Tag>
      <Tag color='red'>tagTeam</Tag>
      <Tag sizer='s'>tagTeam</Tag>
      <Tag sizer='m'>tagTeam</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory})
  return {
    props: {
      menu,
      firstCategory
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[],
  firstCategory: number
}