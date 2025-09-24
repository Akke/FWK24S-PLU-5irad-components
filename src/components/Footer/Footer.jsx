import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <div className={styles.links}>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">GitHub</a>
                </div>

                © 2025 Gomoku
            </div>
            <div className={styles.createdBy}>Made with 🖤 by Andreas, Angelika, Axel, Gul och Hampus</div>
        </div>
    )
}
export default Footer;