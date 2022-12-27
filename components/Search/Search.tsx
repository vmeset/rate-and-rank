import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import cn from 'classnames'
import { FC, useState } from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import LensIcon from './lens.svg'
import { useRouter } from 'next/router'

export const Search: FC<SearchProps> = ({className, ...props}):JSX.Element => {

    const [query, setQuery] = useState<string>('')
    const router = useRouter()
    
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: query
            }
        })
        setQuery('')
    }

    const handleKeydown = (e: KeyboardEvent) => {
        if(e.key == 'Enter') {
            goToSearch()
        }
    }
    
    return (
        <div className={cn(styles.search, className)} {...props}>
            <Input placeholder='Поиск...'
                className={styles.input} 
                value={query} onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeydown}
            />
            <Button apearance='primary' className={styles.button}
                onClick={goToSearch}
            >
                <LensIcon />
            </Button>
        </div>
    )
}