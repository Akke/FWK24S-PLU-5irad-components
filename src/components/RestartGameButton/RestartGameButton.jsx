import RestartIcon from '../Icons/RestartIcon/RestartIcon';
import styles from './RestartGameButton.module.css';

const RestartGameButton = ({ onClick = () => console.info("Click!") }) => {
    return (
        <div className={styles.restartButtonContainer}>
            <button className={styles.restartButton} onClick={onClick} aria-label="Restart game">
                <RestartIcon />
            </button>
        </div>
    )
};

export default RestartGameButton;