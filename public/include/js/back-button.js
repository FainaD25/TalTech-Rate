function goBack() {
  window.history.back();
}
document.addEventListener('DOMContentLoaded', function() {
  const goTo = document.getElementById('goto');
  goTo.addEventListener('click', function() {
    window.location.href = 'homepage.html';
});
});
