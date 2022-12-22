import { useRouter } from 'next/router'
import styles from './SearchComponent.module.css'

export const SearchComponent = () => {
    const router = useRouter()
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Поиск..." />
            <button onClick={() => router.push('/search')}>x</button>
        </div>
    )
}