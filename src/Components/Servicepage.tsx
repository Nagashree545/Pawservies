// import { Check } from "lucide-react"
// import styles from "../Styles/Servicepage.module.css";
// import BookingForm from "./Bookingform";

// export default function ServicePage() {
//   return (
//     <div className={`container ${styles.container}`}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Our Dog Grooming Services</h1>
//         <p className={styles.description}>
//           We offer a range of professional grooming services to keep your furry friend clean, healthy, and happy.
//         </p>
//       </div>

//       <div className={styles.tabs}>
//         <div className={styles.tabsList}>
//           <button className={`${styles.tabButton} ${styles.activeTab}`}>Grooming Packages</button>
//           <button className={styles.tabButton}>Subscription Plans</button>
//         </div>

//         <div className={styles.tabContent}>
//           <div className={styles.servicesGrid}>
//             <ServiceCard
//               title="BASIC"
//               price="799"
//               originalPrice="1100"
//               services={[
//                 "Bath With Shampoo & Conditioner",
//                 "Blow Dry",
//                 "Nail Clipping",
//                 "Ear Cleaning",
//                 "Eye Cleaning",
//                 "Dental Cleaning/Mouth Spray",
//                 "Powder & Perfume",
//                 "Sanitary Trimming",
//                 "Combing/Brushing",
//                 "Under Paw Trimming",
//               ]}
//             />
//             <ServiceCard
//               title="STANDARD"
//               price="1299"
//               originalPrice="1700"
//               services={[
//                 "Bath With Shampoo & Conditioner",
//                 "Blow Dry",
//                 "Powder and Perfume",
//                 "Eye Cleaning",
//                 "Ear Cleaning",
//                 "Combing/Brushing",
//                 "Sanitary Trim",
//                 "Nail Clipping",
//                 "Teeth Cleaning/Mouth Spray",
//                 "Paw Massage",
//                 "Body Massage",
//                 "Face Cutting",
//                 "Under Paw Trimming",
//               ]}
//             />
//             <ServiceCard
//               title="REFORMATION"
//               price="1399"
//               originalPrice="1900"
//               services={[
//                 "Bath With Shampoo & Conditioner",
//                 "Blow Dry",
//                 "Powder and Perfume",
//                 "Eye Cleaning",
//                 "Ear Cleaning",
//                 "Body Massage",
//                 "Sanitary Trim",
//                 "Nail Clipping",
//                 "Teeth Cleaning/Mouth Spray",
//                 "Paw Massage",
//                 "Combing/Brushing",
//                 "Under Paw Trimming",
//                 "Full body Zero Trimming",
//               ]}
//             />
//             <ServiceCard
//               title="LUXURY"
//               price="1499"
//               originalPrice="2000"
//               services={[
//                 "Bath With Shampoo & Conditioner",
//                 "Blow Dry",
//                 "Hair Cutting",
//                 "Powder and Perfume",
//                 "Eye Cleaning",
//                 "Ear Cleaning",
//                 "Body Massage",
//                 "Sanitary Trimming",
//                 "Nail Clipping",
//                 "Teeth Cleaning/Mouth Spray",
//                 "Paw Massage",
//                 "Combing/Brushing",
//               ]}
//             />
//             <ServiceCard
//               title="PARTY SPECIAL"
//               price="2199"
//               originalPrice="3500"
//               services={[
//                 "Bath With Shampoo & Conditioner",
//                 "Blow Dry",
//                 "Hair Styling",
//                 "Knots Removal",
//                 "Full Body Trimming/Zero Hair Cut",
//                 "Powder and Perfume",
//                 "Anti-Tick Treatment",
//                 "Eye Cleaning",
//                 "Ear Cleaning",
//                 "Body Massage",
//                 "Sanitary Trim",
//                 "Nail Clipping",
//                 "Teeth Cleaning/Mouth Spray",
//                 "Paw Massage",
//                 "Combing/Brushing",
//                 "Bow and rubber band",
//               ]}
//             />
//             <div className={styles.specialCard}>
//               <div className={styles.specialHeader}>
//                 <h3 className={styles.specialTitle}>SPECIAL TREATMENTS</h3>
//               </div>
//               <div className={styles.specialContent}>
//                 <div className={styles.specialItem}>
//                   <span className={styles.specialName}>Anti-tick Treatment</span>
//                   <span className={styles.specialPrice}>₹299</span>
//                 </div>
//                 <div className={styles.specialItem}>
//                   <span className={styles.specialName}>Anti-flea Treatment</span>
//                   <span className={styles.specialPrice}>₹199</span>
//                 </div>
//               </div>
//               <div className={styles.specialFooter}>
//                 <button className={`button button-primary ${styles.specialButton}`}>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.bookingSection}>
//         <h2 className={styles.bookingTitle}>Book Your Appointment</h2>
//         <div className={styles.bookingFormContainer}>
//           <BookingForm/>
//         </div>
//       </div>
//     </div>
//   )
// }

