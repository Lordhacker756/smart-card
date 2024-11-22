const CONFIG = {
    API_BASE_URL: window.location.hostname === 'localhost' || '127.0.0.1'
        ? 'http://localhost:5000'
        : 'https://rfc-backend.onrender.com'
};