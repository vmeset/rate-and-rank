import { Htag, withLayout } from "../components"

function Error404(): JSX.Element {
  
    return (
      <>
        <Htag tag={'h1'}>Ошибка 404</Htag>
      </>
    )
  }
  
  export default withLayout(Error404)