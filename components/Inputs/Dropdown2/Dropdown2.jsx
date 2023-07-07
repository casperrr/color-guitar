"use client";
import styles from './Dropdown.module.css';
import React, {useState, useRef, useEffect} from "react";

let items = [
    {name:'item 1',color:'#ff0000'},
    {name:'ohhhhh',color:'#ffe50f'},
];

export default function Dropdown(props) {

    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState({name:props.title,color:'#000000'});
    const menuRef = useRef();

    if(props.options.options){
        items = props.options.options;
    }

    useEffect(() => {
        // setOpen(!open);
        // console.log("use effect hereeee!")
        let menu = menuRef.current;
        let translate = menu.clientHeight;
        translate = open ? 0 : translate;
        // console.log(menu)
        menu.style.transform = `translateY(${translate}px)`;
    },[open])


    function handleClick(e){
        setOpen(!open);
        // console.log(document.getElementsByClassName(styles.Menu));
        // openClose(e,open)
    }


    function MenuItem(props){
        
        function handleSelect(e,selected){
            // console.log(e)
            setSelected(items[selected]);
            // props.options.selected = selected;
            props.options.setSelected(selected);
            props.controller.update();
            console.log(props.controller)
            // console.log(selected)
            handleClick(e);
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
            <button className={styles.DropdownBtn} onClick={(e) => handleClick(e)}>{selected.name}
            <span style={{backgroundColor: selected.color}}>{open ? '+' : '-'}</span>
            </button>
            <div className={styles.menuHider}>
                <ul className={styles.Menu} ref={menuRef}>
                    <li className={styles.gap}></li>
                    {items.map((item,index) => <MenuItem color={item.color} key={index} itemIndex={index} controller={props.controller} options={props.options}>{ item.name }</MenuItem>)}
                </ul>
            </div>
        </div>
    )
}


