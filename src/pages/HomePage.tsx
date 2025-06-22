import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: 'clock',
      title: 'Fast Delivery',
      description: 'Same-day delivery across Kano State with real-time tracking'
    },
    {
      icon: 'shield-alt',
      title: 'Secure & Safe',
      description: 'Your packages are insured and handled with utmost care'
    },
    {
      icon: 'users',
      title: 'Trusted Drivers',
      description: 'Verified and experienced drivers you can trust'
    },
    {
      icon: 'dollar-sign',
      title: 'Affordable Rates',
      description: 'Competitive pricing with no hidden fees'
    }
  ]

  const testimonials = [
    {
      name: 'Amina Hassan',
      role: 'Business Owner',
      content: 'Delivery in Kano has transformed how I run my business. Fast, reliable, and professional service every time.',
      rating: 5
    },
    {
      name: 'Ibrahim Musa',
      role: 'Customer',
      content: 'I use their service weekly for my online store. The tracking system is excellent and drivers are always punctual.',
      rating: 5
    },
    {
      name: 'Fatima Abdullahi',
      role: 'Entrepreneur',
      content: 'Best delivery service in Kano! Their customer support is outstanding and prices are very reasonable.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Fast & Reliable
                <span className="text-secondary-400"> Delivery</span>
                <br />in Kano
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connect with trusted drivers for all your delivery needs. 
                Same-day delivery, real-time tracking, and affordable rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                >
                  Book Delivery Now
                  <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                >
                  How It Works
                  <FontAwesomeIcon icon="play" className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Delivery Service"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon="check-circle" className="text-green-500 text-xl" />
                    <span className="font-semibold">1000+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delivery in Kano?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the most reliable and efficient delivery service in Kano State
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={feature.icon as any} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Deliveries Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Trusted Drivers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon="star"
                      className="text-yellow-400 text-lg"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Book your first delivery today and experience the difference
          </p>
          <Link
            to="/booking"
            className="bg-white text-secondary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Book Your Delivery
            <FontAwesomeIcon icon="arrow-right" className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage