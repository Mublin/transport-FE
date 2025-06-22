import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNotification } from '../contexts/NotificationContext'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showNotification } = useNotification()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      showNotification('Message sent successfully! We\'ll get back to you soon.', 'success')
      reset()
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'phone',
      title: 'Phone',
      details: ['+234 803 123 4567', '+234 806 987 6543'],
      description: 'Call us anytime, 24/7 support'
    },
    {
      icon: 'envelope',
      title: 'Email',
      details: ['info@deliveryinkano.com', 'support@deliveryinkano.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: 'map-marker-alt',
      title: 'Office',
      details: ['123 Ahmadu Bello Way', 'Kano, Nigeria'],
      description: 'Visit our main office'
    },
    {
      icon: 'clock',
      title: 'Hours',
      details: ['Mon - Fri: 8AM - 8PM', 'Sat - Sun: 9AM - 6PM'],
      description: 'Our working hours'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={info.icon as any} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-600 text-sm mt-2">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-input"
                      {...register('phone')}
                    />
                  </div>
                  <div>
                    <label className="form-label">Subject *</label>
                    <select
                      className="form-input"
                      {...register('subject', { required: 'Subject is required' })}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={6}
                    className="form-input"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find Us
              </h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon icon="map-marker-alt" className="text-4xl text-gray-400 mb-4" />
                  <p className="text-gray-600">Interactive map coming soon</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Ahmadu Bello Way, Kano, Nigeria
                  </p>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Need Immediate Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon="phone" className="text-primary-600" />
                    <span className="text-gray-700">Call: +234 803 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon="envelope" className="text-primary-600" />
                    <span className="text-gray-700">Email: support@deliveryinkano.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage