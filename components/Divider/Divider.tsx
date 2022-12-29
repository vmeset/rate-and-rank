import { FC } from 'react'
import styles from './Divider.module.css'
import { DividerProps } from './Divider.props'
import cn from 'classnames'

export const Divider: FC<DividerProps> = ({className, ...props}): JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)} {...props} />
)}