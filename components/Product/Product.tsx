import { FC } from "react"
import { ProductProps } from "./Product.props"
import styles from './Product.module.css'
import cn from 'classnames'
import { Card } from "../Card/Card"
import { Rating } from "../Rating/Rating"
import { Tag } from "../Tag/Tag"
import { Button } from "../Button/Button"
import { priceRu } from "../../helpers/helpers"

export const Product: FC<ProductProps> = ({product, className, ...props}): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice &&
                    <Tag color='green' sizer="s" className={styles.oldPrice}>
                        {priceRu(product.price - product.oldPrice)}
                    </Tag>
                }
            </div>
            <div className={styles.credit}>
                {priceRu(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map(cat => <Tag key={cat}>{cat}</Tag>)}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
            <div className={styles.hr}><hr /></div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>fi4i</div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                    <div>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>
                <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>
            <div className={styles.hr}><hr /></div>
            <div className={styles.actions}>
                <Button apearance="primary">Узнать подробнее</Button>
                <Button apearance="ghost" arrow="right">Читать отзывы</Button>
            </div>
        </Card>
    )
}