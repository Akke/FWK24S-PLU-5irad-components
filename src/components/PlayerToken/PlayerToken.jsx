import styles from "./PlayerToken.module.css";

const PlayerToken = ({ tile }) => {
    return (
        <div
            className={styles.playerToken}
            style={{ backgroundColor: tile === 1 ? "pink" : "lightBlue" }}
        />
    );
};

export default PlayerToken;