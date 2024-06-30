import React, { useState } from 'react';

const Faq = () => {
  // Data for FAQ items
  const faqs = [
    {
      id: 1,
      question: "What is the purpose of this pen?",
      answer: "This pen is designed to provide web developers with boilerplate code for a FAQ Accordion."
    },
    {
      id: 2,
      question: "What is an accordion?",
      answer: "An accordion is a vertically stacked list of headers that users can click on to reveal more information about a business."
    },
    {
      id: 3,
      question: "How can I customize the accordion?",
      answer: "You can customize the accordion by modifying the CSS styles and changing the HTML structure as per your needs."
    },
    {
      id: 4,
      question: "Is this accordion responsive?",
      answer: "Yes, this accordion is designed to be responsive and will adjust its layout based on the screen size."
    },
    {
      id: 5,
      question: "Can I use this accordion in my project?",
      answer: "Absolutely! Feel free to use this accordion in your projects. You can modify and adapt it as needed."
    }
  ];

  // State to manage which accordion is currently open
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle accordion open/close state
  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // Close if already open
    } else {
      setActiveAccordion(index); // Open if closed
    }
  };

  return (
    <div className="container">
      <div className="accordion__wrapper">
        <h1 className="accordion__title">Frequently Asked Questions</h1>

        {/* Mapping through each FAQ item */}
        {faqs.map((faq, index) => (
          <div className="accordion" key={faq.id}>
            <div className="accordion__header">
              <h2 className="accordion__question">{faq.question}</h2>
              <span className="accordion__icon" onClick={() => toggleAccordion(index)}>
                {activeAccordion === index ? '-' : '+'}
              </span>
            </div>
            {/* Show content only if accordion is active */}
            {activeAccordion === index && (
              <div className="">
                <p className="accordion__answer">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
