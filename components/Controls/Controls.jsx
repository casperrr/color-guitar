import Dropdown from '../Inputs/Dropdown/Dropdown';
import styles from './Controls.module.css';

export default function Controls(){

    return(
        <div className={styles.controls_container}>
            <Dropdown name={"This is a button"}>
                <p>Here is some text that u cant see</p>
            </Dropdown>
        </div>
    );
}