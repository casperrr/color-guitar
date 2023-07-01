import styles from './Header.module.css';

export default function Header(){


    return(
        <header className={styles.header_container}>
            <h2 className={styles.header_title}>Guitar<span>Color</span></h2>
        </header>
    );
}