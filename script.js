document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form
// Enquiries are forwarded to ptjonnybgood@gmail.com via formsubmit.co (no
// account needed). The first submission triggers a one-time confirmation
// email to that inbox — click the link in it to activate delivery.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ptjonnybgood@gmail.com';

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = '';
  status.className = 'form-status';

  if (!FORM_ENDPOINT) {
    status.textContent = 'Thanks! This form isn’t connected to an inbox yet — add a form endpoint in script.js to start receiving enquiries.';
    status.classList.add('error');
    return;
  }

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });

    if (response.ok) {
      status.textContent = 'Thanks — your enquiry has been sent. I’ll be in touch soon!';
      status.classList.add('success');
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (err) {
    status.textContent = 'Something went wrong sending your enquiry. Please try again shortly.';
    status.classList.add('error');
  }
});
