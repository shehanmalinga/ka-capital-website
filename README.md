# K A CAPITAL — Production V3

Premium responsive corporate landing page built with Next.js and TypeScript.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the final production origin before deployment so canonical social metadata resolves against the correct domain. Local development falls back to `http://localhost:3000`.

## Production checklist

- Replace the placeholder company phone and email with verified details.
- Connect `ContactForm.tsx` to an approved secure endpoint. It currently performs local validation only.
- Confirm the public-facing company location.
- Add a privacy notice appropriate to the final enquiry workflow.

## Structure

- `app/page.tsx` — landing-page content and data-driven sections
- `app/globals.css` — design tokens, components, and responsive layouts
- `app/layout.tsx` — site metadata and viewport configuration
- `components/Header.tsx` — sticky responsive navigation
- `components/ContactForm.tsx` — accessible local-validation enquiry form
- `public/images/` — supplied K A CAPITAL logo and page imagery
