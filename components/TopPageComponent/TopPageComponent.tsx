import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css'
import { Tag } from "../Tag/Tag";
import { Htag } from "../Htag/Htag";
import { HH } from "../HH/HH";
import { ETopLevelCategory } from "../../models/IPage";
import { Advantage } from "../Advantage/Advantage";
import { Typography } from "../Typography/Typography";
import { Sort } from "../Sort/Sort";
import { ESort } from "../Sort/Sort.props";

export const TopPageComponent = ({firstCategory, products, page}: TopPageComponentProps): JSX.Element => {
    return (
        <>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" sizer="m">{products.length}</Tag>}
                <Sort sort={ESort.Rating} setSort={() => alert('sort')} />
            </div>
            <div className={styles.text}>
                {products && products.map(p => <div key={p._id}>{p.title}</div>)}
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