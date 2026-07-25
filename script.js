// تحديد العناصر
const contactForm = document.getElementById('contact-form');

// إضافة حدث عند الإرسال
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const messageInput = document.getElementById('message').value.trim();

    // التحقق من الحقول
    if (nameInput === '' || emailInput === '' || messageInput === '') {
        alert('من فضلك املأي جميع الحقول المطلوبة!');
        return;
    }

    alert('شكراً لك! تم إرسال رسالتك بنجاح.');
    contactForm.reset();
});