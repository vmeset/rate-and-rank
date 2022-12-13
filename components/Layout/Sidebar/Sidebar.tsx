import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({children} : SidebarProps): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};