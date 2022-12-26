import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css'
import { Tag } from "../Tag/Tag";
import { Htag } from "../Htag/Htag";
import { HH } from "../HH/HH";
import { ETopLevelCategory } from "../../models/IPage";
import { Advantage } from "../Advantage/Advantage";

export const TopPageComponent = ({firstCategory, products, page}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" sizer="m">{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div className={styles.text}>
                {products && products.map(p => <div key={p._id}>{p.title}</div>)}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag sizer="m" color="red">hh.ru</Tag>
            </div>
            {firstCategory == ETopLevelCategory.Courses && page.hh && <HH {...page.hh} />}
            <Htag tag="h2">Преимущества</Htag>
            <Advantage advantages={page.advantages} />
        </div>
    )
}