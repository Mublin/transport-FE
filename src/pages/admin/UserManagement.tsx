import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface User {
  id: string
  name: string
  email: string
  phone: string
  role: 'user' | 'admin' | 'driver'
  status: 'active' | 'inactive' | 'suspended'
  joinDate: string
  totalDeliveries: number
  totalSpent: string
}

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const users: User[] = [
    {
      id: 'USR-001',
      name: 'Amina Hassan',
      email: 'amina.hassan@email.com',
      phone: '+234 803 123 4567',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-10',
      totalDeliveries: 15,
      totalSpent: '₦22,500'
    },
    {
      id: 'USR-002',
      name: 'Ibrahim Musa',
      email: 'ibrahim.musa@email.com',
      phone: '+234 806 987 6543',
      role: 'driver',
      status: 'active',
      joinDate: '2024-01-05',
      totalDeliveries: 45,
      totalSpent: '₦0'
    },
    {
      id: 'USR-003',
      name: 'Fatima Abdullahi',
      email: 'fatima.abdullahi@email.com',
      phone: '+234 809 456 7890',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-12',
      totalDeliveries: 8,
      totalSpent: '₦12,000'
    },
    {
      id: 'USR-004',
      name: 'Admin User',
      email: 'admin@deliveryinkano.com',
      phone: '+234 802 111 2222',
      role: 'admin',
      status: 'active',
      joinDate: '2023-12-01',
      totalDeliveries: 0,
      totalSpent: '₦0'
    },
    {
      id: 'USR-005',
      name: 'Mohammed Sani',
      email: 'mohammed.sani@email.com',
      phone: '+234 805 333 4444',
      role: 'user',
      status: 'suspended',
      joinDate: '2024-01-08',
      totalDeliveries: 3,
      totalSpent: '₦4,500'
    }
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800'
      case 'driver':
        return 'bg-blue-100 text-blue-800'
      case 'user':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      case 'suspended':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === 'all' || user.role === roleFilter
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map(u => u.id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">
            Manage users, drivers, and administrators
          </p>
        </div>
        <button className="btn-primary">
          <FontAwesomeIcon icon="user-plus" className="mr-2" />
          Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">
                  {users.filter(u => u.role === 'user').length}
                </p>
              </div>
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="users" className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Drivers</p>
                <p className="text-3xl font-bold text-gray-900">
                  {users.filter(u => u.role === 'driver' && u.status === 'active').length}
                </p>
              </div>
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="user" className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Administrators</p>
                <p className="text-3xl font-bold text-gray-900">
                  {users.filter(u => u.role === 'admin').length}
                </p>
              </div>
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="user-shield" className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Suspended</p>
                <p className="text-3xl font-bold text-gray-900">
                  {users.filter(u => u.status === 'suspended').length}
                </p>
              </div>
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="user-times" className="text-xl" />
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
                  placeholder="Search users..."
                  className="form-input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="form-input"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="user">Users</option>
                <option value="driver">Drivers</option>
                <option value="admin">Administrators</option>
              </select>
              <select
                className="form-input"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-blue-800 font-medium">
              {selectedUsers.length} users selected
            </span>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="download" className="mr-1" />
                Export
              </button>
              <button className="btn-secondary text-sm">
                <FontAwesomeIcon icon="ban" className="mr-1" />
                Suspend
              </button>
              <button className="btn-danger text-sm">
                <FontAwesomeIcon icon="trash" className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="card">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                          <FontAwesomeIcon icon="user" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>Deliveries: {user.totalDeliveries}</div>
                      <div>Spent: {user.totalSpent}</div>
                      <div className="text-xs text-gray-500">Joined: {user.joinDate}</div>
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
          <span className="font-medium">{filteredUsers.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">Previous</button>
          <button className="btn-secondary">Next</button>
        </div>
      </div>
    </div>
  )
}

export default UserManagement