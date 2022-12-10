import { FC } from "react";
import { TagProps } from "./Tag.props";
import cn from 'classnames'
import styles from './Tag.module.css'

export const Tag: FC<TagProps> = ({children, sizer = 's', className, color = 'ghost', href, ...props}): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: sizer == 's',
                [styles.medium]: sizer == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        >
            { href 
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};