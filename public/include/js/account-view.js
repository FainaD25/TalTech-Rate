document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('log-out');
    searchBox.addEventListener('click', function() {
        window.location.href = 'homepage-no-login.html';
    });
});