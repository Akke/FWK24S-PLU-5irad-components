import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit, setName, setEmail, setMessage }) => {

    return (

        <form onSubmit={onSubmit} className={styles.contactForm}>
            <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    onChange={(e) => setName?.(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={(e) => setEmail?.(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    rows="4"
                    onChange={(e) => setMessage?.(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className={styles.button}>Send</button>

        </form>

    );
};

export default ContactForm;
