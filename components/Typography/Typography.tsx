import { FC } from "react";
import { TypographyProps } from "./Typography.props";
import styles from './Typography.module.css'
import cn from 'classnames'

export const Typography: FC<TypographyProps> = ({children, sizer = 'm', className, ...props}): JSX.Element => {
    return (
        <p {...props}
            className={cn(styles.typography, {
            [styles.small]: sizer == 's',
            [styles.medium]: sizer == 'm',
            [styles.large]: sizer == 'l'
        })}>
            {children}
        </p>
    );
};