import ContactForm from '../ContactForm/ContactForm';
import styles from './ContactArea.module.css'

const ContactArea = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Let&apos;s Have a conversation</h2>
              <p className={styles.topText}>
                Reach out to us today to see how you can begin to take advantage
                of the benefits of having your own website for your rental
                property.
              </p>
            </div>
            <div className={styles.right}>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactArea