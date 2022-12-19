import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { IFirstLevelMenu, Page } from '../../../models/IMenu'
import { ETopLevelCategory } from '../../../models/IPage'
import CourseIcon from './icons/hat.svg'
import CloudIcon from './icons/cloud.svg'
import BookIcon from './icons/book.svg'
import BlockIcon from './icons/block.svg'

import cn from 'classnames'
import styles from './Menu.module.css'
import Link from 'next/link'

const firstLevelMenu: IFirstLevelMenu[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: ETopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: ETopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon />, id: ETopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <BlockIcon />, id: ETopLevelCategory.Products}
]

export const Menu = (): JSX.Element => {

    const {menu, firstCategory, setMenu} = useContext(AppContext)

    const buildFirstLvl = () => {
        return (
            <>
                {firstLevelMenu.map(m => 
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                                <div className={cn(styles.firstLvl, {
                                    [styles.firstLvlActive]: m.id == firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLvl(m.route)}
                    </div>
                )}
            </>
        )
    }
    const buildSecondLvl = (menuItem: string) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => 
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLvl}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLvl, {
                            [styles.secondLvlActive]: m.isOpened
                        })}>
                            {buildThirdLvl(m.pages, menuItem)}
                        </div>
                    </div>    
                )}
            </div>
        )
    }
    const buildThirdLvl = (pages: Page[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} key={p.alias}>
                    <p className={cn(styles.thirdLvl, {
                            [styles.thirdLvlActive]: false
                        })}
                    >
                        {p.category}
                    </p>
                </Link>
            ))
        )
    }

    return (
        <div>
            <ul>
                {buildFirstLvl()}
            </ul>
        </div>
    )
}