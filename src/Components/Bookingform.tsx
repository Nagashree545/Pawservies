
// import type React from "react"

// import { useState } from "react"
// import styles from "../Styles/bookingform.module.css"

// export default function BookingForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     location: "",
//     service: "",
//     notes: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       alert("Booking request submitted! We'll call you back within 30 minutes.")
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         location: "",
//         service: "",
//         notes: "",
//       })
//     }, 1500)
//   }

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <div className={styles.formGroup}>
//         <label htmlFor="name" className={styles.label}>
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required
//           className={styles.input}
//         />
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="phone" className={styles.label}>
//           WhatsApp Number
//         </label>
//         <input
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Enter your WhatsApp number"
//           required
//           className={styles.input}
//         />
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="email" className={styles.label}>
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           type="email"
//           placeholder="Enter your email"
//           required
//           className={styles.input}
//         />
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="location" className={styles.label}>
//           Locality
//         </label>
//         <input
//           id="location"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           placeholder="Enter your locality in Bangalore"
//           required
//           className={styles.input}
//         />
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="service" className={styles.label}>
//           Service Package
//         </label>
//         <select id="service" name="service" value={formData.service} onChange={handleChange} className={styles.select}>
//           <option value="">Select a package</option>
//           <option value="basic">Basic (₹799)</option>
//           <option value="standard">Standard (₹1299)</option>
//           <option value="reformation">Reformation (₹1399)</option>
//           <option value="luxury">Luxury (₹1499)</option>
//           <option value="party">Party Special (₹2199)</option>
//         </select>
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="notes" className={styles.label}>
//           Additional Notes
//         </label>
//         <textarea
//           id="notes"
//           name="notes"
//           value={formData.notes}
//           onChange={handleChange}
//           placeholder="Any special requirements or information about your dog"
//           className={styles.textarea}
//           rows={3}
//         />
//       </div>

//       <button type="submit" className={`button button-primary ${styles.submitButton}`} disabled={isSubmitting}>
//         {isSubmitting ? "Submitting..." : "Book Now"}
//       </button>

//       <p className={styles.formFooter}>Trusted by 50,000+ dog parents | Book Top-Rated Pet Care Today!</p>
//     </form>
//   )
// }

import type React from "react"
import { useState } from "react"
import styles from "../Styles/bookingform.module.css"
import emailjs from "emailjs-com"

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs.send(
      "service_0dff8x8",
      "template_n66bi51",
      formData,
      "FuVBfmIgX8fSxvLa4"
    )
    .then((response) => {
      console.log("Success:", response);
      alert("Booking request submitted! We'll call you back within 30 minutes.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "",
        notes: "",
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send your booking request. Please try again.");
      setIsSubmitting(false);
    });
  };
  

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>WhatsApp Number</label>
        <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your WhatsApp number" required className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" required className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="location" className={styles.label}>Locality</label>
        <input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your locality in Bangalore" required className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="service" className={styles.label}>Service Package</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange} className={styles.select} required>
          <option value="">Select a package</option>
          <option value="basic">Basic (₹799)</option>
          <option value="standard">Standard (₹1299)</option>
          <option value="reformation">Reformation (₹1399)</option>
          <option value="luxury">Luxury (₹1499)</option>
          <option value="party">Party Special (₹2199)</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="notes" className={styles.label}>Additional Notes</label>
        <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Any special requirements or information about your dog" className={styles.textarea} rows={3} />
      </div>

      <button type="submit" className={`button button-primary ${styles.submitButton}`} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Book Now"}
      </button>

      <p className={styles.formFooter}>Trusted by 50,000+ dog parents | Book Top-Rated Pet Care Today!</p>
    </form>
  )
}
