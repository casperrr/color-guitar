import styles from './Header.module.css';
import Link from 'next/link';

export default function Header(){


    return(
        <header className={styles.header_container}>
            <Link href='/' style={{textDecoration: 'none'}}>
                <h2 className={styles.header_title}>Guitar<span>Color</span></h2>
            </Link>
        </header>
    );
}