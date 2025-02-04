# Personal Website

I built my portfolio website using [bolt.new](https://bolt.new/) by [StackBlitz](https://stackblitz.com/), and it was such an impressive experience! Developing, testing, and deploying everything directly in my browser was easy. I could quickly iterate on features using tools like React, TypeScript, and Tailwind CSS, which helped bring my vision to life. That said, I did run into a few serious and annoying quirks and inconsistencies along the way. I've listed them below.

## ❌✔️ Problems Faced and Solutions (January 2025)

### 1. **Deletes chat on random**
   **Problem:** The chat section gets deleted randomly. It happened to me once.  
   **Solution:** I found the project in the collections on [StackBlitz](https://stackblitz.com/), and it was resolved.

### 2. **Youtube dot com refused to connect. Error**
   **Problem:** When I tried to embed a YT video. The video preview failed to load with a "refused to connect" error.  
   **Solution:** This is an error in the preview of **bolt.new**, but when you deploy the project, the error goes away.

### 3. **Deletes portion of code/section when you try to do something new**
   **Problem:** Parts of the code or sections get deleted when making new changes.  
   **Solution:** **bolt.new** offers a "rollback to checkpoint" option, which helps recover lost changes. I also recommend keeping an eye on the project frequently to avoid losing work. Also, I wrote "don't change anything else" in the prompt, and it worked sometimes.

### 4. **Takes to the home page after rendering**
   **Problem:** After modifying the code, the app redirects to the home page, even if you were working on another page. This was annoying.  
   **Solution:** Unfortunately, I couldn’t find a solution for this.

---
## ⚡ What Needs to Be Done  
- **Improve Speed:** Optimize load times and performance for a smoother user experience.  
- **Enhance Efficiency:** Reduce unnecessary resource usage and streamline code.
- **Optimize Assets:** Compress images, minify CSS/JS, and implement caching strategies.  
- **Improve Server Response Time:** Enhance backend performance to reduce delays.

---

## Features

- 🎯 Responsive design optimized for all devices
- 🌟 Interactive UI with smooth animations and transitions
- 🚀 Fast loading with code splitting and lazy loading
- 🎨 Modern design with gradient effects and glass morphism
- 📊 Project showcase with detailed technical descriptions
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
git clone https://github.com/jibanul/personal-website.git
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

The site will be available at `http:jibanul.com`

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

### Content Sections
- Project showcase with detailed case studies
- Academic publications listing
- Video tutorials integration
- Interactive resume/CV
- Contact information with social links

## Deployment

The website is optimized for deployment on various platforms:
- Netlify [I used]
- Vercel
- GitHub Pages
- Any static hosting service

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

[LinkedIn](https://www.linkedin.com/in/jibanul/)


## Resources/tools

- [Bolt](https://bolt.new/)
- [StackBlitz](https://stackblitz.com/)
<!-- # Personal-Website -->

<!-- [Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Jibanul/Personal-Website) -->
