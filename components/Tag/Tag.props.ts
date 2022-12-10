import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends 
DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    sizer?: 's' | 'm',
    color?: 'primary' | 'red' | 'green' | 'grey' | 'ghost',
    href?: string
}