// import Dropdown from '../Inputs/Dropdown/Dropdown';
import Dropdown from '@/components/Inputs/Dropdown2/Dropdown2';
import styles from './Controls.module.css';
import React from 'react';

export default function Controls(){

    return(
        <div className={styles.controls_container}>
            <Dropdown title="This is a button"/>
        </div>
    );
}