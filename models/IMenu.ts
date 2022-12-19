import { ETopLevelCategory } from "./IPage"

export interface Page {
    alias: string
    title: string
    _id: string
    category: string
}

export interface IMenuItem {
    _id: {
        secondCategory: string
    }
    isOpened?: boolean
    pages: Page[]
}

export interface IFirstLevelMenu {
    route: string
    name: string
    icon: JSX.Element
    id: ETopLevelCategory
}