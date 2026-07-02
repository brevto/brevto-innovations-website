# TODO

## Contact form backend (free-tier)
- [x] Gather repo context (Contact form page)
- [x] Add implementation checklist for Firebase Firestore + EmailJS
- [x] Add Firebase client + env var wiring (Firestore)

- [x] Add EmailJS client + env var wiring (admin notification)

- [x] Update `src/pages/Contact.jsx` submit handler to:

  - [x] write submission to Firestore collection `messages`
  - [x] trigger the admin email notification in the background
  - [x] show success modal immediately after the Firestore save succeeds
  - [x] handle errors (no modal + show message)
- [x] Add minimal UI state: loading/disabled submit to avoid double posts
- [x] Update/verify package dependencies (EmailJS)

- [ ] Smoke test locally (dev server + submit)

## Firebase + EmailJS setup (outside code)
- [ ] Create Firestore DB + collection `messages`
- [ ] Configure Firestore security rules for `messages`:
  - [ ] allow create: true for unauthenticated users
  - [ ] deny read/update/delete for everyone
- [ ] EmailJS dashboard:
  - [ ] Create template with variables:
    - `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
  - [ ] Extract Service ID, Template ID, Public Key
- [ ] Set Vite env vars locally (`.env.local`):
  - [ ] `VITE_FIREBASE_*` (Firebase config)
  - [ ] `VITE_EMAILJS_SERVICE_ID`
  - [ ] `VITE_EMAILJS_TEMPLATE_ID`
  - [ ] `VITE_EMAILJS_PUBLIC_KEY`

