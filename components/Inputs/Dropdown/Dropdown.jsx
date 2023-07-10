"use client";
import React, {useState} from "react";
import styles from './Dropdown.module.css';



// const Dropdown = () => {

//     const options = [
//         {value: '1', label: 'weee'},
//         {value: "2", label: "pee"}
//     ];

//     const [value, setValue] = useState(options[0].value);

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }

//     return (
//         <div className={styles.dropdown_container}>
//             <h4>Scale</h4>
//             <select name="test" value={value} onChange={handleChange} className={styles.dropdownButton}>
//                 {options.map((option) => (
//                     <option value={option.value}>{option.label}</option>
//                 ))}

//             </select>
//             <h3>Value = {value}</h3>
//         </div>
//     );
// }



let items = [
    'toke','toked','toker','haz clarke','tokest'
];


const Dropdown = (props) => {
    const [open, setOpen] = useState(true);

    return(
        <div className={styles.dropdown}>
            <a className={styles.dropdownBtn} 
            onClick={() => setOpen(!open)}>
                <p >
                    {props.name}
                </p>
                <span>-</span>
            </a>
            {/* {open && <DropdownMenu items={items}/>} */}
            <DropdownMenu items={items}/>
        </div>
    )
}

function DropdownMenu(props){

    let items = props.items;
    
    function DropdownItem(props){
        return(
            <li className={styles.dropdownItem}>
                <a>{props.children}</a>
            </li>
        )
    }

    return(
        <ul className={styles.dropdownMenu}>
            {items.map((item) => <DropdownItem>{item}</DropdownItem>)}
            
        </ul>
    )
}

export default Dropdown