import { Search } from '../../Search/Search';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo2.svg'
import cn from 'classnames'
import styles from './Sidebar.module.css'

export const Sidebar = ({className, ...props} : SidebarProps): JSX.Element => {
    return (
        <div className={cn(styles.sidebar, className)} {...props}>
            <div className={styles.logo}>
                <Logo />
                <span>VMESET</span>
            </div>
            <Search />
            <Menu />
        </div>
    )
}