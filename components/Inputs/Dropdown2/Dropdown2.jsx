"use client";
import styles from './Dropdown.module.css';
import React, {useState} from "react";

let items = ['item 1', 'ohhhhh', 'item 3', 'toker'];

export default function Dropdown(props) {

    const [open, setOpen] = useState(true);


    function handleClick(){
        setOpen(!open);
        // console.log(document.getElementsByClassName(styles.Menu));
        let menu = document.getElementsByClassName(styles.Menu)[0];
        let translate = menu.clientHeight;
        translate = open ? translate : 0;
        menu.style.transform = `translateY(${translate}px)`;
    }

    return(
        <div className={styles.dropdown}>
            <button className={styles.DropdownBtn} onClick={() => handleClick()}>{props.title}</button>
            <Menu/>
        </div>
    )
}

function Menu(){

    

    
    function MenuItem(props){
        
        return(
            <li className={styles.MenuItem}>
                <a>{props.children}</a>
            </li>
        )
    }


    return(
        <ul className={styles.Menu}>
            <li className={styles.gap}></li>
            {items.map((item) => <MenuItem>{ item }</MenuItem>)}
        </ul>
    )
}