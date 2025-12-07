give the readme in this way onl;y in one contaier full # Cancer Awareness & Support 🎗️

A modern, responsive single-page website promoting cancer awareness, built with React, TypeScript, and Tailwind CSS.



## ✨ Features

- **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **API Integration** - Fetches motivational quotes from Quotable API
- **Form Validation** - Contact form with client-side validation
- **LocalStorage** - Form submissions saved locally
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Accessibility** - ARIA labels and keyboard navigation support

## 🚀 Sections

1. **Navbar** - Sticky navigation with smooth scroll, mobile hamburger menu
2. **Hero** - Full-screen banner with gradient overlay and CTA buttons
3. **About** - Two-column layout with feature cards
4. **Quotes** - API-powered inspirational quotes with refresh button
5. **Contact** - Validated form with success feedback
6. **Footer** - Social links and back-to-top button

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **Lucide React** - Icon library
- **shadcn/ui** - UI components

## 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Lovable
Simply click **Share → Publish** in the Lovable editor.

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
│   ├── hero-banner.jpg
│   └── awareness-illustration.png
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Quotes.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── hooks/               # Custom React hooks
│   ├── useFetchQuote.ts
│   └── useScrollAnimation.ts
├── pages/               # Page components
│   └── Index.tsx
├── index.css            # Design system & global styles
└── App.tsx              # App entry point
```

## 🎨 Design System

The project uses a carefully crafted design system defined in `index.css`:

- **Primary Color**: Soft rose pink (#f9a8c9)
- **Secondary Color**: Lavender purple (#a78bfa)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Animations**: Fade-in, slide, scale, and float effects

## 📝 API Integration



## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📄 License

MIT License - feel free to use this project for your own cancer awareness initiatives.

---

Made with 💝 for a cause that matters.
