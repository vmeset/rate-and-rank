import { FC } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.css'
import cn from 'classnames'

export const Textarea: FC<TextareaProps> = ({ className, ...props}): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props} />
    );
};