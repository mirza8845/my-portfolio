# Jahanzaib Ali - Portfolio

A modern, professional portfolio website showcasing my work as a Senior Software Engineer and Full-Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Modern Design**: Sleek teal/cyan/emerald gradient color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive UI**: Particle background, typing effects, and hover animations
- **Performance Optimized**: Fast loading with Next.js 16
- **SEO Friendly**: Optimized metadata and semantic HTML
- **Dark Theme**: Professional dark mode design

## 🎨 Color Palette

```css
Primary: #14b8a6 (Teal)
Secondary: #06b6d4 (Cyan)
Accent: #10b981 (Emerald)
Background: #0a0a0a
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.7.4
- **Icons**: React Icons 5.5.0
- **UI Components**: Ant Design 6.1.3
- **Language**: TypeScript 5.0

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js**: Version 20.9.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)

### Check Your Versions

```bash
node --version  # Should be >= 20.9.0
npm --version   # Should be >= 9.0
```

### Install/Update Node.js

If you need to update Node.js:

**Using nvm (recommended)**:
```bash
# Install nvm if you haven't
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest LTS version
nvm install --lts
nvm use --lts
```

**Or download from**: https://nodejs.org/

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-portfolio-main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-portfolio-main/
├── public/
│   └── images/          # Profile picture and project images
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles and animations
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Main portfolio page
│   └── components/
│       └── ParticlesBackground.tsx  # Animated particle background
├── package.json
└── README.md
```

## 🎯 Sections

1. **Hero**: Introduction with animated typing effect
2. **Skills**: Technologies and expertise areas
3. **Projects**: 10 featured projects with descriptions
4. **About**: Professional background and experience
5. **Contact**: Contact form and social links

## 📝 Customization

### Update Profile Picture

Replace the image at:
```
/public/images/profilePic.png
```

### Update Project Images

Add your project screenshots to:
```
/public/images/
```

Then update the image paths in `/src/app/page.tsx`

### Modify Content

All content can be edited in:
```
/src/app/page.tsx
```

### Change Colors

Update the color scheme in:
```
/src/app/globals.css
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Jahanzaib Ali**
- Email: jahanzaib8845@gmail.com
- LinkedIn: [jahanzaib-ali-dev](https://www.linkedin.com/in/jahanzaib-ali-dev/)
- GitHub: [jahanzaib8845](https://github.com/jahanzaib8845)
- Location: Modal Town C, Bahawalpur, Pakistan

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ by Jahanzaib Ali**

⭐ Star this repo if you like it!
