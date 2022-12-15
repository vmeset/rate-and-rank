import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({children, ...props} : SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};