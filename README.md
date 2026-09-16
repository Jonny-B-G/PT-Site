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

The contact form currently has no backend wired up. To start receiving real
enquiries, sign up for a free form endpoint (e.g. [Formspree](https://formspree.io))
and paste it into the `FORM_ENDPOINT` constant near the top of `script.js`.

## Next steps

- Swap in real photos of you training clients (hero/about sections currently
  have no photography — add an `<img>` where you'd like one)
- Add real contact details (phone/email/social) once you're ready to publish them
- Consider polishing the logo image quality if you plan to use it at large sizes
