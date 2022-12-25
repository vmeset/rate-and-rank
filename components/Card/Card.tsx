import { FC } from "react";
import { CardProps } from "./Card.props";
import styles from './Card.module.css'
import cn from 'classnames'

export const Card: FC<CardProps> = ({color = 'white', className, children, ...props}): JSX.Element => {
    return (
        <div {...props}
            className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}>
            {children}
        </div>
    );
};