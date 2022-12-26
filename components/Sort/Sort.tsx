import { ESort, SortProps } from "./Sort.props"
import SortIcon from './Sort.svg'
import cn from "classnames"
import styles from './Sort.module.css'

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={styles.sort} {...props}>
            <span onClick={() => setSort(ESort.Rating)}
                className={cn({
                    [styles.active]: sort == ESort.Rating
                })}
            >
                <SortIcon className={styles.sortIcon} />По рейтингу
            </span>
            <span onClick={() => setSort(ESort.Price)}
                className={cn({
                    [styles.active]: sort == ESort.Price
                })}
            >
                <SortIcon className={styles.sortIcon} />По цене
            </span>
        </div>
    )
}