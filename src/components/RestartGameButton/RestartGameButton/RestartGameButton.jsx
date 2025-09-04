import styles from './RestartGameButton.module.css';
import { Icon } from "@iconify/react";

export const RestartGameButton = () => {
    return (
        <div className={styles.restartButtonContainer}>
            <button className={styles.restartButton}><Icon icon="material-symbols:refresh-rounded" /></button>
        </div>
    )
};