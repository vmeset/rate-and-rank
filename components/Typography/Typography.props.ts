import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TypographyProps extends 
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    sizer?: 's' | 'm' | 'l',
}