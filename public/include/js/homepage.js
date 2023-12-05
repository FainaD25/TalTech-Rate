document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('teacher');
    searchBox.addEventListener('click', function() {
        window.location.href = 'teacher-rate.html';
    });
    const userView = document.getElementById('subject');
    userView.addEventListener('click', function() {
        window.location.href = 'add-new.html';
    });
});