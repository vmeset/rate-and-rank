import { ForwardedRef, forwardRef, useRef, useState } from "react"
import { ProductProps } from "./Product.props"
import styles from './Product.module.css'
import cn from 'classnames'
import { Card } from "../Card/Card"
import { Rating } from "../Rating/Rating"
import { Tag } from "../Tag/Tag"
import { Button } from "../Button/Button"
import { declOfNum, priceRu } from "../../helpers/helpers"
import { Divider } from "../Divider/Divider"
import Image from "next/image"
import { Review } from "../Review/Review"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import {motion} from 'framer-motion'

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({product, className, ...props}: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [isRevOpen, setIsRevOpen] = useState(false)
    const reviewRef = useRef<HTMLDivElement>(null)

    const variants = {
        visible: {opacity: 1, height: 'auto'},
        hidden: {opacity: 0, height: 0}
    }

    const scrollToReview = () => {
        setIsRevOpen(true)
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
                        alt={product.title} 
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {/* {priceRu(product.price)} */}
                    {product.price}
                    {product.oldPrice &&
                        <Tag color='green' sizer="s" className={styles.oldPrice}>
                            {/* {priceRu(product.price - product.oldPrice)} */}
                            {(product.price - product.oldPrice)}
                        </Tag>
                    }
                </div>
                <div className={styles.credit}>
                    {/* {priceRu(product.credit)}/<span className={styles.month}>мес</span> */}
                    {product.credit}/<span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}>
                    <Rating rating={product.reviewAvg ?? product.initialRating} />
                </div>
                <div className={styles.tags}>
                    {product.categories.map(cat => <Tag className={styles.category} key={cat}>{cat}</Tag>)}
                </div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a href="#ref" onClick={scrollToReview}>
                        {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsVal}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button apearance="primary">Узнать подробнее</Button>
                    <Button apearance="ghost" 
                        arrow={isRevOpen ? 'down' : 'right'}
                        className={styles.reviewBtn}
                        onClick={() => setIsRevOpen(!isRevOpen)}
                    >
                        Читать отзывы
                    </Button>
                </div>
            </Card>
            <motion.div animate={isRevOpen ? 'visible' : 'hidden'} 
                variants={variants} initial={'hidden'}>
                <Card color="blue" className={styles.reviews} ref={reviewRef}>
                    {product.reviews.map(rev => 
                        <div key={rev._id}>
                            <Review review={rev} />
                            <Divider />
                        </div>
                    )}
                    <ReviewForm isOpened={isRevOpen} productId={product._id} />
                </Card>
            </motion.div>
        </div>
    )
}))