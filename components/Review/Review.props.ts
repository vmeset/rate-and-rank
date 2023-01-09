import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewModel } from '../../models/IProduct';

export interface ReviewProps extends 
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel
}