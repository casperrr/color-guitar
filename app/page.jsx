"use client";
import styles from './homePage.module.css';
import Fretboard from '@/components/Fretboard/Fretboard';
import CircleOfFiths from '@/components/CircleOfFiths/CircleOfFiths';
import ChromaticCircle from '@/components/ChromaticCircle/ChromaticCircle';
import Controls from '@/components/Controls/Controls';
// import Main from '@/utils/mainController';
import MainController from '@/utils/mainController';
import { useEffect } from 'react';

export default function Home() {

  let controller = new MainController();

  useEffect(() => {
    controller.runScripts();
    console.log(controller);
  },[ controller])


  return (
    <main className={styles.main_container}>
      <div className={styles.fretboard}>
        <Fretboard controller={controller}/>
      </div>
      <div className={styles.circleFiths}>
        <CircleOfFiths controller={controller}/>
      </div>
      <div className={styles.circleChrom}>
        <ChromaticCircle controller={controller}/>
      </div>
      <div className={styles.controls}>
        <Controls controller={controller}/>
      </div>
    </main>
  )
}
