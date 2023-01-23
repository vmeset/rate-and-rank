import { CardProps } from "./Card.props";
import styles from './Card.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(({color = 'white', className, children, ...props}:CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div {...props}
            ref={ref}
            className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}>
            {children}
        </div>
    )
})
Card.displayName = "Card"