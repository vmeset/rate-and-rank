import { FooterProps } from './Footer.props';
import styles from './Footer.module.css'
import cn from 'classnames'

export const Footer = ({children, className, ...props} : FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            {children}
            <p>OwlTop © 2020 - 2021 Все права защищены</p>
            <p>Пользовательское соглашение</p> 
            <p>Политика конфиденциальности</p> 
        </footer>
    );
};