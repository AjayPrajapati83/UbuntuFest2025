# Ubuntu 2025 - Panchtatva (5 Elements) Fest Website

A stunning, highly interactive college fest website featuring the theme "Panchtatva" (5 Elements: Air, Water, Earth, Fire, Space) with premium animations and elemental interactions.

## 🌟 Features

### Elemental Theme Integration
- **Air Element** 🌬️ - Hero Section with floating animations
- **Water Element** 💧 - Events Section with liquid transitions
- **Fire Element** 🔥 - Team Section with flame effects
- **Earth Element** 🌍 - Schedule Section with grounded design
- **Space Element** 🚀 - Navigation with cosmic theme

### Advanced Animations
- Framer Motion powered smooth animations
- Interactive particle systems for each element
- Elemental hover effects and transitions
- Responsive design for all devices
- Glass morphism effects
- Gradient text animations

### Sections
1. **Hero Section** - Stunning landing with rotating elements
2. **Events Section** - 28+ events with filtering by element and category
3. **Team Section** - Meet the fire keepers with animated cards
4. **Schedule Section** - Day-wise event schedule
5. **Footer** - Contact info and social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom built with elemental themes

## 📁 Project Structure

```
ubuntu2025registration/
├── app/
│   ├── globals.css          # Global styles with elemental themes
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── ElementalBackground.tsx  # Animated background
│   ├── Navigation.tsx           # Space-themed nav
│   ├── HeroSection.tsx          # Air-themed hero
│   ├── EventsSection.tsx        # Water-themed events
│   ├── TeamSection.tsx          # Fire-themed team
│   ├── ScheduleSection.tsx      # Earth-themed schedule
│   └── Footer.tsx               # Footer component
├── data/
│   └── events.ts             # Event data
├── lib/
│   └── utils.ts              # Utility functions
└── tailwind.config.ts        # Tailwind with elemental colors
```

## 🎨 Elemental Color Palette

```css
Air:   #87CEEB, #E0F7FA, #B3E5FC  /* Sky blues */
Water: #4169E1, #2196F3, #03A9F4  /* Ocean blues */
Earth: #8B4513, #795548, #5D4037  /* Brown tones */
Fire:  #FF4500, #FF5722, #E65100  /* Fiery oranges */
Space: #0F0F23, #1A1A2E, #16213E  /* Cosmic dark */
```

## 🎯 Key Features

### Elemental Animations
- **Air**: Floating particles, gentle movements
- **Water**: Flowing waves, liquid transitions
- **Fire**: Flickering lights, heat waves
- **Earth**: Grounding effects, growth animations
- **Space**: Cosmic backgrounds, star fields

### Interactive Elements
- Hover effects unique to each element
- Smooth scroll navigation
- Responsive mobile menu
- Event filtering system
- Animated team cards

## 📱 Responsive Design

Fully responsive across all devices:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Customization

### Update Event Data
Edit `data/events.ts` to add/modify events

### Change Colors
Modify `tailwind.config.ts` for elemental color schemes

### Add Sections
Create new components in `components/` directory

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Team

Created with ❤️ by the Ubuntu 2025 Team

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
```

Then deploy to Vercel:
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

## 🌐 Links

- **Instagram**: [@ubuntu.pvc](https://www.instagram.com/ubuntu.pvc/)
- **Email**: ubuntu.pvc@gmail.com
- **Contact**: 
  - Shree Pillay: +91 73043 83036
  - Ajay Prajapati: +91 8369564372
- **Venue**: Patkar Varde College, Goregaon West, Mumbai - 400104
- **Date**: 12th & 13th December 2025

## 📊 Performance

- ✅ Mobile optimized with reduced animations
- ✅ Removed expensive hover transforms and gradient animations
- ✅ CSS-only active states for better touch response
- ✅ Simplified modal animations for smoother opening
- ✅ Touch-manipulation for improved mobile interactions
- ✅ Lazy loading for better performance
- ✅ Code splitting implemented
- ✅ Optimized for 60fps on mobile devices

---

**Ubuntu 2025 - Panchtatva: Where Elements Unite** 🌬️💧🌍🔥🚀

*Developed with ❤️ by [Ajay Prajapati](https://www.linkedin.com/in/ajayprajapatii/)*
