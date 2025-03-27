import { Check } from "lucide-react"
import styles from "../Styles/serviceshighilits.module.css"
import basicdog from "../Assets/normalhomeservice1.png";
import luxury from "../Assets/luxury.png";
export default function ServiceHighlights() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Grooming Services</h2>
          <p className={styles.description}>
            We offer a range of professional grooming packages to keep your furry friend clean, healthy, and happy
          </p>
        </div>

        <div className={styles.serviceRow}>
          <div className={styles.imageContainer}>
            {/* <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dog grooming service"
              fill
              className={styles.image}
            /> */}
            <img src={basicdog} alt="Dog grooming service"
              className={styles.image}/>
          </div>
          <div className={styles.content}>
            <h3 className={styles.serviceTitle}>Basic Grooming Package</h3>
            <p className={styles.serviceDescription}>
              Our basic grooming package includes essential services to keep your dog clean and comfortable.
            </p>
            <ul className={styles.servicesList}>
              {[
                "Bath with premium shampoo & conditioner",
                "Blow dry with professional equipment",
                "Nail clipping and filing",
                "Ear cleaning and care",
                "Eye cleaning",
                "Teeth cleaning/mouth spray",
                "Sanitary trimming",
              ].map((item, index) => (
                <li key={index} className={styles.serviceItem}>
                  <Check className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>₹799</span>
              <span className={styles.originalPrice}>₹1100</span>
            </div>
            <a href="/services" className={`button button-primary ${styles.viewButton}`}>
              View All Packages
            </a>
          </div>
        </div>

        <div className={styles.serviceRow}>
          <div className={`${styles.content} ${styles.contentFirst}`}>
            <h3 className={styles.serviceTitle}>Luxury Grooming Package</h3>
            <p className={styles.serviceDescription}>
              Our luxury package provides comprehensive grooming services for the ultimate pampering experience.
            </p>
            <ul className={styles.servicesList}>
              {[
                "All services in the Basic package",
                "Professional hair cutting and styling",
                "Body massage for relaxation",
                "Paw massage and moisturizing",
                "Premium powder and perfume",
                "De-shedding treatment",
                "Specialized skin treatments",
              ].map((item, index) => (
                <li key={index} className={styles.serviceItem}>
                  <Check className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>₹1499</span>
              <span className={styles.originalPrice}>₹2000</span>
            </div>
            <a href="/services" className={`button button-primary ${styles.viewButton}`}>
              View All Packages
            </a>
          </div>
          <div className={`${styles.imageContainer} ${styles.imageSecond}`}>
            {/* <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Luxury dog grooming service"
              fill
              className={styles.image}
            /> */}
            <img  alt="Luxury dog grooming service"
              src={luxury}
              className={styles.image}/>
          </div>
        </div>
      </div>
    </section>
  )
}

