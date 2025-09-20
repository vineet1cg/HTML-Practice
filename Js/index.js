// index.js
const toggle = document.getElementById('toggle');
toggle.addEventListener('change', function() {
  document.body.classList.toggle('light-mode', toggle.checked);
});
