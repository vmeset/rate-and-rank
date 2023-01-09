import { FC } from "react";
import { ReviewProps } from "./Review.props";
import styles from './Review.module.css'
import cn from 'classnames'
import UserIcon from './user.svg'
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'
import { Rating } from "../Rating/Rating";

export const Review: FC<ReviewProps> = ({review, className, ...props}): JSX.Element => {

    const {description, name, rating, createdAt, title} = review

    return (
        <div {...props} className={cn(styles.review, className)}>
            <UserIcon className={styles.user} />
            <div>
                <span className={styles.name}>{name}: </span>
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                <span className={styles.date}>
                    {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
                </span>
                <span className={styles.date}>
                    <Rating rating={rating} />
                </span>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};