document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'header-footer.html';
    } else {
        window.location.href = 'account-view.html';
    }
});