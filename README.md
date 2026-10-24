# 7th Gear Tire Works | Business Website

A business website for a commercial tire company, built to help customers quickly find the right service and request a quote.

**Live site:** [7thgeartireworks.net](https://www.7thgeartireworks.net/)

![Homepage of 7th Gear Tire Works](image.png)

## Overview

7th Gear Tire Works needed a professional online presence shaped around how the business actually runs. The site is organized into **three customer pathways**, each with its own request workflow, so every visitor lands on the service that fits them:

- **Tire distribution:** bulk and commercial tire orders
- **Shop service:** in-shop tire service *(coming soon)*
- **Mobile fleet installation:** on-site service for fleets *(coming soon)*

The project is being built in **phases**. Phase one is live, and phase two features are being planned with the client.

## Tech Stack

Built with **Next.js** and **React** for a fast, component-driven frontend, with **TypeScript** for type safety and **Tailwind CSS** for responsive, utility-first styling. Form submissions are delivered by email through **Resend**, and the site is deployed on **Vercel**.

## Features

- Responsive layout that works on phones, tablets, and desktops
- Separate pathways for each type of customer
- Form workflows for quoting, tire fitment, and service requests
- Form submissions delivered straight to the owner's inbox via Resend

## Design Philosophy

The site was designed around the client's real business, not a generic template. Instead of one catch-all contact form, each pathway has its own workflow that asks for the information that service actually needs. That makes requests easier for customers to submit and easier for the owner to act on.

The project also follows a **phased approach**: launch a fully working site first, then add features as the business grows.

- **Phase one (live):** core site, tire distribution pathway, and quote, fitment, and service request forms
- **Phase two (planned):** features being scoped with the client

## Architecture

<!-- Describe how the project is organized, e.g. Next.js App Router, folder structure, where the form logic and route handlers live. -->

## Architectural Decisions

<!-- Key choices and why, e.g. using a Next.js route handler for Resend so the API key stays on the server, or how the pathway forms share components. -->

## Animations & Interactions

<!-- Describe any motion or interactions used on this site, or delete this section if it doesn't apply. -->

## Challenges & Solutions

<!-- Problems you ran into and how you solved them -->

## Performance Considerations

<!-- Only include optimizations you can explain, e.g. Next.js image optimization, static rendering, or lightweight Tailwind styles. -->

## Screenshots

<!-- I need to complete my gif -->

## Getting Started

Clone the repo and run `npm install` then `npm run dev` to start a local development server at [http://localhost:3000](http://localhost:3000).

To test the forms, create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
```

`.env.local` is ignored by Git, so API keys are never committed.

## Deployment

This site is deployed on **Vercel**, providing **instant global hosting, automatic CI/CD**, and seamless integration with **Next.js**. Updates are deployed automatically from the **main branch**, while local development runs with `npm run dev`, allowing the site to be previewed at http://localhost:3000 before pushing changes.

## Contact

If you're interested in working together or have questions:

- Email: mjwhite.dev@gmail.com
- Portfolio: [michaeljwhite.dev](https://www.michaeljwhite.dev/)
- LinkedIn: [linkedin.com/in/michaeljulianwhite](https://www.linkedin.com/in/michaeljulianwhite)
- GitHub: [github.com/mj-codices](https://github.com/mj-codices)

## License

