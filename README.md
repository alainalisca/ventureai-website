# VentureAI Search Partners Website

A modern, animated Next.js website for VentureAI Search Partners executive search firm.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd ventureai-website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
ventureai-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js             # Home page
│   │   ├── layout.js           # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── team/page.js        # Team page
│   │   ├── positions/page.js   # Positions page
│   │   ├── why-us/page.js      # Why Us page
│   │   └── contact/page.js     # Contact page
│   ├── components/             # Reusable components
│   │   ├── Navigation.js       # Header navigation
│   │   ├── Footer.js           # Footer
│   │   ├── Button.js           # Animated button
│   │   ├── ScrollReveal.js     # Scroll animations
│   │   ├── AnimatedText.js     # Text animations (rotating words)
│   │   └── CountUp.js          # Animated number counter
│   └── lib/
│       └── animations.js       # Framer Motion variants
├── public/                     # Static assets (add logo, images here)
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── package.json
```

---

## ✨ Features & Animations

| Feature | Description |
|---------|-------------|
| **Rotating Words** | Hero section cycles through "speed", "trust", "precision", "results" |
| **Scroll Reveals** | Elements fade up as you scroll down |
| **Counting Numbers** | Statistics animate from 0 to their value |
| **Card Hovers** | Cards lift and shadow on hover |
| **Button Effects** | Scale and glow on hover |
| **Navigation** | Smooth underline transitions |
| **Mobile Menu** | Animated slide-in menu |
| **Page Transitions** | Smooth fade between pages |

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  navy: {
    DEFAULT: '#1B365D',  // Primary dark blue
    dark: '#0A1628',
    light: '#234B7A',
  },
  teal: {
    DEFAULT: '#2A9D8F',  // Primary teal
    light: '#40C9B5',
    dark: '#1F7A6F',
  },
}
```

### Content
- **Home Page**: Edit `src/app/page.js`
- **Team Members**: Edit `src/app/team/page.js`
- **Positions**: Edit `src/app/positions/page.js`
- **Why Us**: Edit `src/app/why-us/page.js`
- **Contact**: Edit `src/app/contact/page.js`

---

## 📧 Contact Form Setup (Formspree)

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID (looks like `xyzabcde`)
5. Replace `YOUR_FORMSPREE_ID` in `src/app/contact/page.js`:
```javascript
const FORMSPREE_ID = 'your-actual-form-id'
```

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (it's free!)

### Manual Build
```bash
npm run build
# Output is in .next folder
```

---

## 📝 TODO Before Launch

- [ ] Add actual logo to `public/` folder
- [ ] Update team member photos and information
- [ ] Add real phone number, email, LinkedIn URL
- [ ] Set up Formspree form ID for contact form
- [ ] Replace placeholder content with Tom's copy
- [ ] Add client logos (if available)
- [ ] Connect custom domain

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Formspree

---

Built with ❤️ by VENCER LLC
