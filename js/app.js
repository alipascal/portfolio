document.querySelector('.switch input').addEventListener('change', function() {
  console.log("switch!")
  if(this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});