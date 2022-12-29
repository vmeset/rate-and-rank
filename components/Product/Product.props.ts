import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../models/IProduct';

export interface ProductProps extends 
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        product: IProduct
}