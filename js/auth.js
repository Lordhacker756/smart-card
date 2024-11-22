function isAuthenticated() {
    return localStorage.getItem('jwt') !== null;
}

function getUserRole() {
    const user = localStorage.getItem('user');
    console.log("Getting User role:: ", user)
    return user ? JSON.parse(user).role : null;
}

function canAccessRegister() {
    const role = getUserRole();
    console.log("response from getUserRole::", role);
    return role === 'admin' || role === 'moderator';
}

function redirectToLogin() {
    alert('Please login to access dashboard');
    window.location.href = '/login';
}

function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    window.location.href = '/login';
} 