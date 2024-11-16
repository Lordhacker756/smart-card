function isAuthenticated() {
    return localStorage.getItem('jwt') !== null;
}

function redirectToLogin() {
    alert('Please login to access dashboard');
    window.location.href = '/login';
}

function logout() {
    localStorage.removeItem('jwt');
    window.location.href = '/login';
} 