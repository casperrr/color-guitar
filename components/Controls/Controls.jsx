// import Dropdown from '../Inputs/Dropdown/Dropdown';
import Dropdown from '@/components/Inputs/Dropdown2/Dropdown2';
import styles from './Controls.module.css';
import React from 'react';

let scales = [
    {name:'item 1',color:'#ff0000'},
    {name:'ohhhhh',color:'#ffe50f'},
    {name:'IF THIS WORKS',color:'#10ff0f'},
    
];

export default function Controls(){

    return(
        <div className={styles.controls_container}>
            <h3>Scale:</h3>
            <Dropdown title="Choose a Scale" options={scales}/>
        </div>
    );
}