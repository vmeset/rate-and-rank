import { FC } from "react";
import { ProductProps } from "./Product.props";
import styles from './Product.module.css'
import cn from 'classnames'

export const Product: FC<ProductProps> = ({className, ...props}): JSX.Element => {
    return (
        <div className={cn(styles.product, )} {...props}>
            
        </div>
    );
};