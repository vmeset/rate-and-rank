import { Divider, Htag, withLayout } from '../components'
import axios from 'axios'
import { IMenuItem } from '../models/IMenu'
import { GetStaticProps } from 'next'
import { API } from '../helpers/api'
import { Typography } from '../components/Typography/Typography'
import Link from 'next/link'

function Home({menu, firstCategory}: HomeProps): JSX.Element {

  return (
    <>
      <Htag tag={'h1'}>Привет гость!</Htag>
      <Divider />
      <Typography>
        Я написал это приложение на 
        <Link target={'_blank'} href={'https://www.npmjs.com/package/react'}> React </Link>
        фреймворке 
        <Link target={'_blank'} href={'https://nextjs.org/'}> NextJS </Link>
        с использованием 
        <Link target={'_blank'} href={'https://www.npmjs.com/package/typescript'}> TypeScript</Link>
      </Typography>
      <Divider />
      <Typography>
        CSS на модулях, верстка на grid
      </Typography>
      <Divider />
      <Typography>
        Анимации релизовал на 
        <Link target={'_blank'} href={'https://www.npmjs.com/package/framer-motion'}> Framer-Motion</Link>
      </Typography>
      <Divider />
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