
import Fretboard from '@/components/Fretboard/Fretboard';
import styles from './homePage.module.css';
import CircleOfFiths from '@/components/CircleOfFiths/CircleOfFiths';
import ChromaticCircle from '@/components/ChromaticCircle/ChromaticCircle';

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={styles.fretboard}>
        <Fretboard/>
      </div>
      <div className={styles.circleFiths}>
        <CircleOfFiths/>
      </div>
      <div className={styles.circleChrom}>
        <ChromaticCircle />
      </div>
      {/* <div className={styles.circle_container}>
      </div> */}
    </main>
  )
}
