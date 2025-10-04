# VeBlyss Global Website - Next.js

A modern, high-performance website built with Next.js 14 for VeBlyss Global, showcasing premium Indian exports including leather products, copperware, imitation jewelry, handicrafts, spices, and sustainable products.

## ✨ Features

- **⚡ Next.js 14**: Latest Next.js with App Router and React Server Components
- **🎨 Modern Design**: Pixel-perfect implementation of Figma design
- **📱 Fully Responsive**: Mobile-first approach with seamless device adaptation
- **🖼️ Optimized Images**: Next.js Image component with automatic optimization
- **🔍 SEO Optimized**: Built-in meta tags and structured data
- **⚡ Performance**: Optimized bundle size and loading speeds
- **🎯 Accessibility**: ARIA labels and semantic HTML
- **🔧 Component Architecture**: Reusable, modular components

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Runtime**: React 18
- **Styling**: CSS Modules with custom properties
- **Fonts**: Google Fonts (Poppins)
- **Images**: Next.js Image optimization
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd veblyss-global-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components
│   │   ├── Button.jsx
│   │   ├── ProductCard.jsx
│   │   └── FeatureCard.jsx
│   ├── Navigation.jsx
│   ├── HeroSection.jsx
│   ├── WelcomeSection.jsx
│   ├── ProductCategories.jsx
│   ├── FeaturesSection.jsx
│   ├── PartnershipSection.jsx
│   └── Footer.jsx
├── globals.css          # Global styles and CSS variables
├── layout.jsx           # Root layout with metadata
├── page.jsx             # Homepage
└── page.module.css      # Homepage styles

next.config.js           # Next.js configuration
package.json            # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
```css
--primary-color: #792727    /* Deep red - Brand primary */
--secondary-color: #368581  /* Teal - Navigation & footer */
--background-color: #FFECE0 /* Light peach - Main background */
--card-background: #FAF9F7  /* Off-white - Cards */
--text-primary: #111        /* Dark text */
--text-light: #FAF9F7      /* Light text */
--hero-text-color: #AFD8D1  /* Hero title color */
```

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Responsive sizes**: Using `clamp()` for fluid typography

### Components

#### Button Component
```jsx
<Button variant="primary" size="large">
  Explore Products
</Button>
```
- **Variants**: `primary`, `secondary`, `outline`
- **Sizes**: `small`, `medium`, `large`

#### Product Card
- Hover animations
- Optimized images
- Responsive design
- Call-to-action buttons

## 📱 Responsive Breakpoints

```css
/* Desktop First */
@media (max-width: 1200px) { /* Tablets */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }
```

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Modules**: Scoped styles prevent conflicts
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Bundle Analysis**: Built-in Next.js analyzer

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Next.js Config
```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['api.builder.io'],
    remotePatterns: [/* ... */]
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For support or questions about VeBlyss Global:
- **Email**: Contact information in website footer
- **Location**: Bengaluru, Karnataka, India

## 📄 License

© VeBlyss Global Pvt Ltd. All Rights Reserved.

---

**Built with ❤️ using Next.js 14**
