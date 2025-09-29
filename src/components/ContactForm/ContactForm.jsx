import styles from "./ContactForm.module.css";

export default function ContactForm() {
    return (
        <section className={styles.card}>
            <div className={styles.meta}>
                <h2 className={styles.title}>Get in touch</h2>
                <p className={styles.lede}>
                    Questions about Gomoku? We would love to hear from you.
                </p>
            </div>

            <form className={styles.form}>
                <div className={styles.field}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        aria-label="Name"
                    />
                </div>

                <div className={styles.field}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                    />
                </div>

                <div className={styles.field}>
                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Message"
                        aria-label="Message"
                    />
                </div>

                <button type="submit" className={styles.button}>Send message</button>
            </form>
        </section>
    );
}
