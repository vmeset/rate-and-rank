import { ButtonProps } from "./Button.props";
import styles from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = ({apearance, children, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
                [styles.primary]: apearance == 'primary',
                [styles.ghost]: apearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right',
            })}>
                <ArrowIcon />
            </span>
            }
        </button>
    )
}