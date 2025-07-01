# Tiny Site Lab

Lightweight web tools for people on a mission. Built with purpose. Small by design. Made to matter.

Tiny Site Lab is a personal portfolio and services site built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and deployed with [Vercel](https://vercel.com/). It showcases project offerings for creatives, small teams, and community-focused work.

## ✨ Features

- ⚡ Smooth-scrolling single-page layout
- 🧪 Custom logo and fun brand visuals (beaker + bubbles!)
- 🧑‍💻 About, Services, Portfolio, and Contact sections
- 📸 Sample project thumbnails and descriptions
- 💬 Contact form powered by [Formspree](https://formspree.io/)
- 🔗 Responsive design with scroll-to-top button and mobile nav

## 🧱 Tech Stack

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS
- **Fonts:** Geist and Geist Mono (Google Fonts)
- **Deployment:** Vercel
- **Forms:** Formspree
- **Icons/Imagery:** Emojis and custom illustrations

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/ginabethrussell/tinysitelab.git
cd tinysitelab

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open http://localhost:3000 to view it in the browser.

## 📁 Project Structure

```
├── app/
│   └── layout.tsx         # Global layout and metadata
│   └── page.tsx           # Main homepage content
├── public/
│   └── [assets]           # Logo, thumbnails, favicons
├── styles/
│   └── globals.css        # Tailwind setup
├── README.md
```

## 📸 Project Thumbnails
- Minister Connect – Private matching platform for churches and pastors
- WanderSync – Itinerary-sharing tool for collaborative travel planning
- Photography Template – Elegant one-page site for small businesses

## 📬 Contact
Built and maintained by Gina Beth Russell.
Feel free to reach out to chat about a project.

## Scroll Spy Navigation

This project uses [`react-intersection-observer`](https://www.npmjs.com/package/react-intersection-observer) to implement scroll spy navigation. This package is used to detect which section of the page is currently visible in the viewport and update the navigation bar accordingly.

- **Purpose:** Smoothly highlight the active navigation tab as the user scrolls or clicks through the page sections.
- **How:** Each main section uses a ref from `react-intersection-observer` to track its visibility. The navigation bar updates based on which section is in view.
- **Docs:** [react-intersection-observer documentation](https://react-intersection-observer.vercel.app/?path=/docs/intro--docs)
