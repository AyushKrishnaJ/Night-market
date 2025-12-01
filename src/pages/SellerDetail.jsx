import { useNavigate, useParams } from 'react-router-dom';
import './SellerDetail.css';

function SellerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock seller data - in a real app, this would be fetched based on id
  const seller = {
    id,
    name: 'Rahul\'s Snack Shop',
    hostel: 'Block A',
    room: '204',
    phone: '+91 98765 43210',
    status: 'open',
    image: '🍿',
    rating: 4.5,
    description: 'Fresh snacks available! Chips, biscuits, chocolates, and instant noodles. Best prices in the hostel. Open till midnight on weekdays.',
    updatedAt: '5 minutes ago'
  };

  const handleWhatsAppMessage = () => {
    // In a real app, this would open WhatsApp with pre-filled message
    const message = encodeURIComponent(`Hi ${seller.name}, I'd like to order from your shop!`);
    window.open(`https://wa.me/${seller.phone.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  const handleReport = () => {
    const reason = prompt('Please tell us why you\'re reporting this seller:');
    if (reason) {
      alert('Thank you for your report. We\'ll review it shortly.');
      // In a real app, this would send the report to admin
    }
  };

  return (
    <div className="seller-detail">
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate('/buyer')}>
          ← Back
        </button>
        <h2>Seller Details</h2>
        <div></div>
      </header>

      <div className="detail-content">
        <div className="seller-main-info">
          <div className="seller-image-large">{seller.image}</div>
          
          <div className="seller-details">
            <div className="detail-header-row">
              <h1>{seller.name}</h1>
              <span className={`status-badge ${seller.status}`}>
                {seller.status === 'open' ? '🟢 Open' : '🔴 Closed'}
              </span>
            </div>

            <div className="detail-row">
              <span className="label">📍 Location:</span>
              <span className="value">{seller.hostel} - Room {seller.room}</span>
            </div>

            <div className="detail-row">
              <span className="label">⭐ Rating:</span>
              <span className="value">{seller.rating} / 5</span>
            </div>

            <div className="detail-row">
              <span className="label">🕐 Updated:</span>
              <span className="value">{seller.updatedAt}</span>
            </div>

            {seller.description && (
              <div className="description-section">
                <h3>About</h3>
                <p>{seller.description}</p>
              </div>
            )}

            <button 
              className="whatsapp-btn"
              onClick={handleWhatsAppMessage}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Message on WhatsApp
            </button>

            <button className="report-btn" onClick={handleReport}>
              🚩 Report Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDetail;
