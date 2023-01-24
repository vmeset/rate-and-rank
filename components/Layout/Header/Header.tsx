import { HeaderProps } from './Header.props';
import styles from './Header.module.css'
import cn from 'classnames'
import Logo from '../logo2.svg'
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import {motion} from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({className, ...props} : HeaderProps): JSX.Element => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
      setIsOpen(false)
    }, [router])
    

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    }

    return (
        <header {...props} className={cn(className, styles.header)}>
            <Logo />
            <ButtonIcon apearance='white' icon='burger' onClick={() => setIsOpen(true)}/>
            <motion.div className={styles.mobileMenu} 
                variants={variants} initial='closed' animate={isOpen ? 'opened' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon className={styles.menuClose} apearance='white' icon='close'
                     onClick={() => setIsOpen(false)}
                />
            </motion.div>
        </header>
    );
};