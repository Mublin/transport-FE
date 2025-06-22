import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { useNotification } from '../../contexts/NotificationContext'

interface GeneralSettings {
  companyName: string
  companyEmail: string
  companyPhone: string
  companyAddress: string
  supportEmail: string
  supportPhone: string
}

interface DeliverySettings {
  standardRate: number
  expressRate: number
  sameDayRate: number
  maxWeight: number
  maxDistance: number
  operatingHours: string
}

interface NotificationSettings {
  emailNotifications: boolean
  smsNotifications: boolean
  pushNotifications: boolean
  driverNotifications: boolean
  customerNotifications: boolean
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [isLoading, setIsLoading] = useState(false)
  const { showNotification } = useNotification()

  const generalForm = useForm<GeneralSettings>({
    defaultValues: {
      companyName: 'Delivery in Kano',
      companyEmail: 'info@deliveryinkano.com',
      companyPhone: '+234 803 123 4567',
      companyAddress: '123 Ahmadu Bello Way, Kano, Nigeria',
      supportEmail: 'support@deliveryinkano.com',
      supportPhone: '+234 806 987 6543'
    }
  })

  const deliveryForm = useForm<DeliverySettings>({
    defaultValues: {
      standardRate: 1000,
      expressRate: 1500,
      sameDayRate: 2000,
      maxWeight: 50,
      maxDistance: 100,
      operatingHours: '08:00-20:00'
    }
  })

  const notificationForm = useForm<NotificationSettings>({
    defaultValues: {
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: false,
      driverNotifications: true,
      customerNotifications: true
    }
  })

  const tabs = [
    { id: 'general', name: 'General', icon: 'cog' },
    { id: 'delivery', name: 'Delivery', icon: 'truck' },
    { id: 'notifications', name: 'Notifications', icon: 'bell' },
    { id: 'security', name: 'Security', icon: 'shield-alt' },
    { id: 'integrations', name: 'Integrations', icon: 'plug' }
  ]

  const onSubmitGeneral = async (data: GeneralSettings) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      showNotification('General settings updated successfully!', 'success')
    } catch (error) {
      showNotification('Failed to update settings. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmitDelivery = async (data: DeliverySettings) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      showNotification('Delivery settings updated successfully!', 'success')
    } catch (error) {
      showNotification('Failed to update settings. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmitNotifications = async (data: NotificationSettings) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      showNotification('Notification settings updated successfully!', 'success')
    } catch (error) {
      showNotification('Failed to update settings. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your application settings and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <FontAwesomeIcon icon={tab.icon as any} className="mr-3" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'general' && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">General Settings</h3>
                <p className="text-sm text-gray-600">Basic company information and contact details</p>
              </div>
              <div className="card-body">
                <form onSubmit={generalForm.handleSubmit(onSubmitGeneral)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        className="form-input"
                        {...generalForm.register('companyName', { required: 'Company name is required' })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Company Email</label>
                      <input
                        type="email"
                        className="form-input"
                        {...generalForm.register('companyEmail', { required: 'Company email is required' })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Company Phone</label>
                      <input
                        type="tel"
                        className="form-input"
                        {...generalForm.register('companyPhone', { required: 'Company phone is required' })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Support Phone</label>
                      <input
                        type="tel"
                        className="form-input"
                        {...generalForm.register('supportPhone', { required: 'Support phone is required' })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Company Address</label>
                    <textarea
                      rows={3}
                      className="form-input"
                      {...generalForm.register('companyAddress', { required: 'Company address is required' })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Support Email</label>
                    <input
                      type="email"
                      className="form-input"
                      {...generalForm.register('supportEmail', { required: 'Support email is required' })}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                          Saving...
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Delivery Settings</h3>
                <p className="text-sm text-gray-600">Configure delivery rates and operational parameters</p>
              </div>
              <div className="card-body">
                <form onSubmit={deliveryForm.handleSubmit(onSubmitDelivery)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="form-label">Standard Rate (₦)</label>
                      <input
                        type="number"
                        className="form-input"
                        {...deliveryForm.register('standardRate', { required: 'Standard rate is required' })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Express Rate (₦)</label>
                      <input
                        type="number"
                        className="form-input"
                        {...deliveryForm.register('expressRate', { required: 'Express rate is required' })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Same Day Rate (₦)</label>
                      <input
                        type="number"
                        className="form-input"
                        {...deliveryForm.register('sameDayRate', { required: 'Same day rate is required' })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Maximum Weight (kg)</label>
                      <input
                        type="number"
                        className="form-input"
                        {...deliveryForm.register('maxWeight', { required: 'Maximum weight is required' })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Maximum Distance (km)</label>
                      <input
                        type="number"
                        className="form-input"
                        {...deliveryForm.register('maxDistance', { required: 'Maximum distance is required' })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Operating Hours</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g., 08:00-20:00"
                      {...deliveryForm.register('operatingHours', { required: 'Operating hours are required' })}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                          Saving...
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
                <p className="text-sm text-gray-600">Configure how and when notifications are sent</p>
              </div>
              <div className="card-body">
                <form onSubmit={notificationForm.handleSubmit(onSubmitNotifications)} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive notifications via email</p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        {...notificationForm.register('emailNotifications')}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">SMS Notifications</h4>
                        <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        {...notificationForm.register('smsNotifications')}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Push Notifications</h4>
                        <p className="text-sm text-gray-500">Receive browser push notifications</p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        {...notificationForm.register('pushNotifications')}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Driver Notifications</h4>
                        <p className="text-sm text-gray-500">Send notifications to drivers</p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        {...notificationForm.register('driverNotifications')}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Customer Notifications</h4>
                        <p className="text-sm text-gray-500">Send notifications to customers</p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        {...notificationForm.register('customerNotifications')}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                          Saving...
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">Password Security</h3>
                  <p className="text-sm text-gray-600">Update your password and security settings</p>
                </div>
                <div className="card-body">
                  <form className="space-y-6">
                    <div>
                      <label className="form-label">Current Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">New Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Confirm New Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="btn-primary">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                </div>
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Enable 2FA</h4>
                      <p className="text-sm text-gray-500">Secure your account with two-factor authentication</p>
                    </div>
                    <button className="btn-primary">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Third-party Integrations</h3>
                <p className="text-sm text-gray-600">Connect with external services and APIs</p>
              </div>
              <div className="card-body">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon="envelope" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email Service</h4>
                        <p className="text-sm text-gray-500">Configure email delivery service</p>
                      </div>
                    </div>
                    <button className="btn-secondary">Configure</button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon="mobile-alt" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">SMS Service</h4>
                        <p className="text-sm text-gray-500">Configure SMS notification service</p>
                      </div>
                    </div>
                    <button className="btn-secondary">Configure</button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon="credit-card" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Payment Gateway</h4>
                        <p className="text-sm text-gray-500">Configure payment processing</p>
                      </div>
                    </div>
                    <button className="btn-secondary">Configure</button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon="map-marker-alt" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Maps API</h4>
                        <p className="text-sm text-gray-500">Configure mapping and location services</p>
                      </div>
                    </div>
                    <button className="btn-secondary">Configure</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings