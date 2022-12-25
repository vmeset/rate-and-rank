import axios from "axios"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { withLayout } from "../../components"
import { firstLevelMenu } from "../../helpers/helpers"
import { IMenuItem } from "../../models/IMenu"

const Category = ({firstCategory}: CategoryProps): JSX.Element => {
    return (
        <div>
            cat:=:{firstCategory}
        </div>
    )
}

export default withLayout(Category)

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.category)
    if(!firstCategoryItem) {
        return {
            notFound: true
        }
    }
    const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory: firstCategoryItem.id})
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id
      },
    }
  }
  
  interface CategoryProps extends Record<string, unknown> {
    menu: IMenuItem[],
    firstCategory: number
  }