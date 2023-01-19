import { TopPageComponent, withLayout } from "../../components";
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { IMenuItem } from "../../models/IMenu";
import { ETopLevelCategory, IPage } from "../../models/IPage";
import { ParsedUrlQuery } from "querystring";
import { IProduct } from "../../models/IProduct";
import { firstLevelMenu } from "../../helpers/helpers";
import { API } from "../../helpers/api";

const Alias = ({page, products, firstCategory}: AliasProps): JSX.Element => {
    return (
        <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
    );
};

export default withLayout(Alias)

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = []
    for(const item of firstLevelMenu) {
        const {data: menu} = await axios.post<IMenuItem[]>(
            API.topPage.find, {firstCategory: item.id}
        )
        paths = paths.concat(menu.flatMap(m => m.pages.map(page => `/${item.route}/${page.alias}`)))
    }
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<AliasProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.category) || {id: 0}
    if(!params) {
        return {
            notFound: true
        }
    }
    try {
        const {data: menu} = await axios.post<IMenuItem[]>(
            API.topPage.find, {firstCategory: firstCategoryItem.id}
        )
        if( menu.length == 0) {
            return {
                notFound: true
            }
        }
        const {data: page} = await axios.get<IPage>(
            API.topPage.byAlias + params.alias
        )
        const {data: products} = await axios.post<IProduct[]>(API.product.find, {category: page.category, limit: 10})
    
        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
}

interface AliasProps extends Record<string, unknown> {
    menu: IMenuItem[],
    firstCategory: ETopLevelCategory,
    page: IPage,
    products: IProduct[]
}