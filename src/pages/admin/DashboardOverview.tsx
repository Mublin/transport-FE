import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardOverview: React.FC = () => {
  const stats = [
    {
      name: 'Total Deliveries',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: 'truck'
    },
    {
      name: 'Active Users',
      value: '892',
      change: '+8%',
      changeType: 'increase',
      icon: 'users'
    },
    {
      name: 'Available Drivers',
      value: '34',
      change: '+2',
      changeType: 'increase',
      icon: 'user'
    },
    {
      name: 'Revenue',
      value: '₦2.4M',
      change: '+15%',
      changeType: 'increase',
      icon: 'dollar-sign'
    }
  ]

  const recentDeliveries = [
    {
      id: 'DEL-001',
      customer: 'Amina Hassan',
      driver: 'Ibrahim Musa',
      status: 'delivered',
      amount: '₦1,500',
      time: '2 hours ago'
    },
    {
      id: 'DEL-002',
      customer: 'Fatima Abdullahi',
      driver: 'Yusuf Aliyu',
      status: 'in-transit',
      amount: '₦2,000',
      time: '3 hours ago'
    },
    {
      id: 'DEL-003',
      customer: 'Mohammed Sani',
      driver: 'Aisha Mohammed',
      status: 'picked-up',
      amount: '₦1,200',
      time: '4 hours ago'
    },
    {
      id: 'DEL-004',
      customer: 'Zainab Umar',
      driver: 'Abdullahi Garba',
      status: 'pending',
      amount: '₦1,800',
      time: '5 hours ago'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'in-transit':
        return 'bg-blue-100 text-blue-800'
      case 'picked-up':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your delivery service today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={stat.icon as any} className="text-xl" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <FontAwesomeIcon
                  icon={stat.changeType === 'increase' ? 'arrow-up' : 'arrow-down'}
                  className={`text-sm mr-1 ${
                    stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Placeholder */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Delivery Trends</h3>
          </div>
          <div className="card-body">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon icon="chart-line" className="text-4xl text-gray-400 mb-4" />
                <p className="text-gray-600">Chart visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Deliveries */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Recent Deliveries</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              {recentDeliveries.map((delivery) => (
                <div key={delivery.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900">{delivery.id}</p>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(delivery.status)}`}>
                        {delivery.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {delivery.customer} → {delivery.driver}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium text-gray-900">{delivery.amount}</span>
                      <span className="text-xs text-gray-500">{delivery.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View all deliveries
                <FontAwesomeIcon icon="arrow-right" className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors">
              <FontAwesomeIcon icon="plus" className="mr-2" />
              Add New Delivery
            </button>
            <button className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              <FontAwesomeIcon icon="user-plus" className="mr-2" />
              Add New Driver
            </button>
            <button className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <FontAwesomeIcon icon="download" className="mr-2" />
              Export Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview