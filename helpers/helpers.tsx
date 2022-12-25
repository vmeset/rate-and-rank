import { IFirstLevelMenu } from "../models/IMenu"
import { ETopLevelCategory } from "../models/IPage"
import CourseIcon from './icons/hat.svg'
import CloudIcon from './icons/cloud.svg'
import BookIcon from './icons/book.svg'
import BlockIcon from './icons/block.svg'

export const firstLevelMenu: IFirstLevelMenu[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: ETopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: ETopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon />, id: ETopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <BlockIcon />, id: ETopLevelCategory.Products}
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');