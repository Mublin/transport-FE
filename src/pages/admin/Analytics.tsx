import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d')

  const metrics = [
    {
      title: 'Total Revenue',
      value: '₦2,450,000',
      change: '+15.3%',
      changeType: 'increase',
      icon: 'dollar-sign',
      color: 'green'
    },
    {
      title: 'Total Deliveries',
      value: '1,247',
      change: '+12.5%',
      changeType: 'increase',
      icon: 'truck',
      color: 'blue'
    },
    {
      title: 'Average Delivery Time',
      value: '2.4 hrs',
      change: '-8.2%',
      changeType: 'decrease',
      icon: 'clock',
      color: 'yellow'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+2.1%',
      changeType: 'increase',
      icon: 'star',
      color: 'purple'
    }
  ]

  const topDrivers = [
    { name: 'Aisha Mohammed', deliveries: 167, rating: 4.9, earnings: '₦102,000' },
    { name: 'Ibrahim Musa', deliveries: 145, rating: 4.8, earnings: '₦87,000' },
    { name: 'Yusuf Aliyu', deliveries: 98, rating: 4.6, earnings: '₦59,000' },
    { name: 'Abdullahi Garba', deliveries: 76, rating: 4.4, earnings: '₦45,600' },
    { name: 'Hauwa Aliyu', deliveries: 23, rating: 3.8, earnings: '₦13,800' }
  ]

  const recentActivity = [
    { type: 'delivery', message: 'New delivery completed by Ibrahim Musa', time: '2 minutes ago' },
    { type: 'user', message: 'New user registered: Fatima Abdullahi', time: '15 minutes ago' },
    { type: 'driver', message: 'Driver Yusuf Aliyu went online', time: '32 minutes ago' },
    { type: 'payment', message: 'Payment received: ₦2,000 from Mohammed Sani', time: '1 hour ago' },
    { type: 'delivery', message: 'Delivery assigned to Aisha Mohammed', time: '1 hour ago' }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'delivery':
        return 'truck'
      case 'user':
        return 'user-plus'
      case 'driver':
        return 'user'
      case 'payment':
        return 'dollar-sign'
      default:
        return 'info-circle'
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'delivery':
        return 'text-blue-600 bg-blue-100'
      case 'user':
        return 'text-green-600 bg-green-100'
      case 'driver':
        return 'text-purple-600 bg-purple-100'
      case 'payment':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600 mt-2">
            Track performance and gain insights into your delivery operations
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            className="form-input"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="btn-primary">
            <FontAwesomeIcon icon="download" className="mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                </div>
                <div className={`bg-${metric.color}-100 text-${metric.color}-600 w-12 h-12 rounded-full flex items-center justify-center`}>
                  <FontAwesomeIcon icon={metric.icon as any} className="text-xl" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <FontAwesomeIcon
                  icon={metric.changeType === 'increase' ? 'arrow-up' : 'arrow-down'}
                  className={`text-sm mr-1 ${
                    metric.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {metric.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trends</h3>
          </div>
          <div className="card-body">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon icon="chart-line" className="text-4xl text-gray-400 mb-4" />
                <p className="text-gray-600">Revenue chart visualization</p>
                <p className="text-sm text-gray-500">Chart.js integration coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Status Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Delivery Status Distribution</h3>
          </div>
          <div className="card-body">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon icon="chart-pie" className="text-4xl text-gray-400 mb-4" />
                <p className="text-gray-600">Pie chart visualization</p>
                <p className="text-sm text-gray-500">Chart.js integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Drivers */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Drivers</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              {topDrivers.map((driver, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon="user" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{driver.name}</p>
                      <p className="text-xs text-gray-500">{driver.deliveries} deliveries</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <FontAwesomeIcon icon="star" className="text-yellow-400 text-xs" />
                      <span className="text-sm font-medium">{driver.rating}</span>
                    </div>
                    <p className="text-sm font-medium text-green-600">{driver.earnings}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                    <FontAwesomeIcon icon={getActivityIcon(activity.type) as any} className="text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Reports */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Generate Detailed Reports</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center p-6 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <FontAwesomeIcon icon="chart-bar" className="text-3xl mb-2" />
              <span className="font-medium">Delivery Report</span>
              <span className="text-sm text-blue-600">Comprehensive delivery analytics</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              <FontAwesomeIcon icon="dollar-sign" className="text-3xl mb-2" />
              <span className="font-medium">Financial Report</span>
              <span className="text-sm text-green-600">Revenue and earnings breakdown</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              <FontAwesomeIcon icon="users" className="text-3xl mb-2" />
              <span className="font-medium">Driver Report</span>
              <span className="text-sm text-purple-600">Driver performance metrics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics