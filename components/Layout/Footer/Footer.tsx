import { FooterProps } from './Footer.props';

export const Footer = ({children} : FooterProps): JSX.Element => {
    return (
        <div>
            {children}
            foot
        </div>
    );
};