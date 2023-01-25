import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {motion} from 'framer-motion'

import cn from 'classnames'
import styles from './Menu.module.css'

import { AppContext } from '../../../context/app.context'
import { Page } from '../../../models/IMenu'

import { firstLevelMenu } from '../../../helpers/helpers'

export const Menu = (): JSX.Element => {

    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const router = useRouter()

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0}
    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 33
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }

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
                            <motion.div 
                                className={cn(styles.secondLvlSubMenu)}
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                            >
                                {buildThirdLvl(m.pages, route)}
                            </motion.div>
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
                    <motion.div key={p.alias} variants={variantsChildren}>
                        <Link href={`/${route}/${p.alias}`}>
                            <span className={cn(styles.thirdLvl, {
                                    [styles.thirdLvlActive]: router.asPath.split('/')[2].split('#')[0] == p.alias
                                })}
                            >
                                - {p.category}
                            </span>
                        </Link>
                    </motion.div>
                )
            })
        )
    }

    return (
        <div className={styles.menu}>
            <ul>
                {buildFirstLvl()}
            </ul>
        </div>
    )
}