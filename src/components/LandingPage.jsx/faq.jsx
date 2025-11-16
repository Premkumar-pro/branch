import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is this service?',
      answer: 'This is a simple FAQ component that displays frequently asked questions with expandable answers.'
    },
    {
      question: 'How do I use it?',
      answer: 'Click on any question to expand or collapse the answer. You can customize the questions and answers by modifying the faqs array.'
    },
    {
      question: 'Is it mobile responsive?',
      answer: 'Yes, this component is fully responsive and works well on all device sizes.'
    },
    {
      question: 'Can I customize the styling?',
      answer: 'Absolutely! All styles are inline and can be easily modified to match your design preferences.'
    },
    {
      question: 'How do I add more FAQs?',
      answer: 'Simply add new objects to the faqs array with question and answer properties.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '3rem 1rem', background: '#f9fafb', minHeight: '100vh' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.5rem', color: '#1f2937' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>
          Find answers to common questions below
        </p>

        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: index !== faqs.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.parentElement.style.background = '#f3f4f6'}
                onMouseLeave={(e) => e.target.parentElement.style.background = '#fff'}
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    background: '#e5e7eb',
                    borderRadius: '50%',
                    fontSize: '1.25rem',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    padding: '0 1.25rem 1.25rem 1.25rem',
                    color: '#4b5563',
                    lineHeight: '1.6',
                    animation: 'fadeIn 0.3s ease-in'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
