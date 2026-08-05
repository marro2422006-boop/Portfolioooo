const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// فتح وإغلاق القائمة عند الضغط على زر القائمة في الهواتف
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.classList.toggle('active');
});

// إغلاق القائمة تلقائياً عند النقر على أي رابط انتقال
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
