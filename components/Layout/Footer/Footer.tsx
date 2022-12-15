import { FooterProps } from './Footer.props';
import styles from './Footer.module.css'

export const Footer = ({children, ...props} : FooterProps): JSX.Element => {
    return (
        <div className={styles.foot} {...props}>
            {children}
            footer 
        </div>
    );
};