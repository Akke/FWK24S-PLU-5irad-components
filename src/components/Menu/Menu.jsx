import { useState } from "react";
import styles from "./Menu.module.css";
import { Icon } from "@iconify/react";

const Menu = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <div className={styles.menu}>
            <div className={styles.toggle} onClick={() => setToggled(!toggled)}>
                {toggled ? <Icon icon="material-symbols:close-rounded" width="24" height="24" /> : <Icon icon="material-symbols:menu" width="24" height="24" />}
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