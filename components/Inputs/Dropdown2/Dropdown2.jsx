"use client";
import styles from './Dropdown.module.css';
import React, {useState} from "react";

let items = ['item 1', 'ohhhhh', 'item 3', 'toker'];

export default function Dropdown(props) {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState();


    function handleClick(){
        setOpen(!open);
        // console.log(document.getElementsByClassName(styles.Menu));
        openClose(open)
    }


    function MenuItem(props){
        
        function handleSelect(e){
            let target = e.target.textContent;
            console.log(target)
            handleClick();
        }

        return(
            <li className={styles.MenuItem} onClick={(e) => handleSelect(e)}>
                <a>{props.children}</a>
                <div></div>
            </li>
        )
    }
    

    return(
        <div className={styles.dropdown}>
            <button className={styles.DropdownBtn} onClick={() => handleClick()}>{props.title}
            {open ? <span>-</span>: <span>+</span>}</button>
            <div className={styles.menuHider}>
                <ul className={styles.Menu}>
                    <li className={styles.gap}></li>
                    {items.map((item) => <MenuItem>{ item }</MenuItem>)}
                </ul>
            </div>
        </div>
    )
}


function openClose(open){
    let menu = document.getElementsByClassName(styles.Menu)[0];
    let translate = menu.clientHeight;
    translate = open ? 0 : translate;
    menu.style.transform = `translateY(${translate}px)`;
}