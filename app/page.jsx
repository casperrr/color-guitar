
import Fretboard from '@/components/Fretboard/Fretboard';
import styles from './homePage.module.css';
import CircleOfFiths from '@/components/CircleOfFiths/CircleOfFiths';
import ChromaticCircle from '@/components/ChromaticCircle/ChromaticCircle';

export default function Home() {
  return (
    <main className={styles.main_container}>
      <Fretboard/>
      <div className={styles.circle_container}>
        <CircleOfFiths/>
        <ChromaticCircle/>
      </div>
    </main>
  )
}
