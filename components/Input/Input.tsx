import { FC } from "react";
import { InputProps } from "./Input.props";
import styles from './Input.module.css'
import cn from 'classnames'

export const Input: FC<InputProps> = ({ className, ...props}): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} {...props} />
    );
};