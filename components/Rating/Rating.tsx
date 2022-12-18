import { FC, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg'
import cn from 'classnames'
import styles from './Rating.module.css'

export const Rating: FC<RatingProps> = ({rating, setRating, isEditable = false, ...props}): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])
    

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rate: JSX.Element, i: number) => {
            return (
                <span key={i} className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: !!isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i+1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => clickHandler(i+1)}
                >
                    <StarIcon
                        
                    />
                </span>
            )
        })
        setRatingArray(updatedArray)
    }

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return
        }
        constructRating(i)
    }

    const clickHandler = (i: number) => {
        if(!setRating){
            return
        }
        setRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((rate, i) => (<span key={i}>{rate}</span>))}
        </div>
    );
};