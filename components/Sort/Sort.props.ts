import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: ESort
    setSort: (sort: ESort) => void
}

export enum ESort {
    Rating,
    Price
}