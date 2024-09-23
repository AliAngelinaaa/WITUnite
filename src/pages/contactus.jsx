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
        <img className='contactimg' src={wit} alt="WIT Unite" style={{ width: '100%', height: 'auto' }} />
      </div>
      <section className="faq-section p-5">
        <div className="faq-container max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-semibold mb-8 text-custom-pink-dark">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item mb-6 border-b border-custom-pink-dark pb-4" key={index}>
              <div
                className={`faq-question w-full text-lg font-medium cursor-pointer p-4 bg-white border border-custom-pink-dark rounded-md transition-all duration-300 relative ${activeIndex === index ? 'active bg-custom-pink-light shadow-md border-custom-pink-dark' : ''}`}
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-xl transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'block' : 'hidden'} p-4 border border-custom-pink-dark rounded-md mt-2`}>
                <p className="m-0 text-base" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ContactUs;
