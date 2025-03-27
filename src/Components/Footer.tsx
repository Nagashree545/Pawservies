// import Link from "next/link"
// import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"
import styles from "../Styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.companyInfo}>
            <a href="/" className={styles.logo}>
              <div className={styles.logoImage}>
                {/* <Image src="/placeholder.svg?height=40&width=128" alt="PawSpace Logo" fill className={styles.logoImg} /> */}
                <img/>
              </div>
            </a>
            <p className={styles.description}>
              Premium dog grooming services at your doorstep in Bangalore. Trusted by 50,000+ dog parents.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Facebook className={styles.socialIcon} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <Instagram className={styles.socialIcon} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter className={styles.socialIcon} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <Youtube className={styles.socialIcon} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className={styles.footerLink}>
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className={styles.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="/services" className={styles.footerLink}>
                  Basic Grooming
                </a>
              </li>
              <li>
                <a href="/services" className={styles.footerLink}>
                  Standard Grooming
                </a>
              </li>
              <li>
                <a href="/services" className={styles.footerLink}>
                  Luxury Grooming
                </a>
              </li>
              <li>
                <a href="/services" className={styles.footerLink}>
                  Party Special
                </a>
              </li>
              <li>
                <a href="/services" className={styles.footerLink}>
                  Subscription Plans
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>
                  +91 9911203330
                  <br />
                  +91 9911263330
                </span>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>info@pawspace.in</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>Serving all areas in Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} PawSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

