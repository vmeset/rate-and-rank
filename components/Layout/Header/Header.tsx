import { HeaderProps } from './Header.props';

export const Header = ({children} : HeaderProps): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};