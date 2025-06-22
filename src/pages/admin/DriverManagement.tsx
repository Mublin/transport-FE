import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Driver {
  id: string
  name: string
  email: string
  phone: string
  vehicle: string
  license: string
  status: 'available' | 'busy' | 'offline' | 'suspended'
  rating: number
  totalDeliveries: number
  earnings: string
  joinDate: string
  location: string
}

const DriverManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([])

  const drivers: Driver[] = [
    {
      id: 'DRV-001',
      name: 'Ibrahim Musa',
      email: 'ibrahim.musa@email.com',
      phone: '+234 806 987 6543',
      vehicle: 'Honda Civic - ABC 123 KN',
      license: 'KN/DL/2023/001',
      status: 'available',
      rating: 4.8,
      totalDeliveries: 145,
      earnings: '₦87,000',
      joinDate: '2024-01-05',
      location: 'Kano Metropolitan'
    },
    {
      id: 'DRV-002',
      name: 'Yusuf Aliyu',
      email: 'yusuf.aliyu@email.com',
      phone: '+234 803 456 7890',
      vehicle: 'Toyota Corolla - XYZ 456 KN',
      license: 'KN/DL/2023/002',
      status: 'busy',
      rating: 4.6,
      totalDeliveries: 98,
      earnings: '₦59,000',
      joinDate: '2024-01-08',
      location: 'Gwale'
    },
    {
      id: 'DRV-003',
      name: 'Aisha Mohammed',
      email: 'aisha.mohammed@email.com',
      phone: '+234 809 123 4567',
      vehicle: 'Nissan Sentra - DEF 789 KN',
      license: 'KN/DL/2023/003',
      status: 'available',
      rating: 4.9,
      totalDeliveries: 167,
      earnings: '₦102,000',
      joinDate: '2024-01-03',
      location: 'Fagge'
    },
    {
      id: 'DRV-004',
      name: 'Abdullahi Garba',
      email: 'abdullahi.garba@email.com',
      phone: '+234 805 987 6543',
      vehicle: 'Hyundai Elantra - GHI 012 KN',
      license: 'KN/DL/2023/004',
      status: 'offline',
      rating: 4.4,
      totalDeliveries: 76,
      earnings: '₦45,600',
      joinDate: '2024-01-12',
      location: 'Dala'
    },
    {
      id: 'DRV-005',
      name: 'Hauwa Aliyu',
      email: 'hauwa.aliyu@email.com',
      phone: '+234 807 234 5678',
      vehicle: 'Kia Cerato - JKL 345 KN',
      license: 'KN/DL/2023/005',
      status: 'suspended',
      rating: 3.8,
      totalDeliveries: 23,
      earnings: '₦13,800',
      joinDate: '2024-01-15',
      location: 'Tarauni'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'busy':
        return 'bg-yellow-100 text-yellow-800'
      case 'offline':
        return 'bg-gray-100 text-gray-800'
      case 'suspended':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || driver.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleSelectDriver = (driverId: string) => {
    setSelectedDrivers(prev =>
      prev.includes(driverId)
        ? prev.filter(id => id !== driverId)
        : [...prev, driverId]
    )
  }

  const handleSelectAll = () => {
    if (selectedDrivers.length === filteredDrivers.length) {
      setSelectedDrivers([])
    } else {
      setSelectedDrivers(filteredDrivers.map(d => d.id))
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon="star"
        className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Driver Management</h1>
          <p className="text-gray-600 mt-2">
            Manage your delivery drivers and their performance
          </p>
        </div>
        <button className="btn-primary">
          <FontAwesomeIcon icon="user-plus" className="mr-2" />
          Add Driver
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-3xl font-bold text-green-600">
                  {drivers.filter(d => d.status === 'available').length}
                </p>
              </div>
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="check-circle" className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Busy</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {drivers.filter(d => d.status === 'busy').length}
                </p>
              </div>
              <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="truck" className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Offline</p>
                <p className="text-3xl font-bold text-gray-600">
                  {drivers.filter(d => d.status === 'offline').length}
                </p>
              </div>
              <div className="bg-gray-100 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="pause-circle" className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-3xl font-bold text-gray-900">
                  {(drivers.reduce((sum, d) => sum + d.rating, 0) / drivers.length).toFixed(1)}
                </p>
              </div>
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="star" className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FontAwesomeIcon
                  icon="search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search drivers..."
                  className="form-input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="form-input"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="busy">Busy</option>
                <option value="offline">Offline</option>
                <option value="suspended">Suspended</option>
              </select>
              <button className="btn-secondary">
                <FontAwesomeIcon icon="map-marker-alt" className="mr-2" />
                View Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedDrivers.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-blue-800 font-medium">
              {selectedDrivers.length} drivers selected
            </span>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="download" className="mr-1" />
                Export
              </button>
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="bell" className="mr-1" />
                Notify
              </button>
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="ban" className="mr-1" />
                Suspend
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drivers Table */}
      <div className="card">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedDrivers.length === filteredDrivers.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Driver
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDrivers.map((driver) => (
                  <tr key={driver.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedDrivers.includes(driver.id)}
                        onChange={() => handleSelectDriver(driver.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                          <FontAwesomeIcon icon="user" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                          <div className="text-sm text-gray-500">{driver.id}</div>
                          <div className="text-xs text-gray-500">{driver.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{driver.email}</div>
                      <div className="text-sm text-gray-500">{driver.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{driver.vehicle}</div>
                      <div className="text-sm text-gray-500">License: {driver.license}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(driver.status)}`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center mb-1">
                          {renderStars(driver.rating)}
                          <span className="ml-1 text-xs text-gray-500">({driver.rating})</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {driver.totalDeliveries} deliveries
                        </div>
                        <div className="text-xs font-medium text-green-600">
                          {driver.earnings}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-900">
                          <FontAwesomeIcon icon="eye" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FontAwesomeIcon icon="edit" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <FontAwesomeIcon icon="map-marker-alt" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <FontAwesomeIcon icon="ban" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
          <span className="font-medium">{filteredDrivers.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">Previous</button>
          <button className="btn-secondary">Next</button>
        </div>
      </div>
    </div>
  )
}

export default DriverManagement