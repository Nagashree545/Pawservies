// import { MapPin, Phone, Mail, Clock } from "lucide-react"
// import styles from "../Styles/Contact.module.css"
// import BookingForm from "./Bookingform"

// export default function ContactPage() {
//   return (
//     <div className={`container ${styles.container}`}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Contact Us</h1>
//         <p className={styles.description}>Have questions about our services? Get in touch with our team.</p>
//       </div>

//       <div className={styles.grid}>
//         <div className={styles.formSection}>
//           <h2 className={styles.sectionTitle}>Get In Touch</h2>
//           <BookingForm/>

//         </div>

//         <div className={styles.infoSection}>
//           <h2 className={styles.sectionTitle}>Contact Information</h2>
//           <div className={styles.contactInfo}>
//             <div className={styles.contactItem}>
//               <MapPin className={styles.contactIcon} />
//               <div className={styles.contactContent}>
//                 <h3 className={styles.contactLabel}>Our Location</h3>
//                 <p className={styles.contactText}>Serving all areas in Bangalore</p>
//               </div>
//             </div>
//             <div className={styles.contactItem}>
//               <Phone className={styles.contactIcon} />
//               <div className={styles.contactContent}>
//                 <h3 className={styles.contactLabel}>Phone Number</h3>
//                 <p className={styles.contactText}>+91 9911203330</p>
//                 <p className={styles.contactText}>+91 9911263330</p>
//               </div>
//             </div>
//             <div className={styles.contactItem}>
//               <Mail className={styles.contactIcon} />
//               <div className={styles.contactContent}>
//                 <h3 className={styles.contactLabel}>Email Address</h3>
//                 <p className={styles.contactText}>info@pawspace.in</p>
//               </div>
//             </div>
//             <div className={styles.contactItem}>
//               <Clock className={styles.contactIcon} />
//               <div className={styles.contactContent}>
//                 <h3 className={styles.contactLabel}>Working Hours</h3>
//                 <p className={styles.contactText}>Monday - Sunday: 8:00 AM - 8:00 PM</p>
//               </div>
//             </div>
//           </div>

//           <div className={styles.serviceAreas}>
//             <h2 className={styles.areasTitle}>Service Areas</h2>
//             <p className={styles.areasDescription}>
//               We provide at-home dog grooming services across Bangalore, including:
//             </p>
//             <div className={styles.areasGrid}>
//               {[
//                 "Indiranagar",
//                 "Koramangala",
//                 "HSR Layout",
//                 "Whitefield",
//                 "Marathahalli",
//                 "JP Nagar",
//                 "Jayanagar",
//                 "Bannerghatta Road",
//                 "Electronic City",
//                 "Sarjapur Road",
//                 "Hebbal",
//                 "Yelahanka",
//               ].map((area) => (
//                 <div key={area} className={styles.areaTag}>
//                   {area}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from "framer-motion"
import styles from "../Styles/Contact.module.css"
import BookingForm from "../Components/Bookingform"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }
  
  const areaVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + (i * 0.05)
      }
    })
  }

  return (
    <div className={`container ${styles.container}`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>Have questions about our services? Get in touch with our team.</p>
      </motion.div>

      <div className={styles.grid}>
        <motion.div 
          className={styles.formSection}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <BookingForm />
        </motion.div>

        <motion.div 
          className={styles.infoSection}
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <div className={styles.contactInfo}>
            <motion.div className={styles.contactItem} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.contactIcon} />
              </div>
              <div className={styles.contactContent}>
                <h3 className={styles.contactLabel}>Our Location</h3>
                <p className={styles.contactText}>Serving all areas in Bangalore</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.contactItem} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.contactIcon} />
              </div>
              <div className={styles.contactContent}>
                <h3 className={styles.contactLabel}>Phone Number</h3>
                <p className={styles.contactText}>+91 9911203330</p>
                <p className={styles.contactText}>+91 9911263330</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.contactItem} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.contactIcon} />
              </div>
              <div className={styles.contactContent}>
                <h3 className={styles.contactLabel}>Email Address</h3>
                <p className={styles.contactText}>info@pawspace.in</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.contactItem} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <Clock className={styles.contactIcon} />
              </div>
              <div className={styles.contactContent}>
                <h3 className={styles.contactLabel}>Working Hours</h3>
                <p className={styles.contactText}>Monday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className={styles.serviceAreas}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className={styles.areasTitle}>Service Areas</h2>
            <p className={styles.areasDescription}>
              We provide at-home dog grooming services across Bangalore, including:
            </p>
            <div className={styles.areasGrid}>
              {[
                "Indiranagar",
                "Koramangala",
                "HSR Layout",
                "Whitefield",
                "Marathahalli",
                "JP Nagar",
                "Jayanagar",
                "Bannerghatta Road",
                "Electronic City",
                "Sarjapur Road",
                "Hebbal",
                "Yelahanka",
              ].map((area, index) => (
                <motion.div 
                  key={area} 
                  className={styles.areaTag}
                  custom={index}
                  variants={areaVariants}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                >
                  {area}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
