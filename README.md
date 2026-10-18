# Nova Astro Zone

Nova Astro Zone is a React single-page site built with Vite, TypeScript, and Tailwind CSS. The deployable frontend lives in `artifacts/astro-nova`; the repository also contains shared workspace packages and a small Express API.

## Requirements

- Node.js 20 or newer
- pnpm 9 or newer (the lockfile uses pnpm's version 9 format)

## Run locally

From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm --filter @workspace/astro-nova dev
```

Vite uses port 5000 by default. Set `PORT` to choose another port. `BASE_PATH` defaults to `/` and only needs changing when hosting the site below a URL subpath.

## Build

```sh
pnpm --filter @workspace/astro-nova build
```

The static site is written to `artifacts/astro-nova/dist/public`.

## Deploy to Vercel

Import this repository into Vercel and leave the project root directory set to the repository root. The root `vercel.json` installs the pnpm workspace, builds the Nova Astro Zone frontend, publishes its static output, and routes client-side paths back to the SPA entry point. No environment variables are required for the current frontend.

## Publish to GitHub

Create an empty GitHub repository, then from this directory set its remote and push the existing branch:

```sh
git remote add origin https://github.com/<your-account>/<your-repository>.git
git push -u origin main
```

Review `git status` before pushing so you know which local changes will be included. Do not commit `.env` files or credentials; `.env.example` files are allowed for documenting variable names without secret values.

## Project notes

- The frontend currently uses local, in-browser interactions and does not submit or store enquiry or payment data.
- `artifacts/api-server` is a separate Express service. The Vercel configuration here deploys the static frontend only; deploy and configure the API separately if the site later needs server endpoints.
