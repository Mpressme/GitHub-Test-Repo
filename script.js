const form = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('form-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  message.className = 'form-message';

  if (!isValid) {
    message.textContent = 'Please enter a valid email address.';
    message.classList.add('error');
    return;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    message.textContent = "Thank you for joining! We'll be in touch.";
    message.classList.add('success');
    form.reset();
  } catch {
    message.textContent = 'Something went wrong, please try again.';
    message.classList.add('error');
  }
});
