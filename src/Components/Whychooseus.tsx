import { Shield, Clock, Award, Heart } from "lucide-react"
import styles from "../Styles/whychooseus.module.css"

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why PawSpace?</h2>
          <p className={styles.description}>
            We provide premium dog grooming services with a focus on your pet's comfort and well-being
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <div className={styles.iconContainer}>
              <Shield className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>Certified Groomers</h3>
            <p className={styles.featureDescription}>
              Our team consists of professionally trained and certified dog groomers with years of experience.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconContainer}>
              <Clock className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>At-Home Service</h3>
            <p className={styles.featureDescription}>
              We bring our professional grooming services directly to your doorstep, saving you time and travel.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconContainer}>
              <Award className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>Premium Products</h3>
            <p className={styles.featureDescription}>
              We use only high-quality, pet-safe grooming products that are gentle on your dog's skin and coat.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconContainer}>
              <Heart className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>Stress-Free Experience</h3>
            <p className={styles.featureDescription}>
              Our at-home service reduces anxiety for your pet, making grooming a more comfortable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

