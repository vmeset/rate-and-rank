import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import cn from 'classnames'
import styles from './Menu.module.css'

import { AppContext } from '../../../context/app.context'
import { IFirstLevelMenu, Page } from '../../../models/IMenu'
import { ETopLevelCategory } from '../../../models/IPage'

import CourseIcon from './icons/hat.svg'
import CloudIcon from './icons/cloud.svg'
import BookIcon from './icons/book.svg'
import BlockIcon from './icons/block.svg'

const firstLevelMenu: IFirstLevelMenu[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: ETopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: ETopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon />, id: ETopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <BlockIcon />, id: ETopLevelCategory.Products}
]

export const Menu = (): JSX.Element => {

    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const router = useRouter()

    const openSecondLvl = (secondCategory:string) => {
        setMenu && setMenu(menu.map(m => {
            if(m._id.secondCategory == secondCategory){
                m.isOpened = !m.isOpened
            }
            return m
        }))
    }

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
    
    const buildSecondLvl = (route: string) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLvl}
                                onClick={() => openSecondLvl(m._id.secondCategory)}
                            >{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLvlSubMenu, {
                                [styles.secondLvlActive]: m.isOpened
                            })}>
                                {buildThirdLvl(m.pages, route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    const buildThirdLvl = (pages: Page[], route: string) => {
        return (
            pages.map(p => {
                return (
                    <Link href={`/${route}/${p.alias}`} key={p.alias}>
                        <p className={cn(styles.thirdLvl, {
                                [styles.thirdLvlActive]: router.asPath.split('/')[2] == p.alias
                            })}
                        >
                            - {p.category}
                        </p>
                    </Link>
                )
            })
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