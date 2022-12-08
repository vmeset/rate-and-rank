import { ButtonProps } from "./Button.props";
import styles from './Button.module.css'
import cn from 'classnames'

export const Button = ({apearance, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
                [styles.primary]: apearance == 'primary',
                [styles.ghost]: apearance == 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    )
}