import { useState } from "react";
import styles from "./Switch.module.css";

const Switch = ({ toggleTheme }) => {
    const [enabled, setEnabled] = useState(false);

    const handleSwitch = () => {
        setEnabled(!enabled);
        toggleTheme();
    }

    return (
        <div className={`${styles.switch} ${enabled ? styles.enabled : ""}`} onClick={handleSwitch}>
            <div className={styles.marker}></div>
        </div>
    );
}

export default Switch;