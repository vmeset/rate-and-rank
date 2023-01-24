import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from './ButtonIcon.module.css'
import cn from 'classnames'

export const ButtonIcon = ({apearance, icon, className, ...props}: ButtonIconProps): JSX.Element => {

    const IconComponent = icons[icon]

    return (
        <button className={cn(styles.buttonIcon, className, {
                [styles.primary]: apearance == 'primary',
                [styles.white]: apearance == 'white',
            })}
            {...props}
        >
            <IconComponent />
        </button>
    )
}