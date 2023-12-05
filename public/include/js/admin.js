document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('user-search');
    searchBox.addEventListener('click', function() {
        window.location.href = 'admin-search.html';
    });
    const userView = document.getElementById('user-view');
    userView.addEventListener('click', function() {
        window.location.href = 'account.html';
    });
});