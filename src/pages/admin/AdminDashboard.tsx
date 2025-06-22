import React, { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../contexts/AuthContext'
import DashboardOverview from './DashboardOverview'
import DeliveryManagement from './DeliveryManagement'
import UserManagement from './UserManagement'
import DriverManagement from './DriverManagement'
import Analytics from './Analytics'
import Settings from './Settings'

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    {
      name: 'Overview',
      href: '/admin',
      icon: 'chart-bar',
      current: location.pathname === '/admin'
    },
    {
      name: 'Deliveries',
      href: '/admin/deliveries',
      icon: 'truck',
      current: location.pathname === '/admin/deliveries'
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: 'users',
      current: location.pathname === '/admin/users'
    },
    {
      name: 'Drivers',
      href: '/admin/drivers',
      icon: 'user',
      current: location.pathname === '/admin/drivers'
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: 'chart-line',
      current: location.pathname === '/admin/analytics'
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: 'cog',
      current: location.pathname === '/admin/settings'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 lg:flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:h-[100%] lg:translate-x-0 lg:w-[15%]  lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-center h-16 px-4 bg-primary-600">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-primary-600 p-2 rounded-lg">
              <FontAwesomeIcon icon="truck" className="text-xl" />
            </div>
            <span className="text-xl font-bold text-white">
              Admin Panel
            </span>
          </div>
        </div>

        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${item.current
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <FontAwesomeIcon
                  icon={item.icon as any}
                  className={`
                    mr-3 text-lg
                    ${item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'}
                  `}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* User info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon="user" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.email}
              </p>
            </div>
            <button
              onClick={logout}
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <FontAwesomeIcon icon="sign-out-alt" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:w-[100%] lg:pl-[15%]">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700 lg:hidden"
            >
              <FontAwesomeIcon icon="bars" className="text-xl" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleString()}
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Live data" />
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route index element={<DashboardOverview />} />
            <Route path="deliveries" element={<DeliveryManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="drivers" element={<DriverManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard