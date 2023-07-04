// import Dropdown from '../Inputs/Dropdown/Dropdown';
import Dropdown from '@/components/Inputs/Dropdown2/Dropdown2';
import styles from './Controls.module.css';
import React from 'react';
import FretBoard from '../Fretboard/js/FretBoard';
import Notes from '@/utils/canvasCode/Notes';

let scales = [
    {name:'item 1',color:'#ff0000'},
    {name:'ohhhhh',color:'#ffe50f'},
    {name:'IF THIS WORKS',color:'#10ff0f'},
    
];
const getNotes = () => {
    let array = [];
    let notes = new Notes();
    notes.notesArr.map((note)=>{
        array.push({name:note.noteName, color: note.color})
    });
    return array;
}
const notes = getNotes();

export default function Controls(props){
    // console.log(notes)

    return(
        <div className={styles.controls_container}>
            <div className={styles.control_container}>
                <h3>Scale:</h3>
                <Dropdown title="Choose a Scale" options={props.controller.scales} controller={props.controller}/>
            </div>
            <div className={styles.control_container}>
                <h3>Root:</h3>
                <Dropdown title="Choose a Root" options={props.controller.noteOptions} controller={props.controller}/>
            </div>
        </div>
    );
}