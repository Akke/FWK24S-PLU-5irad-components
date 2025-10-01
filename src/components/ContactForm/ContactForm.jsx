import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className={styles.card}>
      <div className={styles.meta}>
        <h2 className={styles.title}>Get in touch</h2>
        <p className={styles.lede}>
          Questions about Gomoku? <br />
          We would love to hear from you!
        </p>
      </div>

      {sent ? (
        <div className={styles.form}>
          <h3>Thank you for your message!</h3>
          <p>We won't get back to you.</p>
          <button
            type="button"
            className={styles.button}
            onClick={() => setSent(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className={styles.form}>
          <div className={styles.field}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              aria-label="Name"
              required
            />
          </div>

          <div className={styles.field}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
          </div>

          <div className={styles.field}>
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              aria-label="Message"
              required
            />
          </div>

          <button
            type="button"
            className={styles.button}
            onClick={() => {
              setSent(true);
            }}
          >
            Send message
          </button>
        </form>
      )}
    </section>
  );
}
