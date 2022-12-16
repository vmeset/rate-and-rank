import { withLayout } from "../../components";
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { IMenuItem } from "../../models/IMenu";
import { IPage } from "../../models/IPage";
import { ParsedUrlQuery } from "querystring";
import { IProduct } from "../../models/IProduct";

const firstCategory = 0

const Course = ({menu, page, products}: CourseProps): JSX.Element => {
    return (
        <>
            {menu.flatMap(m => m.pages.map(p => <p>{'/courses/' + p.alias}</p>))}
        </>
    );
};

export default withLayout(Course)

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<IMenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory}
    )
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true
        }
    }
    const {data: menu} = await axios.post<IMenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory}
    )
    const {data: page} = await axios.get<IPage>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    )
    const {data: products} = await axios.post<IProduct[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {category: page.category, limit: 10})

    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    }
}

interface CourseProps extends Record<string, unknown> {
    menu: IMenuItem[],
    firstCategory: number,
    page: IPage,
    products: IProduct[]
}