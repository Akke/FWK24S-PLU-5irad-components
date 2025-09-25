import { useState } from "react";
import styles from "./Menu.module.css";
import HamburgerIcon from "../Icons/HamburgerIcon/HamburgerIcon";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import LoginIcon from "../Icons/LoginIcon/LoginIcon";
import RegisterIcon from "../Icons/RegisterIcon/RegisterIcon";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import WaxingCrescentIcon from "../Icons/WaxingCrescentIcon/WaxingCrescentIcon";
import SunIcon from "../Icons/SunIcon/SunIcon";
import Logo from "../Logo/Logo";
import { Switch } from "../Switch";

const Menu = ({ user, toggleTheme, theme }) => {
    const [toggled, setToggled] = useState(false);

    return (
        <div className={styles.menu}>
            <div className={styles.toggle}>
                <div className={styles.glow}></div>

                <div className={styles.icon} onClick={() => setToggled(!toggled)}>
                    {toggled ? <CloseIcon /> : <HamburgerIcon />}
                </div>

                <div className={styles.logo}>
                    <Logo />
                </div>

                <div className={styles.switch}>
                    {theme == "light" ? <SunIcon height="20px" /> : <WaxingCrescentIcon height="20px" />}
                    <Switch toggleTheme={toggleTheme} />
                </div>
            </div>

            <div className={`${styles.expandedMenu} ${toggled ? styles.visible : ""}`}>
                <ul>
                    <li className={styles.header}>Menu</li>

                    {!user ? <li><a href="/login"><LoginIcon /> Login</a></li> : <li><a href="/logout"><LoginIcon /> Logout</a></li>}
                    {user && <li><a href="/"><PlusIcon /> Create Game</a></li>}
                    {!user && <li><a href="/register"><RegisterIcon /> Register</a></li>}
                </ul>
            </div>
        </div>
    )
}

export default Menu;