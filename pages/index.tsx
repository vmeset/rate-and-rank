import { useState } from 'react'
import { Button, Htag, Rating, Tag, Typography, withLayout } from '../components'

function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag={'h1'}>text</Htag>
      <Htag tag={'h2'}>text</Htag>
      <Htag tag={'h3'}>text</Htag>

      <Button apearance='primary' arrow='down'>puCh</Button>
      <Button apearance='ghost' arrow='right'>puCh</Button>

      <Typography sizer='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero molestias aliquid ipsum laborum et dolore tempore hic? Fugiat recusandae nulla similique officia eveniet animi at. Praesentium laudantium iure alias!
      </Typography>

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