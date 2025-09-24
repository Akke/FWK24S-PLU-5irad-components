import { AboutIcon } from '../Icons/AboutIcon/AboutIcon';
import { ContactIcon } from '../Icons/ContactIcon/ContactIcon';
import { GithubIcon } from '../Icons/GithubIcon/GithubIcon';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <div className={styles.links}>
                    <a href="#"><AboutIcon /> About</a>
                    <a href="#"><ContactIcon /> Contact</a>
                    <a href="#"><GithubIcon /> GitHub</a>
                </div>

                © 2025 Gomoku
            </div>
            <div className={styles.createdBy}>Made with 🖤 by Andreas, Angelika, Axel, Gul och Hampus</div>
        </div>
    )
}
export default Footer;