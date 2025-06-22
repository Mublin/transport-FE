import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import Cookies from 'js-cookie'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'driver'
  accessToken: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: RegisterData) => Promise<boolean>
  isLoading: boolean
}

interface RegisterData {
  name: string
  email: string
  password: string
  phone: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing token on app load
    const token = Cookies.get('auth_token')
    if (token) {
      // In a real app, you would validate the token with your backend
      // For demo purposes, we'll create a mock user
      setUser({
        id: '1',
        email: 'admin@deliveryinkano.com',
        name: 'Admin User',
        role: 'admin',
        accessToken: 'jdgfdfffffffffffffffffffffffffffff'
      })
      localStorage.setItem("accessToken", token)
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Mock login - in real app, make API call
      if (email === 'admin@deliveryinkano.com' && password === 'admin123') {
        const mockUser: User = {
          id: '1',
          email: email,
          name: 'Admin User',
          role: 'admin',
          accessToken: 'ghhhhhdttytdthmghhgcgh'
        }
        setUser(mockUser)
      localStorage.setItem("accessToken", "eejhrjhe")

        Cookies.set('auth_token', 'mock_jwt_token', { expires: 7 })
        return true
      }
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Mock registration - in real app, make API call
      const mockUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: 'user',
        accessToken: 'hhhjjjjjjjjjjjjjjjjjj'
      }
      setUser(mockUser)
      localStorage.setItem("accessToken", "dffdf")

      Cookies.set('auth_token', 'mock_jwt_token', { expires: 7 })
      return true
    } catch (error) {
      console.error('Registration error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    Cookies.remove('auth_token')
    localStorage.removeItem('accessToken')
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
    register,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}