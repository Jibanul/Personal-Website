# Personal Website - AI Researcher & Computer Vision Ph.D.

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my work as an AI Researcher specializing in Computer Vision and Machine Learning.

## Features

- 🎯 Responsive design optimized for all devices
- 🌟 Interactive UI with smooth animations and transitions
- 📱 Mobile-first approach with adaptive layouts
- 🚀 Fast loading with code splitting and lazy loading
- 🎨 Modern design with gradient effects and glassmorphism
- 📊 Project showcase with detailed technical descriptions
- 📚 Academic publications section
- 🎥 Video tutorials integration
- 📄 Interactive resume/CV section
- 📱 Contact information with social media links

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Media:** React Player for video content
- **Performance:** Dynamic imports for code splitting
- **Type Checking:** TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.tsx     # Navigation component
│   ├── SkillLevelDemo.tsx
│   └── SkillLevelIcons.tsx
├── pages/             # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   ├── Video.tsx
│   └── projects/      # Individual project pages
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Key Features Implementation

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Adaptive layouts for different screen sizes
- Optimized navigation for mobile devices

### Performance Optimization
- Code splitting with React.lazy()
- Route-based chunking
- Optimized image loading with proper sizing
- Efficient bundle splitting

### Interactive UI
- Smooth scroll animations
- Intersection Observer for scroll-based animations
- Gradient effects and glassmorphism design
- Responsive image galleries

### Content Sections
- Project showcase with detailed case studies
- Academic publications listing
- Video tutorials integration
- Interactive resume/CV
- Contact information with social links

## Deployment

The website is optimized for deployment on various platforms:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [LinkedIn](https://www.linkedin.com/in/jibanul/)

Project Link: [https://github.com/yourusername/personal-website](https://github.com/yourusername/personal-website)

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)