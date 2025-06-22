import React, { createContext, useContext, useState, ReactNode } from 'react'

interface NotificationContextType {
  showNotification: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void
}

interface NotificationState {
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  isVisible: boolean
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState>({
    message: '',
    type: 'info',
    isVisible: false
  })

  const showNotification = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    setNotification({
      message,
      type,
      isVisible: true
    })

    // Auto hide after 5 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }))
    }, 5000)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification.isVisible && (
        <div className="fixed top-4 right-4 z-50">
          <div className={`
            px-6 py-4 rounded-lg shadow-lg text-white font-medium
            ${notification.type === 'success' ? 'bg-green-500' : ''}
            ${notification.type === 'error' ? 'bg-red-500' : ''}
            ${notification.type === 'info' ? 'bg-blue-500' : ''}
            ${notification.type === 'warning' ? 'bg-yellow-500' : ''}
          `}>
            {notification.message}
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  )
}