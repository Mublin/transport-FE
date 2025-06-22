import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Book Your Delivery',
      description: 'Fill out our simple booking form with pickup and delivery details.',
      icon: 'edit',
      color: 'bg-blue-500'
    },
    {
      number: '02',
      title: 'Get Instant Quote',
      description: 'Receive an immediate cost estimate based on distance and package type.',
      icon: 'calculator',
      color: 'bg-green-500'
    },
    {
      number: '03',
      title: 'Driver Assignment',
      description: 'We assign the nearest available driver to your delivery request.',
      icon: 'user-check',
      color: 'bg-purple-500'
    },
    {
      number: '04',
      title: 'Package Pickup',
      description: 'Our driver arrives at your location to collect the package.',
      icon: 'box',
      color: 'bg-orange-500'
    },
    {
      number: '05',
      title: 'Real-time Tracking',
      description: 'Track your package in real-time from pickup to delivery.',
      icon: 'map-marker-alt',
      color: 'bg-red-500'
    },
    {
      number: '06',
      title: 'Safe Delivery',
      description: 'Your package is delivered safely to the recipient with confirmation.',
      icon: 'check-circle',
      color: 'bg-teal-500'
    }
  ]

  const features = [
    {
      icon: 'shield-alt',
      title: 'Secure Handling',
      description: 'All packages are handled with care and fully insured during transit.'
    },
    {
      icon: 'clock',
      title: 'Time Guarantee',
      description: 'We guarantee delivery within the promised timeframe or your money back.'
    },
    {
      icon: 'phone',
      title: '24/7 Support',
      description: 'Our customer support team is available round the clock to assist you.'
    },
    {
      icon: 'dollar-sign',
      title: 'Transparent Pricing',
      description: 'No hidden fees. What you see in the quote is what you pay.'
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
              How It Works
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Getting your packages delivered is simple and straightforward. 
              Here's how our process works from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 6-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From booking to delivery, we make it easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <FontAwesomeIcon icon={step.icon as any} className="text-2xl" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Service?
            </h2>
            <p className="text-xl text-gray-600">
              We go above and beyond to ensure your satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={feature.icon as any} className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fair pricing with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">₦1,000</div>
                <p className="text-gray-600 mb-6">2-3 business days</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Up to 5kg</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Basic tracking</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Insurance included</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-600 text-white p-8 rounded-lg shadow-lg border-2 border-primary-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Express</h3>
                <div className="text-4xl font-bold mb-4">₦1,500</div>
                <p className="text-blue-100 mb-6">Next business day</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-400 mr-2" />
                    <span>Up to 10kg</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-400 mr-2" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-400 mr-2" />
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-400 mr-2" />
                    <span>SMS notifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Same Day</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">₦2,000</div>
                <p className="text-gray-600 mb-6">Within 6 hours</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Up to 15kg</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Live GPS tracking</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Dedicated driver</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon="check" className="text-green-500 mr-2" />
                    <span>Photo confirmation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              * Additional charges apply for packages over the weight limit
            </p>
            <Link
              to="/booking"
              className="btn-primary px-8 py-3 text-lg"
            >
              Get Started Now
              <FontAwesomeIcon icon="arrow-right" className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I track my package?
              </h3>
              <p className="text-gray-600">
                Once your package is picked up, you'll receive a tracking number via SMS. 
                You can use this to track your package in real-time on our website.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if my package is damaged or lost?
              </h3>
              <p className="text-gray-600">
                All packages are insured up to their declared value. If your package is 
                damaged or lost, we'll provide full compensation based on the declared value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I schedule a pickup for later?
              </h3>
              <p className="text-gray-600">
                Yes! You can schedule pickups up to 7 days in advance. Just select your 
                preferred date and time when booking.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View All FAQs
              <FontAwesomeIcon icon="arrow-right" className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HowItWorksPage