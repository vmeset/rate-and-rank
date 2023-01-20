import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css'
import { Tag } from "../Tag/Tag";
import { Htag } from "../Htag/Htag";
import { HH } from "../HH/HH";
import { ETopLevelCategory } from "../../models/IPage";
import { Advantage } from "../Advantage/Advantage";
import { Sort } from "../Sort/Sort";
import { ESort } from "../Sort/Sort.props";
import { sortReducer } from "../../reducers/sort.reducer";
import { useEffect, useReducer } from "react";
import { Product } from "../Product/Product";

export const TopPageComponent = ({firstCategory, products, page}: TopPageComponentProps): JSX.Element => {

    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: ESort.Rating})

    const setSort = (sort: ESort) => {
        dispatchSort({type: sort})
    }

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products})
    }, [products])
    
    
    return (
        <>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" sizer="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div className={styles.text}>
                {sortedProducts && sortedProducts.map(p => <Product key={p._id} product={p} />)}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag sizer="m" color="red">hh.ru</Tag>
            </div>
            {firstCategory == ETopLevelCategory.Courses && page.hh && <HH {...page.hh} />}
            {page.advantages && page.advantages.length && 
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantage advantages={page.advantages} />
                </>
            }
            {page.seoText && <div className={styles.ceo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags && page.tags.map(t => (
                <Tag key={t} color='primary'>{t}</Tag>
            ))}
        </>
    )
}