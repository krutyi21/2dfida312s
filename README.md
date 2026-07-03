# Sophia Lane Photo-Card Link Page

## What this project is

This is a static Vite, React, TypeScript, and Tailwind CSS link page for Sophia Lane.

The page is a dark premium photo card with:

- a main Sophia Lane photo
- a Fanvue preview card with an 18+ confirmation step
- a Telegram card
- quiet X, Instagram, and Reddit icon links

There is no backend, database, sign-in system, analytics, tracking pixel, popup marketing flow, or automatic page-load redirect.

## How to edit links

Open `src/data/links.ts`.

Replace only the `REPLACE_ME` parts:

```ts
export const links = {
  fanvue: "https://fanvue.com/REPLACE_ME",
  telegram: "https://t.me/REPLACE_ME",
  twitter: "https://x.com/REPLACE_ME",
  instagram: "https://instagram.com/REPLACE_ME",
  reddit: "https://reddit.com/user/REPLACE_ME",
} as const;
```

Fanvue is intentionally not a direct link on the page. The Fanvue card opens a confirmation modal first, then continues to the configured Fanvue URL.

## How to replace photos

Replace these files in `public/images/`:

```text
hero.webp
hero.jpg
hero-bg-blur.webp
fanvue-preview.webp
fanvue-preview.jpg
og-image.webp
```

The app reads the file names from `src/data/site.ts`.

Keep replacement images safe, polished, and web-ready. Do not use explicit preview images, watermarks, platform logos, or verification badges.

## Image optimization rules

Do not commit original source photos or large editing files.

Only commit optimized web images in `public/images/`.

Target limits:

- `hero.webp`: 120 KB to 260 KB, hard max 300 KB
- `hero.jpg`: hard max 450 KB
- `hero-bg-blur.webp`: 40 KB to 90 KB, hard max 100 KB
- `fanvue-preview.webp`: 100 KB to 240 KB, hard max 300 KB
- `fanvue-preview.jpg`: hard max 450 KB
- `og-image.webp`: hard max 500 KB

Ignored folders such as `assets-original/`, `photos-source/`, and `source-images/` are for local working files only.

## Local development

Run:

```bash
npm ci
npm run dev
```

Vite will print a local browser URL.

## Production build

Run:

```bash
npm run typecheck
npm run build
npm run preview
```

The production files are created in `dist/`.

## Deploy to GitHub Pages with sophialane.xyz

This project includes:

- `.github/workflows/deploy.yml`
- `public/CNAME`
- Vite `base: "/"`

The `public/CNAME` file contains:

```text
sophialane.xyz
```

After a successful build, this file is copied to `dist/CNAME`.

No separate hosting purchase is required for this static site. GitHub Pages can host the built files from `dist/`.

After the custom domain is working, normal visitors will see `sophialane.xyz` in the browser address bar. Technical users may still identify the hosting provider through DNS or headers.

The domain must be renewed every year.

## Cloudflare DNS records

For the apex domain `sophialane.xyz`, create these records in Cloudflare:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
CNAME www   USERNAME.github.io
```

Replace `USERNAME` with the real GitHub username.

Start with the records set to `DNS only`. Cloudflare proxy is not required for the first setup.

## Optional deployment settings

Vercel:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

Cloudflare Pages:

```text
Framework Preset: Vite
Build Command: npm run build
Build Output Directory: dist
```

Netlify:

```text
Build Command: npm run build
Publish Directory: dist
```

## Platform-safety notes

This page is designed as a transparent official link page.

Do not add cloaking, page-load auto-redirects, fake chat widgets, explicit previews, hidden links, off-platform payment prompts, analytics scripts, or tracking pixels.

Keep external destinations visible and understandable.

## What not to commit

Do not commit:

- `node_modules/`
- `dist/`
- `.env` files
- passwords, tokens, or private URLs
- original source photos
- private working files
- large unoptimized images

The `.gitignore` file already blocks common unsafe files and folders.
