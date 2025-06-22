import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Musa Ibrahim',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Passionate about connecting communities through reliable delivery services.'
    },
    {
      name: 'Aisha Mohammed',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ensures smooth operations and exceptional customer experience.'
    },
    {
      name: 'Yusuf Aliyu',
      role: 'Technology Lead',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Develops innovative solutions to enhance our delivery platform.'
    }
  ]

  const values = [
    {
      icon: 'shield-alt',
      title: 'Reliability',
      description: 'We deliver on our promises, every single time.'
    },
    {
      icon: 'users',
      title: 'Community',
      description: 'Supporting local businesses and connecting communities.'
    },
    {
      icon: 'check',
      title: 'Excellence',
      description: 'Striving for perfection in every delivery we make.'
    },
    {
      icon: 'clock',
      title: 'Efficiency',
      description: 'Fast, smart, and cost-effective delivery solutions.'
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
              About Delivery in Kano
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to revolutionize delivery services in Kano State, 
              connecting people and businesses through reliable, fast, and affordable logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2023, Delivery in Kano was born from a simple observation: 
                businesses and individuals in Kano needed a reliable, technology-driven 
                delivery service that understood the local market.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting with just 5 drivers and a vision, we've grown to become 
                Kano's most trusted delivery platform, serving over 1000 customers 
                and completing thousands of successful deliveries.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to innovate and expand our services, always 
                keeping our customers' needs at the heart of everything we do.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={value.icon as any} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Delivery in Kano
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            To provide fast, reliable, and affordable delivery services that empower 
            businesses to grow and help individuals get what they need, when they need it. 
            We're building the future of logistics in Kano, one delivery at a time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage