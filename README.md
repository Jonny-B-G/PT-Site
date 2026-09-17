# Good Life Personal Training

A single-page website for Good Life Personal Training, covering two services:

- **Mobile Personal Training** across Preston, Lostock, Bolton and Bury
- **Gym Personal Training** at The Horwich House Of Strength

## Structure

- `index.html` — page content and structure
- `styles.css` — all styling
- `script.js` — mobile nav toggle and contact form handling
- `assets/images/logo.jpg` — brand logo

## Running locally

This is a static site with no build step. Open `index.html` directly in a browser,
or serve it locally, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Contact form

Enquiries are forwarded to `ptjonnybgood@gmail.com` via [formsubmit.co](https://formsubmit.co),
which needs no account. The **first** submission after going live sends a
one-time confirmation email to that inbox — click the link in it to activate
delivery, then every future enquiry lands straight in the inbox. To switch to
a different email or provider, edit `FORM_ENDPOINT` in `script.js`.

## Next steps

- Swap in real photos of you training clients (hero/about sections currently
  have no photography — add an `<img>` where you'd like one)
- Add real contact details (phone/email/social) once you're ready to publish them
