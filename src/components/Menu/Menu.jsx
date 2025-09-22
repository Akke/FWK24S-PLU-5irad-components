import { useState } from "react";
import styles from "./Menu.module.css";
import HamburgerIcon from "../Icons/HamburgerIcon/HamburgerIcon";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";

const Menu = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <div className={styles.menu}>
            <div className={styles.toggle} onClick={() => setToggled(!toggled)}>
                {toggled ? <CloseIcon /> : <HamburgerIcon />}
            </div>

            <div className={`${styles.expandedMenu} ${toggled ? styles.visible : ""}`}>
                <ul>
                    <li className={styles.header}>Menu</li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Create Game</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;