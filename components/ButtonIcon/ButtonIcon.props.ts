import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './up.svg'
import close from './X.svg'
import burger from './burger.svg'

export const icons = {
    up,
    close,
    burger
}

export type IconName = keyof typeof icons

export interface ButtonIconProps extends 
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        apearance: 'primary' | 'white',
        icon: IconName
}