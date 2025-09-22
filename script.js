function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('menu').classList.remove('active');
}
