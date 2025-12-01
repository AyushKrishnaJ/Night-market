import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@college.edu',
      hostel: 'Block A',
      room: '204',
      lastActive: '5 minutes ago',
      status: 'open',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@college.edu',
      hostel: 'Block B',
      room: '315',
      lastActive: '12 minutes ago',
      status: 'open',
      verified: true
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@college.edu',
      hostel: 'Block A',
      room: '108',
      lastActive: '1 hour ago',
      status: 'closed',
      verified: false
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha.reddy@college.edu',
      hostel: 'Block C',
      room: '412',
      lastActive: '8 minutes ago',
      status: 'open',
      verified: true
    },
  ]);

  const handleDeleteSeller = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setSellers(sellers.filter(seller => seller.id !== id));
      alert('Seller deleted successfully');
    }
  };

  const handleBanSeller = (id, name) => {
    if (window.confirm(`Are you sure you want to ban ${name}?`)) {
      alert(`${name} has been banned`);
      // In a real app, this would update the seller's status in the backend
    }
  };

  const handleVerifySeller = (id) => {
    setSellers(sellers.map(seller => 
      seller.id === id ? { ...seller, verified: !seller.verified } : seller
    ));
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>🛡️ Admin Dashboard</h1>
        <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
      </header>

      <div className="admin-content">
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <div className="stat-value">{sellers.length}</div>
              <div className="stat-label">Total Sellers</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🟢</div>
            <div className="stat-info">
              <div className="stat-value">{sellers.filter(s => s.status === 'open').length}</div>
              <div className="stat-label">Open Now</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <div className="stat-value">{sellers.filter(s => s.verified).length}</div>
              <div className="stat-label">Verified</div>
            </div>
          </div>
        </div>

        <div className="sellers-table-section">
          <h2>All Sellers</h2>
          <div className="table-responsive">
            <table className="sellers-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Last Active</th>
                  <th>Status</th>
                  <th>Verified</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map(seller => (
                  <tr key={seller.id}>
                    <td>{seller.name}</td>
                    <td className="email-cell">{seller.email}</td>
                    <td>{seller.hostel} - {seller.room}</td>
                    <td>{seller.lastActive}</td>
                    <td>
                      <span className={`status-badge ${seller.status}`}>
                        {seller.status === 'open' ? '🟢 Open' : '🔴 Closed'}
                      </span>
                    </td>
                    <td>
                      {seller.verified ? '✅' : '❌'}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn verify-btn"
                          onClick={() => handleVerifySeller(seller.id)}
                          title={seller.verified ? 'Unverify' : 'Verify'}
                        >
                          {seller.verified ? '✅' : '☑️'}
                        </button>
                        <button 
                          className="action-btn ban-btn"
                          onClick={() => handleBanSeller(seller.id, seller.name)}
                          title="Ban Seller"
                        >
                          🚫
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteSeller(seller.id, seller.name)}
                          title="Delete Seller"
                        >
                          🗑️
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
    </div>
  );
}

export default AdminDashboard;
