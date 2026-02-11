const saved = localStorage.getItem('theme');
const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = saved || (osPrefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', theme);
