
import Fretboard from '@/components/Fretboard/Fretboard';
import styles from './homePage.module.css';

export default function Home() {
  return (
    <main className={styles.main_container}>
      <Fretboard/>
    </main>
  )
}
