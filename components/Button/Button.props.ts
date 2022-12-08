import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends 
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        apearance: 'primary' | 'ghost',
        arrow?: 'down' | 'right' | 'none',
        children: ReactNode
}