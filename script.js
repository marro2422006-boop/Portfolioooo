document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // الحصول على قيم المدخلات
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // عناصر أخطاء التنسيق
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg = document.getElementById('successMsg');

  // إعادة ضبط الأخطاء
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;

  // التحقق من الاسم
  if (name === '') {
    nameError.textContent = 'من فضلك أدخلي اسمك.';
    isValid = false;
  }

  // التحقق من البريد الإلكتروني
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '') {
    emailError.textContent = 'من فضلك أدخلي البريد الإلكتروني.';
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = 'صيغة البريد الإلكتروني غير صحيحة.';
    isValid = false;
  }

  // التحقق من الرسالة
  if (message === '') {
    messageError.textContent = 'من فضلك أكتبي رسالتك.';
    isValid = false;
  }

  // إذا كانت البيانات صحيحة
  if (isValid) {
    successMsg.textContent = 'تم إرسال رسالتك بنجاح! شكرًا لتواصلك.';
    this.reset(); // تفريغ الخانات
  }
});