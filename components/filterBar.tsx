import Link from 'next/link';
import styles from './FilterBar.module.css';
import { Button } from './Button';

const FilterBar = () => {
    return (
        <section className={styles.filterBar}>
            <nav className={styles.nav}>
                <Link href='/' className={styles.selected}>Nouveauté</Link>
                <Link href='/' className={styles.unselected}>Populaire</Link>
            </nav>
            <Link href='/' className={styles.filterBarBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M8.5 2.75C8.5 1.92157 7.82845 1.25 7 1.25C6.17155 1.25 5.5 1.92157 5.5 2.75M8.5 2.75C8.5 3.57843 7.82845 4.25 7 4.25C6.17155 4.25 5.5 3.57843 5.5 2.75M8.5 2.75H13M5.5 2.75H1M10 8C10 8.82845 10.6716 9.5 11.5 9.5C12.3284 9.5 13 8.82845 13 8C13 7.17155 12.3284 6.5 11.5 6.5C10.6716 6.5 10 7.17155 10 8ZM10 8H1M4 13.25C4 12.4216 3.32843 11.75 2.5 11.75C1.67157 11.75 1 12.4216 1 13.25C1 14.0784 1.67157 14.75 2.5 14.75C3.32843 14.75 4 14.0784 4 13.25ZM4 13.25H13" stroke="#6E62FF" stroke-linecap="round"/>
                </svg>
                Filtres
            </Link>
        </section>
    );
}

export default FilterBar;