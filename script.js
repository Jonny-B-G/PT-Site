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
// To make this form actually deliver enquiries to your inbox, sign up for a
// free endpoint at https://formspree.io (or similar) and paste it below.
const FORM_ENDPOINT = '';

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
