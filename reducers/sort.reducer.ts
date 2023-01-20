import { IProduct } from '../models/IProduct';
import { ESort } from './../components/Sort/Sort.props';

export type SortActions = {type: ESort} | {type: 'reset', initialState: IProduct[]}

export interface SortReducerState {
    products: IProduct[],
    sort: ESort
}

export const sortReducer = (state: SortReducerState, action: SortActions) => {
    switch(action.type) {
        case ESort.Rating:
            return {
                sort: ESort.Rating,
                products: state.products.sort((a,b) => a.initialRating > b.initialRating ? -1 : 1)
            }
        case ESort.Price:
            return {
                sort: ESort.Price,
                products: state.products.sort((a,b) => a.price > b.price ? 1 : -1)
            }
        case 'reset':
            return {
                sort: ESort.Rating,
                products: action.initialState
            }
        default:
            throw new Error('Ошибка сортировки')
    }
}