// function ServiceCard({
//   title,
//   price,
//   originalPrice,
//   services,
// }: {
//   title: string
//   price: string
//   originalPrice: string
//   services: string[]
// }) {
//   return (
//     <div className={styles.serviceCard}>
//       <div className={styles.cardHeader}>
//         <h3 className={styles.cardTitle}>{title}</h3>
//       </div>
//       <div className={styles.cardContent}>
//         <div className={styles.priceContainer}>
//           <span className={styles.price}>₹{price}</span>
//           <span className={styles.originalPrice}>₹{originalPrice}</span>
//         </div>
//         <ul className={styles.servicesList}>
//           {services.map((service, index) => (
//             <li key={index} className={styles.serviceItem}>
//               <Check className={styles.checkIcon} />
//               <span>{service}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.cardFooter}>
//         <button className={`button button-primary ${styles.bookButton}`}>Book Now</button>
//       </div>
//     </div>
//   )
// }

import { useState, useEffect } from "react"
import { Check, Sparkles, Heart, Droplet, Scissors } from 'lucide-react'
// import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "../Components/Bookingform"
import styles from "../Styles/Servicepage.module.css"
import { AnimatePresence,motion } from "framer-motion"

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState("grooming")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <div className={styles.titleWrapper}>
          <Scissors className={styles.titleIcon} />
          <h1 className={styles.title}>Our Dog Grooming Services</h1>
        </div>
        <p className={styles.description}>
          We offer a range of professional grooming services to keep your furry friend 
          clean, healthy, and happy.
        </p>
      </motion.div>

      <div className={styles.tabs}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.tabsList}>
            <button
              onClick={() => setActiveTab("grooming")}
              className={`${styles.tabButton} ${activeTab === "grooming" ? styles.activeTab : ""}`}
            >
              Grooming Packages
            </button>
            <button
              onClick={() => setActiveTab("subscription")}
              className={`${styles.tabButton} ${activeTab === "subscription" ? styles.activeTab : ""}`}
            >
              Subscription Plans
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.tabContent}
            >
              {activeTab === "grooming" ? (
                <div className={styles.servicesGrid}>
                  <ServiceCard
                    title="BASIC"
                    price="799"
                    originalPrice="1100"
                    colorClass={styles.pinkCard}
                    icon={<Droplet className={styles.cardIcon} />}
                    services={[
                      "Bath With Shampoo & Conditioner",
                      "Blow Dry",
                      "Nail Clipping",
                      "Ear Cleaning",
                      "Eye Cleaning",
                      "Dental Cleaning/Mouth Spray",
                      "Powder & Perfume",
                      "Sanitary Trimming",
                      "Combing/Brushing",
                      "Under Paw Trimming",
                    ]}
                  />
                  <ServiceCard
                    title="STANDARD"
                    price="1299"
                    originalPrice="1700"
                    colorClass={styles.purpleCard}
                    icon={<Heart className={styles.cardIcon} />}
                    services={[
                      "Bath With Shampoo & Conditioner",
                      "Blow Dry",
                      "Powder and Perfume",
                      "Eye Cleaning",
                      "Ear Cleaning",
                      "Combing/Brushing",
                      "Sanitary Trim",
                      "Nail Clipping",
                      "Teeth Cleaning/Mouth Spray",
                      "Paw Massage",
                      "Body Massage",
                      "Face Cutting",
                      "Under Paw Trimming",
                    ]}
                  />
                  <ServiceCard
                    title="REFORMATION"
                    price="1399"
                    originalPrice="1900"
                    colorClass={styles.blueCard}
                    icon={<Scissors className={styles.cardIcon} />}
                    services={[
                      "Bath With Shampoo & Conditioner",
                      "Blow Dry",
                      "Powder and Perfume",
                      "Eye Cleaning",
                      "Ear Cleaning",
                      "Body Massage",
                      "Sanitary Trim",
                      "Nail Clipping",
                      "Teeth Cleaning/Mouth Spray",
                      "Paw Massage",
                      "Combing/Brushing",
                      "Under Paw Trimming",
                      "Full body Zero Trimming",
                    ]}
                  />
                  <ServiceCard
                    title="LUXURY"
                    price="1499"
                    originalPrice="2000"
                    colorClass={styles.amberCard}
                    icon={<Sparkles className={styles.cardIcon} />}
                    services={[
                      "Bath With Shampoo & Conditioner",
                      "Blow Dry",
                      "Hair Cutting",
                      "Powder and Perfume",
                      "Eye Cleaning",
                      "Ear Cleaning",
                      "Body Massage",
                      "Sanitary Trimming",
                      "Nail Clipping",
                      "Teeth Cleaning/Mouth Spray",
                      "Paw Massage",
                      "Combing/Brushing",
                    ]}
                  />
                  <ServiceCard
                    title="PARTY SPECIAL"
                    price="2199"
                    originalPrice="3500"
                    colorClass={styles.roseCard}
                    icon={<Sparkles className={styles.cardIcon} />}
                    featured={true}
                    services={[
                      "Bath With Shampoo & Conditioner",
                      "Blow Dry",
                      "Hair Styling",
                      "Knots Removal",
                      "Full Body Trimming/Zero Hair Cut",
                      "Powder and Perfume",
                      "Anti-Tick Treatment",
                      "Eye Cleaning",
                      "Ear Cleaning",
                      "Body Massage",
                      "Sanitary Trim",
                      "Nail Clipping",
                      "Teeth Cleaning/Mouth Spray",
                      "Paw Massage",
                      "Combing/Brushing",
                      "Bow and rubber band",
                    ]}
                  />
                  <SpecialTreatmentsCard />
                </div>
              ) : (
                <div className={styles.subscriptionGrid}>
                  <SubscriptionCard 
                    title="MONTHLY"
                    price="2999"
                    originalPrice="3600"
                    colorClass={styles.pinkCard}
                    description="Perfect for regular grooming needs"
                    features={[
                      "4 Basic Grooming Sessions",
                      "10% Off Additional Services",
                      "Free Nail Trimming",
                      "Priority Booking"
                    ]}
                  />
                  <SubscriptionCard 
                    title="QUARTERLY"
                    price="7999"
                    originalPrice="10800"
                    colorClass={styles.purpleCard}
                    featured={true}
                    description="Our most popular plan"
                    features={[
                      "12 Basic Grooming Sessions",
                      "15% Off Additional Services",
                      "Free Anti-tick Treatment",
                      "Free Nail Trimming",
                      "Priority Booking",
                      "Loyalty Points"
                    ]}
                  />
                  <SubscriptionCard 
                    title="YEARLY"
                    price="28999"
                    originalPrice="43200"
                    colorClass={styles.blueCard}
                    description="Best value for dedicated pet parents"
                    features={[
                      "48 Basic Grooming Sessions",
                      "20% Off Additional Services",
                      "Free Anti-tick & Anti-flea Treatments",
                      "Free Nail Trimming",
                      "VIP Priority Booking",
                      "Double Loyalty Points",
                      "Annual Pet Health Check"
                    ]}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={styles.bookingSection}
      >
        <h2 className={styles.bookingTitle}>
          Book Your <span className={styles.highlight}>Appointment</span>
        </h2>
        <div className={styles.bookingFormContainer}>
          <BookingForm />
        </div>
      </motion.div>
    </div>
  )
}

