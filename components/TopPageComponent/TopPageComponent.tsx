import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css'
import { Tag } from "../Tag/Tag";
import { Htag } from "../Htag/Htag";

export const TopPageComponent = ({firstCategory, products, page}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" sizer="m">{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
        </div>
    )
}