import styles from "./PlayerToken.module.css";

const PlayerToken = ({ color = 'black' }) => {
    console.log(color);

    return (
        <div className={styles.playerToken} style={{ backgroundColor: color }}></div>
    );
}

export default PlayerToken;