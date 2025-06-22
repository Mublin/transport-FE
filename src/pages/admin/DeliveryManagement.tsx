import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Delivery {
  id: string
  customer: string
  driver: string
  pickup: string
  delivery: string
  status: 'pending' | 'picked-up' | 'in-transit' | 'delivered' | 'cancelled'
  amount: string
  date: string
  trackingNumber: string
}

const DeliveryManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDeliveries, setSelectedDeliveries] = useState<string[]>([])

  const deliveries: Delivery[] = [
    {
      id: 'DEL-001',
      customer: 'Amina Hassan',
      driver: 'Ibrahim Musa',
      pickup: '123 Ahmadu Bello Way, Kano',
      delivery: '456 Zoo Road, Kano',
      status: 'delivered',
      amount: '₦1,500',
      date: '2024-01-15',
      trackingNumber: 'TRK-001-2024'
    },
    {
      id: 'DEL-002',
      customer: 'Fatima Abdullahi',
      driver: 'Yusuf Aliyu',
      pickup: '789 Murtala Mohammed Way, Kano',
      delivery: '321 Ibrahim Taiwo Road, Kano',
      status: 'in-transit',
      amount: '₦2,000',
      date: '2024-01-15',
      trackingNumber: 'TRK-002-2024'
    },
    {
      id: 'DEL-003',
      customer: 'Mohammed Sani',
      driver: 'Aisha Mohammed',
      pickup: '654 Katsina Road, Kano',
      delivery: '987 Hadejia Road, Kano',
      status: 'picked-up',
      amount: '₦1,200',
      date: '2024-01-14',
      trackingNumber: 'TRK-003-2024'
    },
    {
      id: 'DEL-004',
      customer: 'Zainab Umar',
      driver: 'Abdullahi Garba',
      pickup: '147 Gwarzo Road, Kano',
      delivery: '258 Zaria Road, Kano',
      status: 'pending',
      amount: '₦1,800',
      date: '2024-01-14',
      trackingNumber: 'TRK-004-2024'
    },
    {
      id: 'DEL-005',
      customer: 'Usman Bello',
      driver: 'Hauwa Aliyu',
      pickup: '369 Kofar Mata, Kano',
      delivery: '741 Sabon Gari, Kano',
      status: 'cancelled',
      amount: '₦1,000',
      date: '2024-01-13',
      trackingNumber: 'TRK-005-2024'
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
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = delivery.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         delivery.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         delivery.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || delivery.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleSelectDelivery = (deliveryId: string) => {
    setSelectedDeliveries(prev =>
      prev.includes(deliveryId)
        ? prev.filter(id => id !== deliveryId)
        : [...prev, deliveryId]
    )
  }

  const handleSelectAll = () => {
    if (selectedDeliveries.length === filteredDeliveries.length) {
      setSelectedDeliveries([])
    } else {
      setSelectedDeliveries(filteredDeliveries.map(d => d.id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Delivery Management</h1>
          <p className="text-gray-600 mt-2">
            Manage and track all deliveries in your system
          </p>
        </div>
        <button className="btn-primary">
          <FontAwesomeIcon icon="plus" className="mr-2" />
          New Delivery
        </button>
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
                  placeholder="Search deliveries..."
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
                <option value="pending">Pending</option>
                <option value="picked-up">Picked Up</option>
                <option value="in-transit">In Transit</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button className="btn-secondary">
                <FontAwesomeIcon icon="filter" className="mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedDeliveries.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-blue-800 font-medium">
              {selectedDeliveries.length} deliveries selected
            </span>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="download" className="mr-1" />
                Export
              </button>
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="edit" className="mr-1" />
                Bulk Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deliveries Table */}
      <div className="card">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedDeliveries.length === filteredDeliveries.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delivery ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Driver
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDeliveries.map((delivery) => (
                  <tr key={delivery.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedDeliveries.includes(delivery.id)}
                        onChange={() => handleSelectDelivery(delivery.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{delivery.id}</div>
                        <div className="text-sm text-gray-500">{delivery.trackingNumber}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{delivery.customer}</div>
                      <div className="text-sm text-gray-500">{delivery.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{delivery.driver}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <div className="truncate max-w-xs" title={delivery.pickup}>
                          <FontAwesomeIcon icon="circle" className="text-green-500 text-xs mr-1" />
                          {delivery.pickup}
                        </div>
                        <div className="truncate max-w-xs mt-1" title={delivery.delivery}>
                          <FontAwesomeIcon icon="circle" className="text-red-500 text-xs mr-1" />
                          {delivery.delivery}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(delivery.status)}`}>
                        {delivery.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{delivery.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-900">
                          <FontAwesomeIcon icon="eye" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FontAwesomeIcon icon="edit" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <FontAwesomeIcon icon="trash" />
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
          <span className="font-medium">{filteredDeliveries.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">Previous</button>
          <button className="btn-secondary">Next</button>
        </div>
      </div>
    </div>
  )
}

export default DeliveryManagement