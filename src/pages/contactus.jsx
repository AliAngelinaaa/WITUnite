import React, { useState } from 'react';
import ContactForm from '../components/contactform';
import wit from "../images/wit.png";
import '../css/contactus.css';

function ContactUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is WIT Unite?", answer: "WIT Unite is a community-focused organization dedicated to supporting women in tech through networking, mentorship, and educational resources." },
    { question: "How can I join WIT Unite?", answer: "You can join WIT Unite by visiting our <a href='https://discord.gg/PjwYfs48AX'>discord</a> and going through the verification process. We welcome individuals from all backgrounds and experience levels as long as they have a valid affiliation with CUNY." },
    { question: "Who can benefit from WIT Unite?", answer: "WIT Unite benefits women in tech, from students to professionals, by providing access to mentorship, networking opportunities, and career development resources." },
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        <ContactForm />
        <img className='contactimg' src={wit} alt="WIT Unite" height='580px' />
      </div>
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggleAnswer(index)}>
                {faq.question}
              </button>
              <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ContactUs;
