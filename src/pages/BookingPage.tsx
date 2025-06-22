import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNotification } from '../contexts/NotificationContext'

interface BookingForm {
  senderName: string
  senderPhone: string
  senderAddress: string
  receiverName: string
  receiverPhone: string
  receiverAddress: string
  packageType: string
  packageWeight: string
  packageValue: string
  deliveryType: string
  specialInstructions: string
}

const BookingPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)
  const { showNotification } = useNotification()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<BookingForm>()

  const deliveryType = watch('deliveryType')
  const packageWeight = watch('packageWeight')

  // Calculate estimated cost based on delivery type and weight
  React.useEffect(() => {
    if (deliveryType && packageWeight) {
      let baseCost = 0
      switch (deliveryType) {
        case 'standard':
          baseCost = 1000
          break
        case 'express':
          baseCost = 1500
          break
        case 'same-day':
          baseCost = 2000
          break
        default:
          baseCost = 1000
      }

      const weightMultiplier = parseFloat(packageWeight) || 1
      const cost = baseCost + (weightMultiplier > 5 ? (weightMultiplier - 5) * 200 : 0)
      setEstimatedCost(cost)
    }
  }, [deliveryType, packageWeight])

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      showNotification('Booking submitted successfully! We\'ll contact you shortly.', 'success')
      reset()
      setEstimatedCost(null)
    } catch (error) {
      showNotification('Failed to submit booking. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const deliveryOptions = [
    {
      value: 'standard',
      label: 'Standard Delivery',
      description: '2-3 business days',
      icon: 'truck'
    },
    {
      value: 'express',
      label: 'Express Delivery',
      description: 'Next business day',
      icon: 'clock'
    },
    {
      value: 'same-day',
      label: 'Same Day Delivery',
      description: 'Within 6 hours',
      icon: 'bolt'
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
              Book Your Delivery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fast, reliable delivery service across Kano State. 
              Fill out the form below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Sender Information */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <FontAwesomeIcon icon="user" className="mr-3 text-primary-600" />
                  Sender Information
                </h2>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('senderName', { required: 'Sender name is required' })}
                    />
                    {errors.senderName && (
                      <p className="text-red-600 text-sm mt-1">{errors.senderName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      {...register('senderPhone', { required: 'Phone number is required' })}
                    />
                    {errors.senderPhone && (
                      <p className="text-red-600 text-sm mt-1">{errors.senderPhone.message}</p>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="form-label">Pickup Address *</label>
                  <textarea
                    rows={3}
                    className="form-input"
                    {...register('senderAddress', { required: 'Pickup address is required' })}
                  ></textarea>
                  {errors.senderAddress && (
                    <p className="text-red-600 text-sm mt-1">{errors.senderAddress.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Receiver Information */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <FontAwesomeIcon icon="map-marker-alt" className="mr-3 text-primary-600" />
                  Receiver Information
                </h2>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('receiverName', { required: 'Receiver name is required' })}
                    />
                    {errors.receiverName && (
                      <p className="text-red-600 text-sm mt-1">{errors.receiverName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      {...register('receiverPhone', { required: 'Phone number is required' })}
                    />
                    {errors.receiverPhone && (
                      <p className="text-red-600 text-sm mt-1">{errors.receiverPhone.message}</p>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="form-label">Delivery Address *</label>
                  <textarea
                    rows={3}
                    className="form-input"
                    {...register('receiverAddress', { required: 'Delivery address is required' })}
                  ></textarea>
                  {errors.receiverAddress && (
                    <p className="text-red-600 text-sm mt-1">{errors.receiverAddress.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Package Information */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <FontAwesomeIcon icon="box" className="mr-3 text-primary-600" />
                  Package Information
                </h2>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="form-label">Package Type *</label>
                    <select
                      className="form-input"
                      {...register('packageType', { required: 'Package type is required' })}
                    >
                      <option value="">Select type</option>
                      <option value="documents">Documents</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="food">Food Items</option>
                      <option value="fragile">Fragile Items</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.packageType && (
                      <p className="text-red-600 text-sm mt-1">{errors.packageType.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Weight (kg) *</label>
                    <input
                      type="number"
                      step="0.1"
                      className="form-input"
                      {...register('packageWeight', { required: 'Weight is required' })}
                    />
                    {errors.packageWeight && (
                      <p className="text-red-600 text-sm mt-1">{errors.packageWeight.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Estimated Value (₦)</label>
                    <input
                      type="number"
                      className="form-input"
                      {...register('packageValue')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <FontAwesomeIcon icon="clock" className="mr-3 text-primary-600" />
                  Delivery Options
                </h2>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`
                        border-2 rounded-lg p-4 cursor-pointer transition-colors
                        ${watch('deliveryType') === option.value 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        value={option.value}
                        className="sr-only"
                        {...register('deliveryType', { required: 'Delivery type is required' })}
                      />
                      <div className="text-center">
                        <FontAwesomeIcon 
                          icon={option.icon as any} 
                          className={`text-2xl mb-2 ${
                            watch('deliveryType') === option.value 
                              ? 'text-primary-600' 
                              : 'text-gray-400'
                          }`} 
                        />
                        <div className="font-semibold text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.deliveryType && (
                  <p className="text-red-600 text-sm mt-2">{errors.deliveryType.message}</p>
                )}

                <div className="mt-6">
                  <label className="form-label">Special Instructions</label>
                  <textarea
                    rows={3}
                    className="form-input"
                    placeholder="Any special handling instructions..."
                    {...register('specialInstructions')}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Cost Estimate */}
            {estimatedCost && (
              <div className="card bg-green-50 border-green-200">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Estimated Cost
                      </h3>
                      <p className="text-sm text-gray-600">
                        Final cost may vary based on exact distance and package details
                      </p>
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      ₦{estimatedCost.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    Book Delivery
                    <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BookingPage