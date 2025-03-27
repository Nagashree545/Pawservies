import React, { useState } from 'react';
import styles from '../Styles/FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is PawSpace doorstep pet grooming at home?',
    answer: 'Doorstep pet grooming refers to a service where professional pet groomers come to your home to groom your pets. It offers convenience and comfort for both pets and their owners by eliminating the need for transportation and allowing the grooming to be done in a familiar environment. We don’t offer mobile van grooming.',
  },
  {
    question: 'What grooming services do you provide?',
    answer: 'We provide a wide range of grooming services, including baths, haircuts, nail trimming, ear cleaning, and more.',
  },
  {
    question: 'How long does a grooming session usually take?',
    answer: 'A grooming session typically takes between 1 to 2 hours depending on the size and breed of your pet.',
  },
  {
    question: 'Are your groomers trained and experienced?',
    answer:'Our groomers are trained professionals with at least three years of experience handling and grooming pets. They undergo regular training to stay updated with the latest grooming techniques and best practices. Rest assured, your pet will be in safe hands.'
  },
  {
    question: 'What if my pet has special needs or requires specific products?',
    answer:'If your pet has special needs or requires specific products due to allergies or sensitivities, please inform us when scheduling the grooming appointment. We strive to accommodate such requests and will work with you to ensure your pet’s comfort and safety.'
  },
  {
    question: 'Do I need to be present during the grooming session?',
    answer:'You can contact us by phone or on our website to schedule an appointment. Please provide details about your pet, preferred date and time, and any specific grooming services you require. We will do our best to accommodate your request and confirm the appointment.'
  },
  {
    question: ' How do I schedule an appointment with PawSpace?',
    answer:'Our groomers are trained professionals with at least three years of experience handling and grooming pets. They undergo regular training to stay updated with the latest grooming techniques and best practices. Rest assured, your pet will be in safe hands.'
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
       <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
         
        </div>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
            {index + 1}. {item.question}
            <span className={styles.icon}>{openIndex === index ? '▲' : '▶'}</span>
          </button>
          {openIndex === index && <p className={styles.faqAnswer}>{item.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
