import { Search } from '../../Search/Search';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo2.svg'
import cn from 'classnames'
import styles from './Sidebar.module.css'
import { useRouter } from 'next/router';

export const Sidebar = ({className, ...props} : SidebarProps): JSX.Element => {

    const router = useRouter()

    return (
        <div className={cn(styles.sidebar, className)} {...props}>
            <div className={styles.logo}>
                <Logo onClick={() => router.push('/')} />
                <span>VMESET</span>
            </div>
            <Search />
            <Menu />
        </div>
    )
}