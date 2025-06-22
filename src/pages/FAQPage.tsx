import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const faqs: FAQItem[] = [
    {
      question: 'How do I book a delivery?',
      answer: 'You can book a delivery by filling out our online booking form, calling our customer service, or using our mobile app. Simply provide pickup and delivery details, package information, and choose your preferred delivery speed.',
      category: 'booking'
    },
    {
      question: 'What are your delivery areas?',
      answer: 'We currently serve all areas within Kano State, including Kano Metropolitan, Wudil, Gwarzo, Dawakin Tofa, and surrounding areas. We are continuously expanding our coverage area.',
      category: 'delivery'
    },
    {
      question: 'How much does delivery cost?',
      answer: 'Our pricing starts from ₦1,000 for standard delivery (2-3 days), ₦1,500 for express delivery (next day), and ₦2,000 for same-day delivery. Final cost depends on distance, package size, and weight.',
      category: 'pricing'
    },
    {
      question: 'Can I track my package?',
      answer: 'Yes! Once your package is picked up, you\'ll receive a tracking number via SMS. You can track your package in real-time on our website or mobile app.',
      category: 'tracking'
    },
    {
      question: 'What if my package is damaged or lost?',
      answer: 'All packages are insured up to their declared value. If your package is damaged or lost during transit, we provide full compensation based on the declared value. Contact our support team immediately to file a claim.',
      category: 'insurance'
    },
    {
      question: 'What items can I send?',
      answer: 'We accept most items including documents, electronics, clothing, food items, and fragile goods. We do not accept illegal items, hazardous materials, or perishables that require special handling.',
      category: 'items'
    },
    {
      question: 'How do I pay for delivery?',
      answer: 'We accept cash on pickup, bank transfers, mobile money, and online payments. Payment is required before pickup for online bookings.',
      category: 'payment'
    },
    {
      question: 'Can I schedule a pickup for later?',
      answer: 'Yes! You can schedule pickups up to 7 days in advance. Just select your preferred date and time when booking. We also offer recurring pickup schedules for businesses.',
      category: 'booking'
    },
    {
      question: 'What are your operating hours?',
      answer: 'We operate Monday to Friday from 8AM to 8PM, and weekends from 9AM to 6PM. Same-day delivery is available during operating hours only.',
      category: 'general'
    },
    {
      question: 'Do you provide delivery confirmation?',
      answer: 'Yes! You\'ll receive SMS and email notifications when your package is picked up, in transit, and delivered. For premium services, we also provide photo confirmation of delivery.',
      category: 'tracking'
    },
    {
      question: 'What if the recipient is not available?',
      answer: 'Our driver will attempt delivery up to 3 times. If the recipient is unavailable, we\'ll hold the package at our facility for 5 days. Additional storage fees may apply after this period.',
      category: 'delivery'
    },
    {
      question: 'How do I become a driver?',
      answer: 'To join our driver network, you need a valid driver\'s license, vehicle registration, insurance, and smartphone. Apply through our website or visit our office for the application process.',
      category: 'driver'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'booking', label: 'Booking' },
    { key: 'delivery', label: 'Delivery' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'tracking', label: 'Tracking' },
    { key: 'payment', label: 'Payment' },
    { key: 'insurance', label: 'Insurance' },
    { key: 'general', label: 'General' }
  ]

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our delivery services. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.key
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <FontAwesomeIcon
                    icon={activeIndex === index ? "minus" : "plus"}
                    className={`text-primary-600 transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our customer support team is here to help you 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+2348031234567"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <FontAwesomeIcon icon="phone" className="mr-2" />
                  Call Support
                </a>
                <a
                  href="mailto:support@deliveryinkano.com"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <FontAwesomeIcon icon="envelope" className="mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQPage