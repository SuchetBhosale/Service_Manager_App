
# Service Manager - React demo

## Overview
Service Manager is a responsive React frontend demonstrating Services and Blog pages. Initially uses local JSON files; later replaced with WordPress REST API (option chosen).

## Run locally
1. npm install
2. npm run dev
3. Open http://localhost:5178

## Data
- `src/data/services.json`
- `src/data/blogs.json`

## Features
- Services grid (filter by category, search, min price)
- Blog list (filter by tag, search, read more -> details)
- Contact form with mock reCAPTCHA; submissions stored client-side
- React Router for navigation
- Responsive layout for mobile/tablet/desktop

## Security Headers
Set CSP, X-Frame-Options, X-Content-Type-Options. Example `_headers` file for Netlify included.

## reCAPTCHA
Mock checkbox in demo. For production, configure Google reCAPTCHA and verify tokens server-side.

## Deployment
Deploy to Vercel/Netlify. Build command: `npm run build`. Publish directory: `dist`.

## Deliverables
- Live demo URL: <add here>
- GitHub repo: <add here>
- Option 1: WP site URL or LocalWP instructions + SQL dump
- Option 2: theme folder `service-manager` and install instructions

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
