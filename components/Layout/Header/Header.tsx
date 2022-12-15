import { HeaderProps } from './Header.props';

export const Header = ({children, ...props} : HeaderProps): JSX.Element => {
    return (
        <div  {...props}>
            {children}
            head
        </div>
    );
};