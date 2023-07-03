import styles from './Dropdown.module.css';


export default function Dropdown(props) {

    return(
        <div className={styles.dropdown}>
            <button className={styles.DropdownBtn}>{props.title}</button>
            <Menu/>
        </div>
    )
}

function Menu(){

    let items = ['item 1', 'ohhhhh', 'item 3', 'toker'];

    
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