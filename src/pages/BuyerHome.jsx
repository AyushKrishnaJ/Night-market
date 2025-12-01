import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerHome.css';

function BuyerHome() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHostel, setSelectedHostel] = useState('all');
  const [showOpenOnly, setShowOpenOnly] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);

  // Mock seller data for MVP
  const sellers = [
    {
      id: 1,
      name: 'Rahul\'s Snack Shop',
      hostel: 'Block A',
      room: '204',
      status: 'open',
      image: '🍿',
      rating: 4.5,
      updatedAt: '5 minutes ago'
    },
    {
      id: 2,
      name: 'Priya\'s Corner',
      hostel: 'Block B',
      room: '315',
      status: 'open',
      image: '🍪',
      rating: 4.8,
      updatedAt: '12 minutes ago'
    },
    {
      id: 3,
      name: 'Late Night Bites',
      hostel: 'Block A',
      room: '108',
      status: 'closed',
      image: '🍕',
      rating: 4.2,
      updatedAt: '1 hour ago'
    },
    {
      id: 4,
      name: 'Study Fuel',
      hostel: 'Block C',
      room: '412',
      status: 'open',
      image: '☕',
      rating: 4.6,
      updatedAt: '8 minutes ago'
    },
  ];

  const filteredSellers = sellers.filter(seller => {
    const matchesSearch = seller.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesHostel = selectedHostel === 'all' || seller.hostel === selectedHostel;
    const matchesStatus = !showOpenOnly || seller.status === 'open';
    return matchesSearch && matchesHostel && matchesStatus;
  });

  const sortedSellers = sortByRating 
    ? [...filteredSellers].sort((a, b) => b.rating - a.rating)
    : filteredSellers;

  return (
    <div className="buyer-home">
      <header className="buyer-header">
        <div className="header-content">
          <h1>🌙 Night Market</h1>
          <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
        </div>
      </header>

      <div className="buyer-content">
        <div className="search-section">
          <input
            type="text"
            className="search-bar"
            placeholder="Search chips, biscuits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters">
          <select 
            className="filter-chip"
            value={selectedHostel}
            onChange={(e) => setSelectedHostel(e.target.value)}
          >
            <option value="all">All Hostels</option>
            <option value="Block A">Block A</option>
            <option value="Block B">Block B</option>
            <option value="Block C">Block C</option>
          </select>

          <button 
            className={`filter-chip ${showOpenOnly ? 'active' : ''}`}
            onClick={() => setShowOpenOnly(!showOpenOnly)}
          >
            {showOpenOnly ? '🟢 Open Now' : 'All Status'}
          </button>

          <button 
            className={`filter-chip ${sortByRating ? 'active' : ''}`}
            onClick={() => setSortByRating(!sortByRating)}
          >
            {sortByRating ? '⭐ Rating' : 'Sort by Rating'}
          </button>
        </div>

        <div className="sellers-list">
          {sortedSellers.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">😴</div>
              <h2>Looks like no sellers are open right now</h2>
              <p>Try again soon!</p>
            </div>
          ) : (
            sortedSellers.map(seller => (
              <div 
                key={seller.id} 
                className="seller-card"
                onClick={() => navigate(`/buyer/seller/${seller.id}`)}
              >
                <div className="seller-image">{seller.image}</div>
                <div className="seller-info">
                  <div className="seller-header">
                    <h3>{seller.name}</h3>
                    <span className={`status-badge ${seller.status}`}>
                      {seller.status === 'open' ? '🟢 Open' : '🔴 Closed'}
                    </span>
                  </div>
                  <p className="seller-location">
                    {seller.hostel} - Room {seller.room}
                  </p>
                  <div className="seller-meta">
                    <span className="rating">⭐ {seller.rating}</span>
                    <span className="updated">Updated {seller.updatedAt}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyerHome;
