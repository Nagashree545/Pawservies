import styles from "../Styles/bookingcat.module.css"

export default function BookingCta() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Ready to Book a Grooming Session?</h2>
        <p className={styles.description}>
          Experience the PawSpace difference with our premium at-home dog grooming services. Book now and get 25% off
          your first session!
        </p>
        <div className={styles.actions}>
          <a href="/services" className={`button ${styles.primaryButton}`}>
            View Services
          </a>
          <a href="/contact" className={`button ${styles.secondaryButton}`}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

