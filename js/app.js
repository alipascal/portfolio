const toggle = document.querySelector('.switch input');

// Sync checkbox with saved theme
toggle.checked = document.documentElement.getAttribute('data-theme') === 'dark';

toggle.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
