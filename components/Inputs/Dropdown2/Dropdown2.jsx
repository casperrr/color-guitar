"use client";
import styles from './Dropdown.module.css';
import React, {useState} from "react";

let items = [
    {name:'item 1',color:'#ff0000'},
    {name:'ohhhhh',color:'#ffe50f'},
];

export default function Dropdown(props) {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({name:props.title,color:'#000000'});


    function handleClick(){
        setOpen(!open);
        // console.log(document.getElementsByClassName(styles.Menu));
        openClose(open)
    }


    function MenuItem(props){
        
        function handleSelect(e,selected){
            // console.log(e)
            setSelected(items[selected]);
            // console.log(selected)
            handleClick();
        }

        return(
            <li className={styles.MenuItem} onClick={(e) => handleSelect(e,props.itemIndex)}>
                <a>{props.children}</a>
                <div style={{backgroundColor: props.color}}></div>
            </li>
        )
    }
    

    return(
        <div className={styles.dropdown}>
            <button className={styles.DropdownBtn} onClick={() => handleClick()}>{selected.name}
            <span style={{backgroundColor: selected.color}}>{open ? '-' : '+'}</span>
            </button>
            <div className={styles.menuHider}>
                <ul className={styles.Menu}>
                    <li className={styles.gap}></li>
                    {items.map((item,index) => <MenuItem color={item.color} key={index} itemIndex={index}>{ item.name }</MenuItem>)}
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