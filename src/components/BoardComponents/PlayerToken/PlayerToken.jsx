import styles from "./PlayerToken.module.css";

const PlayerToken = ({ tile }) => {
    return (
        <div className={styles.playerTokenContainer} >
            <img className={styles.playerToken} src={tile === 1 ? "./icons/cross.svg" : "./icons/circle.svg"} alt="Player token" />
        </div>
    );
};

export default PlayerToken;