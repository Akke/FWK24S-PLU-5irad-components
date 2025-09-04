import styles from './RestartGameButton.module.css';
import { Icon } from "@iconify/react";

export const RestartGameButton = ({ onClick = () => console.info("Click!")}) => {
    return (
        <div className={styles.restartButtonContainer}>
            <button className={styles.restartButton} onClick={onClick} aria-label="Restart game">
                <Icon icon="material-symbols:refresh-rounded" />
            </button>
        </div>
    )
};