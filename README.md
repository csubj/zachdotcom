# Zach Barner - Filmmaker Portfolio

A minimalist portfolio website for filmmaker Zach Barner, built with Next.js, TypeScript, and Tailwind CSS. Features a clean, modern design with light/dark mode support and is optimized for static deployment on GitHub Pages.

## Features

- 🎨 Minimalist, modern design
- 🌓 Light/dark mode toggle with persistent storage
- 📱 Fully responsive layout
- 🎬 Films showcase with individual detail pages
- 🎥 Vimeo video embeds
- 🖼️ Image galleries for film stills
- ⚡ Static site generation for fast loading
- 🚀 Automated GitHub Pages deployment

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Package Manager:** pnpm
- **Deployment:** GitHub Pages (Static Export)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chunksong.git
cd chunksong
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a static build:

```bash
pnpm build
```

The static files will be generated in the `out` directory.

## Project Structure

```
chunksong/
├── app/
│   ├── components/
│   │   └── navigation.tsx      # Navigation bar with theme toggle
│   ├── data/
│   │   └── films.ts            # Film data structure
│   ├── films/
│   │   ├── [slug]/
│   │   │   └── page.tsx        # Individual film detail page
│   │   └── page.tsx            # Films listing page
│   ├── bio/
│   │   └── page.tsx            # Bio page
│   ├── providers/
│   │   └── theme-provider.tsx  # Dark mode context provider
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── public/
│   ├── films/                  # Film images
│   └── placeholder-portrait.jpg
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions deployment

```

## Customization

### Adding New Films

Edit `/app/data/films.ts` and add new film entries:

```typescript
{
  id: '4',
  slug: 'your-film-slug',
  title: 'Your Film Title',
  year: 2024,
  shortDescription: 'Brief description',
  longDescription: 'Detailed description',
  thumbnail: '/films/your-film-thumbnail.jpg',
  vimeoId: 'your-vimeo-id',
  images: [
    '/films/your-film-1.jpg',
    '/films/your-film-2.jpg',
  ],
}
```

### Updating Bio Content

Edit `/app/bio/page.tsx` to update the biography text and replace the placeholder portrait image.

### Changing Colors

Modify `/app/globals.css` to customize the color scheme for both light and dark modes.

## Deployment to GitHub Pages

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Instructions

1. Go to your repository settings on GitHub
2. Navigate to Pages settings
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push your code to the `main` branch
5. The site will be available at `https://yourusername.github.io/chunksong/`

### Manual Deployment

You can also build and deploy manually:

```bash
pnpm build
# Upload the contents of the 'out' directory to your hosting service
```

## License

This project is created for Zach Barner's portfolio.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Geist](https://vercel.com/font)
