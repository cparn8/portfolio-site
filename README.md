# Clayton Parnell Portfolio Site

A personal portfolio site showcasing my work as a software engineer, with a focus on clear system thinking, execution discipline, and real-world application development.

This site is intentionally minimal and content-driven, serving as a companion to my résumé and a high-level overview of my primary project work.

---

## Purpose

The goal of this site is to:

- Present a concise professional profile
- Highlight a featured project that demonstrates real-world engineering complexity
- Provide a clean, accessible way to connect (GitHub, LinkedIn, email)

The portfolio is designed as a **static, production-ready site** with no backend dependencies.

---

## Tech Stack

- **Frontend:** React, TypeScript
- **Build Tooling:** Vite
- **Styling:** Tailwind CSS (customized typography and layout system)
- **Icons:** Lucide
- **Deployment:** Static hosting (S3 + CloudFront or equivalent)

---

## Key Characteristics

- Editorial, typography-driven layout
- Light / dark mode with persistent user preference
- Fully responsive with mobile-first considerations
- Optimized static asset delivery
- No client-side routing or runtime data dependencies

---

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

This site is deployed as a static application using AWS infrastructure.

**Production domain:**

- https://clayparnell.com
- https://www.clayparnell.com

**Hosting architecture:**

- Amazon S3 (static asset storage)
- Amazon CloudFront (CDN + HTTPS)
- Route 53 (DNS)
- ACM (TLS certificates)

The portfolio is intentionally deployed separately from the featured application to mirror real-world separation between marketing surfaces and application environments.

Detailed infrastructure and deployment documentation is maintained separately.

---

## License

This project is for personal and professional use.
All content and design are © Clayton Parnell 2026.

---

### Notes

- This README is deliberately concise.
- Detailed project management, architectural, and operational documentation is maintained separately.
- The featured application showcased on this site has its own repository and documentation.
