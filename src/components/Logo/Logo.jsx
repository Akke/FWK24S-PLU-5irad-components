import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}>
            Go<span className={styles.color}>moku</span>
        </div>
    );
}

export default Logo;