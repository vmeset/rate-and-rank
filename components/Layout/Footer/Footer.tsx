import { FooterProps } from './Footer.props';
import styles from './Footer.module.css'
import cn from 'classnames'

export const Footer = ({children, className, ...props} : FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            {children}
            <p>Vmeset 2022 - 2023</p>
        </footer>
    );
};