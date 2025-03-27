// // import Image from "next/image"
// // import Link from "next/link"
// import styles from "../Styles/About.module.css"

// export default function AboutPage() {
//   return (
//     <div className={`container ${styles.container}`}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>About PawSpace</h1>
//         <p className={styles.description}>Providing premium dog grooming services at your doorstep in Bangalore</p>
//       </div>

//       <div className={styles.storySection}>
//         <div className={styles.storyContent}>
//           <h2 className={styles.storyTitle}>Our Story</h2>
//           <p className={styles.storyText}>
//             PawSpace was founded with a simple mission: to provide high-quality, stress-free grooming services for dogs
//             in the comfort of their own homes. We understand that many dogs experience anxiety in unfamiliar
//             environments, which is why we bring our professional grooming services directly to your doorstep.
//           </p>
//           <p className={styles.storyText}>
//             What started as a small operation has grown into Bangalore's most trusted pet grooming service, with over
//             50,000 satisfied customers and their furry friends. Our team of certified groomers is passionate about
//             animal welfare and dedicated to providing the best care possible.
//           </p>
//           <p className={styles.storyText}>
//             We believe that regular grooming is essential for your pet's health and happiness, and we're committed to
//             making the process as convenient and enjoyable as possible for both you and your dog.
//           </p>
//         </div>
//         <div className={styles.storyImage}>
//           {/* <Image
//             src="/placeholder.svg?height=400&width=600"
//             alt="Dog grooming professional with a happy dog"
//             fill
//             className={styles.image}
//           /> */}
//           <img src=""/>
//         </div>
//       </div>

//       <div className={styles.valuesSection}>
//         <h2 className={styles.valuesTitle}>Our Values</h2>
//         <div className={styles.valuesGrid}>
//           <div className={styles.valueCard}>
//             <h3 className={styles.valueTitle}>Compassion</h3>
//             <p className={styles.valueText}>
//               We treat every dog with kindness and respect, ensuring they feel comfortable and safe throughout the
//               grooming process.
//             </p>
//           </div>
//           <div className={styles.valueCard}>
//             <h3 className={styles.valueTitle}>Quality</h3>
//             <p className={styles.valueText}>
//               We use premium products and techniques to provide the highest standard of grooming services for your
//               beloved pet.
//             </p>
//           </div>
//           <div className={styles.valueCard}>
//             <h3 className={styles.valueTitle}>Convenience</h3>
//             <p className={styles.valueText}>
//               Our at-home service eliminates the stress of transportation and waiting, making grooming a pleasant
//               experience.
//             </p>
//           </div>
//           <div className={styles.valueCard}>
//             <h3 className={styles.valueTitle}>Education</h3>
//             <p className={styles.valueText}>
//               We believe in empowering pet parents with knowledge about proper grooming practices and pet care.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.teamSection}>
//         <h2 className={styles.teamTitle}>Meet Our Team</h2>
//         <div className={styles.teamGrid}>
//           {[1, 2, 3].map((i) => (
//             <div key={i} className={styles.teamMember}>
//               <div className={styles.memberImage}>
//                 {/* <Image
//                   src="/placeholder.svg?height=256&width=256"
//                   alt={`Team member ${i}`}
//                   fill
//                   className={styles.memberImg}
//                 /> */}
//               </div>
//               <h3 className={styles.memberName}>Groomer Name</h3>
//               <p className={styles.memberRole}>Professional Dog Groomer</p>
//               <p className={styles.memberBio}>
//                 Certified professional with X years of experience in dog grooming and animal care.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.ctaSection}>
//         <h2 className={styles.ctaTitle}>Ready to Book a Grooming Session?</h2>
//         <p className={styles.ctaDescription}>
//           Experience the PawSpace difference with our premium at-home dog grooming services.
//         </p>
//         <a href="/services" className={`button button-primary ${styles.ctaButton}`}>
//           View Our Services
//         </a>
//       </div>
//     </div>
//   )
// }


// import Image from "next/image"
// import Link from "next/link"
import { Heart, Home, Award, BookOpen } from "lucide-react"
import styles from "../Styles/About.module.css"
import basicdog from "../Assets/normalhomeservice1.png";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>About PawSpace</h1>
        <p className={styles.description}>Providing premium dog grooming services at your doorstep in Bangalore</p>
      </div>

      <div className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2 className={styles.storyTitle}>Our Story</h2>
          <p className={styles.storyText}>
            PawSpace was founded with a simple mission: to provide high-quality, stress-free grooming services for dogs
            in the comfort of their own homes. We understand that many dogs experience anxiety in unfamiliar
            environments, which is why we bring our professional grooming services directly to your doorstep.
          </p>
          <p className={styles.storyText}>
            What started as a small operation has grown into Bangalore's most trusted pet grooming service, with over
            50,000 satisfied customers and their furry friends. Our team of certified groomers is passionate about
            animal welfare and dedicated to providing the best care possible.
          </p>
          <p className={styles.storyText}>
            We believe that regular grooming is essential for your pet's health and happiness, and we're committed to
            making the process as convenient and enjoyable as possible for both you and your dog.
          </p>
        </div>
        <div className={styles.storyImage}>
          <img
            src={basicdog}
            alt="Dog grooming professional with a happy dog"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.valuesSection}>
        <h2 className={styles.valuesTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIconWrapper}>
              <Heart className={styles.valueIcon} />
            </div>
            <h3 className={styles.valueTitle}>Compassion</h3>
            <p className={styles.valueText}>
              We treat every dog with kindness and respect, ensuring they feel comfortable and safe throughout the
              grooming process.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconWrapper}>
              <Award className={styles.valueIcon} />
            </div>
            <h3 className={styles.valueTitle}>Quality</h3>
            <p className={styles.valueText}>
              We use premium products and techniques to provide the highest standard of grooming services for your
              beloved pet.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconWrapper}>
              <Home className={styles.valueIcon} />
            </div>
            <h3 className={styles.valueTitle}>Convenience</h3>
            <p className={styles.valueText}>
              Our at-home service eliminates the stress of transportation and waiting, making grooming a pleasant
              experience.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconWrapper}>
              <BookOpen className={styles.valueIcon} />
            </div>
            <h3 className={styles.valueTitle}>Education</h3>
            <p className={styles.valueText}>
              We believe in empowering pet parents with knowledge about proper grooming practices and pet care.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {[
            { name: "Priya Sharma", experience: "8" },
            { name: "Rahul Patel", experience: "6" },
            { name: "Ananya Desai", experience: "5" },
          ].map((member, i) => (
            <div key={i} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img
                  src={basicdog}
                  alt={`${member.name} - Dog Groomer`}
                  width={256}
                  height={256}
                  className={styles.memberImg}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>Professional Dog Groomer</p>
              <p className={styles.memberBio}>
                Certified professional with {member.experience} years of experience in dog grooming and animal care.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Book a Grooming Session?</h2>
        <p className={styles.ctaDescription}>
          Experience the PawSpace difference with our premium at-home dog grooming services.
        </p>
        <Link to="/services" className={`${styles.ctaButton}`}>
          View Our Services
        </Link>
      </div>
    </div>
  )
}

