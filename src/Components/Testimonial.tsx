import { Star } from "lucide-react"
import styles from "../Styles/testimonial.module.css"
import googleimg from "../Assets/googleimg.avif"
export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Indiranagar, Bangalore",
      text: "PawSpace has been a game-changer for my Golden Retriever, Max. He used to get so anxious at grooming salons, but with their at-home service, he's completely relaxed. The groomers are professional, punctual, and truly care about the pets they work with.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      location: "Koramangala, Bangalore",
      text: "I've tried several grooming services for my Labrador, but PawSpace stands out for their attention to detail and quality of service. The convenience of having them come to my home is unmatched, and their prices are reasonable for the premium service they provide.",
      rating: 5,
    },
    {
      name: "Aisha Patel",
      location: "HSR Layout, Bangalore",
      text: "My Shih Tzu looks absolutely adorable after every PawSpace grooming session! The groomers are skilled and patient, even with my fussy little dog. I appreciate how they take the time to understand my preferences and always deliver great results.",
      rating: 4,
    },
  ]

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.description}>
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className={i < testimonial.rating ? styles.star : styles.starEmpty} />
                  ))}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  {/* <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={testimonial.name}
                    fill
                    className={styles.authorImg}
                  /> */}
                  <img/>
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorLocation}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.googleReviews}>
          <div className={styles.reviewsContainer}>
            <div className={styles.googleLogo}>
              {/* <Image src="/placeholder.svg?height=40&width=40" alt="Google Reviews" width={40} height={40} /> */}
              <img src={googleimg} alt="Google Reviews" width={40} height={40} />
            </div>
            <div className={styles.reviewsInfo}>
              <div className={styles.reviewsStars}>
                <div className={styles.stars}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className={styles.star} style={{ height: "1rem", width: "1rem" }} />
                    ))}
                </div>
                <span className={styles.reviewsRating}>4.6</span>
              </div>
              <p className={styles.reviewsCount}>Based on 1500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