function ServiceCard({
  title,
  price,
  originalPrice,
  services,
  colorClass,
  icon,
  featured = false,
}: {
  title: string
  price: string
  originalPrice: string
  services: string[]
  colorClass: string
  icon?: React.ReactNode
  featured?: boolean
}) {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${styles.serviceCard} ${featured ? styles.featuredCard : ""}`}
    >
      {featured && (
        <div className={styles.featuredBadge}>
          Most Popular
        </div>
      )}
      <div className={`${styles.cardHeader} ${colorClass}`}>
        <div className={styles.cardHeaderContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          {icon && <div className={styles.iconWrapper}>{icon}</div>}
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>₹{price}</span>
          <span className={styles.originalPrice}>₹{originalPrice}</span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <ul className={styles.servicesList}>
          {services.map((service, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className={styles.serviceItem}
            >
              <Check className={styles.checkIcon} />
              <span>{service}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`${styles.bookButton} ${colorClass}`}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  )
}

function SpecialTreatmentsCard() {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={styles.serviceCard}
    >
      <div className={`${styles.cardHeader} ${styles.tealCard}`}>
        <div className={styles.cardHeaderContent}>
          <h3 className={styles.cardTitle}>SPECIAL TREATMENTS</h3>
          <div className={styles.iconWrapper}>
            <Sparkles className={styles.cardIcon} />
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.specialContent}
        >
          <div className={styles.specialItem}>
            <div className={styles.specialNameWrapper}>
              <Droplet className={styles.specialIcon} />
              <span className={styles.specialName}>Anti-tick Treatment</span>
            </div>
            <span className={styles.specialPrice}>₹299</span>
          </div>
          <div className={styles.specialItem}>
            <div className={styles.specialNameWrapper}>
              <Droplet className={styles.specialIcon} />
              <span className={styles.specialName}>Anti-flea Treatment</span>
            </div>
            <span className={styles.specialPrice}>₹199</span>
          </div>
          <div className={styles.specialItem}>
            <div className={styles.specialNameWrapper}>
              <Heart className={styles.specialIcon} />
              <span className={styles.specialName}>Aromatherapy</span>
            </div>
            <span className={styles.specialPrice}>₹249</span>
          </div>
        </motion.div>
      </div>
      <div className={styles.cardFooter}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`${styles.bookButton} ${styles.tealCard}`}
        >
          Book Treatment
        </motion.button>
      </div>
    </motion.div>
  )
}

function SubscriptionCard({
  title,
  price,
  originalPrice,
  description,
  features,
  colorClass,
  featured = false,
}: {
  title: string
  price: string
  originalPrice: string
  description: string
  features: string[]
  colorClass: string
  featured?: boolean
}) {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${styles.serviceCard} ${featured ? styles.featuredCard : ""} ${featured ? styles.featuredSubscription : ""}`}
    >
      {featured && (
        <div className={styles.featuredBadge}>
          Best Value
        </div>
      )}
      <div className={`${styles.cardHeader} ${colorClass}`}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>₹{price}</span>
          <span className={styles.originalPrice}>₹{originalPrice}</span>
        </div>
        <p className={styles.subscriptionDescription}>{description}</p>
      </div>
      <div className={styles.cardContent}>
        <ul className={styles.servicesList}>
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className={styles.serviceItem}
            >
              <Check className={styles.checkIcon} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`${styles.bookButton} ${colorClass}`}
        >
          Subscribe Now
        </motion.button>
      </div>
    </motion.div>
  )
}

