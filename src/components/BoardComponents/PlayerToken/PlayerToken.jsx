import CircleIcon from "../../Icons/CircleIcon/CircleIcon";
import CrossIcon from "../../Icons/CrossIcon/CrossIcon";
import styles from "./PlayerToken.module.css";

const PlayerToken = ({ tile }) => {
    return (
        <div className={`${styles.playerTokenContainer} ${tile === 1 ? styles.playerOne : styles.playerTwo}`}>
            {tile === 1 ? <CrossIcon /> : <CircleIcon />}
        </div>
    );
};

export default PlayerToken;