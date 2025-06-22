import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { useNotification } from '../contexts/NotificationContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface RegisterForm {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

const RegisterPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register: registerUser } = useAuth()
  const { showNotification } = useNotification()
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>()

  const password = watch('password')

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true)
    try {
      const success = await registerUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password
      })
      
      if (success) {
        showNotification('Registration successful! Welcome to Delivery in Kano.', 'success')
        navigate('/')
      } else {
        showNotification('Registration failed. Please try again.', 'error')
      }
    } catch (error) {
      showNotification('Registration failed. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <div className="bg-primary-600 text-white p-3 rounded-full">
                <FontAwesomeIcon icon="user-plus" className="text-2xl" />
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                sign in to your existing account
              </Link>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  autoComplete="name"
                  className="form-input"
                  placeholder="Enter your full name"
                  {...register('name', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  autoComplete="email"
                  className="form-input"
                  placeholder="Enter your email"
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

              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  autoComplete="tel"
                  className="form-input"
                  placeholder="Enter your phone number"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: 'Invalid phone number'
                    }
                  })}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  className="form-input"
                  placeholder="Create a password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  className="form-input"
                  placeholder="Confirm your password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value =>
                      value === password || 'Passwords do not match'
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                {...register('agreeToTerms', {
                  required: 'You must agree to the terms and conditions'
                })}
              />
              <label className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-600 text-sm">{errors.agreeToTerms.message}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon="user-plus" className="mr-2" />
                    Create account
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default RegisterPage