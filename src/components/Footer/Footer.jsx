import { AboutIcon } from '../Icons/AboutIcon/AboutIcon';
import { ContactIcon } from '../Icons/ContactIcon/ContactIcon';
import { GithubIcon } from '../Icons/GithubIcon/GithubIcon';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <div className={styles.links}>
                    <Link to="/about"><AboutIcon /> About</Link>
                    <Link to="/contact"><ContactIcon /> Contact</Link>
                    <a href="https://github.com/angelika-friis/FWK24S-PLU-fem-i-rad-frontend" target="_blank"><GithubIcon /> GitHub</a>
                </div>

                © 2025 Gomoku
            </div>
            <div className={styles.createdBy}>Made with 🩷 by <a href="https://github.com/andreasLoetzsch" target="_blank">Andreas</a>, <a href="https://github.com/angelika-friis" target="_blank">Angelika</a>, <a href="https://github.com/Akke" target="_blank">Axel</a>, <a href="https://github.com/gullya" target="_blank">Gul</a> och <a href="https://github.com/hampusvh" target="_blank">Hampus</a></div>
        </div>
    )
}
export default Footer;