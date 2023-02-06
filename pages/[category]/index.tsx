import axios from "axios"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { Divider, withLayout } from "../../components"
import { Typography } from "../../components/Typography/Typography"
import { API } from "../../helpers/api"
import { firstLevelMenu } from "../../helpers/helpers"
import { IMenuItem } from "../../models/IMenu"

const Category = ({firstCategory, menu}: CategoryProps): JSX.Element => {

    return (
        <div>
            <Divider />
            <Typography>Выберите в меню подкатегорию</Typography>
            <Divider />
            <Typography>Категория "Курсы" доступна полностью, другие категории в процессе наполнения и могут отображаться некорректно</Typography>
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
    const {data: menu} = await axios.post<IMenuItem[]>(API.topPage.find, 
        {firstCategory: firstCategoryItem.id})
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