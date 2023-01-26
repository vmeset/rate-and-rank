import { useState } from 'react'
import { Htag, withLayout } from '../components'
import axios from 'axios'
import { IMenuItem } from '../models/IMenu'
import { GetStaticProps } from 'next'
import { API } from '../helpers/api'

function Home({menu, firstCategory}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag={'h1'}>Home page</Htag>
      Приложение на NextJS13, React, TypeScript
      CSS на модулях, верстка на grid
      Анимации релизовал на Framer-Motion
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const {data: menu} = await axios.post<IMenuItem[]>(API.topPage.find, {firstCategory})
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