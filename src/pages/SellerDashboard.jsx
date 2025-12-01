import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerDashboard.css';

function SellerDashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [sellerData, setSellerData] = useState({
    name: 'Rahul Kumar',
    email: 'rahul.kumar@college.edu',
    hostel: 'Block A',
    room: '204',
    phone: '+91 98765 43210',
    stockImage: '🍿'
  });

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
    // In a real app, this would send data to backend
  };

  const handleInputChange = (field, value) => {
    setSellerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUploadImage = (emoji) => {
    setSellerData(prev => ({
      ...prev,
      stockImage: emoji
    }));
    setShowUploadModal(false);
  };

  return (
    <div className="seller-dashboard">
      <header className="dashboard-header">
        <h1>🌙 Seller Dashboard</h1>
        <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Shop Information</h2>
          
          <div className="form-section">
            <div className="form-group">
              <label>Seller Name</label>
              <input 
                type="text" 
                value={sellerData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={sellerData.email}
                disabled
                className="disabled-input"
              />
              <small>Email cannot be changed</small>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Hostel Block</label>
                <select 
                  value={sellerData.hostel}
                  onChange={(e) => handleInputChange('hostel', e.target.value)}
                >
                  <option value="Block A">Block A</option>
                  <option value="Block B">Block B</option>
                  <option value="Block C">Block C</option>
                  <option value="Block D">Block D</option>
                </select>
              </div>

              <div className="form-group">
                <label>Room Number</label>
                <input 
                  type="text" 
                  value={sellerData.room}
                  onChange={(e) => handleInputChange('room', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                value={sellerData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Shop Status</h2>
          
          <div className="status-toggle-section">
            <div className="status-info">
              <span className="status-label">Your shop is currently:</span>
              <span className={`status-text ${isOpen ? 'open' : 'closed'}`}>
                {isOpen ? '🟢 OPEN' : '🔴 CLOSED'}
              </span>
            </div>
            
            <button 
              className={`toggle-btn ${isOpen ? 'open' : 'closed'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Close Shop' : 'Open Shop'}
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Stock Image</h2>
          
          <div className="stock-image-section">
            <div className="current-stock">
              <label>Current Stock Image:</label>
              <div className="stock-preview">{sellerData.stockImage}</div>
            </div>

            <button 
              className="upload-btn"
              onClick={() => setShowUploadModal(true)}
            >
              📷 Upload New Image
            </button>
          </div>
        </div>

        <button className="save-btn" onClick={handleSaveChanges}>
          💾 Save All Changes
        </button>
      </div>

      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Choose Stock Image</h3>
            <p>Select an emoji to represent your shop:</p>
            
            <div className="emoji-grid">
              {['🍿', '🍪', '🍫', '🍕', '🌮', '🍔', '🍟', '🌭', '🥤', '☕', '🧃', '🍩', '🥨', '🍦', '🧁', '🍰'].map(emoji => (
                <button 
                  key={emoji}
                  className="emoji-option"
                  onClick={() => handleUploadImage(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>

            <button className="cancel-btn" onClick={() => setShowUploadModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellerDashboard;
