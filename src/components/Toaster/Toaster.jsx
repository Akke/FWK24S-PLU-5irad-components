import { useEffect, useRef, useState } from "react";
import styles from "./Toaster.module.css";

const Toaster = ({ type = "info", msg, id }) => {
    const [isVisible, setIsVisible] = useState(true);
    const timer = useRef(null);

    const duration = 7;

    const clearToaster = () => {
        setIsVisible(false);
        timer.current = null;
    };

    useEffect(() => {
        if (!msg) return;

        if (timer.current) {
            clearTimeout(timer.current);
            clearToaster();
        }

        setIsVisible(true);

        timer.current = setTimeout(() => clearToaster(), (duration - 0.1) * 1000);

        return () => clearTimeout(timer.current);
    }, [id, msg]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.toaster} ${styles[type]}`} key={id}>
            <div
                className={styles.progressBar}
                style={{ animationDuration: `${duration}s` }}
            />
            <div className={styles.message}>
                <div className={styles.title}>{type}!</div>
                <div className={styles.body}>{msg}</div>
            </div>
        </div>
    );
};

export default Toaster;
