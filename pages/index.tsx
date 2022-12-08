import { Button, Htag } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag={'h1'}>text</Htag>
      <Htag tag={'h2'}>text</Htag>
      <Htag tag={'h3'}>text</Htag>

      <Button apearance='primary' arrow='down'>puCh</Button>
      <Button apearance='ghost' arrow='right'>puCh</Button>

    </>
  )
}
