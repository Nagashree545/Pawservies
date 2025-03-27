import BookingForm from "../Components/Bookingform"
import styles from "../Styles/hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>Premium Dog Grooming Services At Your Doorstep</h1>
            <p className={styles.description}>
              Professional groomers bring salon-quality services to your home in Bangalore
            </p>
            <div className={styles.actions}>
              <a href="/services" className={`button button-primary ${styles.primaryButton}`}>
                View Services
              </a>
              <a href="/contact" className={`button button-secondary ${styles.secondaryButton}`}>
                Contact Us
              </a>
            </div>
            <div className={styles.offer}>
              <p className={styles.offerTitle}>Enjoy 25% OFF</p>
              <p className={styles.offerDescription}>on your first session today!</p>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Book a Grooming Session</h2>
              <BookingForm/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
    </section>
  )
}

