document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('user-search');
    searchBox.addEventListener('click', function() {
        window.location.href = 'admin-search.html';
    });
    const userView = document.getElementById('user-view');
    userView.addEventListener('click', function() {
        window.location.href = 'account.html';
    });
    const userReports = document.getElementById('reports');
    userView.addEventListener('click', function() {
        window.location.href = 'admin-reports.html';
    });
    const goHomeButton = document.getElementById('go-home');
    goHomeButton.addEventListener('click', function() {
    window.location.href = 'homepage.html';
    });
});