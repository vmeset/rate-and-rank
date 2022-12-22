import { SearchComponent } from '../../Search/SearchComponent';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({...props} : SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <SearchComponent />
            <Menu />
        </div>
    );
};