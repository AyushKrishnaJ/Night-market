import { useNavigate } from 'react-router-dom';
import './ErrorPages.css';

export function EmailNotAllowed() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">🚫</div>
        <h1>Email Not Allowed</h1>
        <p>Please use your college email to access this platform.</p>
        <button className="back-to-home" onClick={() => navigate('/')}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">🔍</div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button className="back-to-home" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
