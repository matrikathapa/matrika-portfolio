import { ThemeProvider } from './context/ThemeProvider';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './sections/Hero/HeroSection';
import AboutSection from './sections/Hero/About/AboutSection';
import JourneySection from './sections/Hero/Journey/JourneySection';
import SkillsSection from './sections/Hero/Skills/SkillsSection';
import ProjectsSection from './sections/Hero/Projects/ProjectsSection';
import CreativeCornerSection from './sections/CreativeCorner/CreativeCornerSection';
import ContactSection from './sections/Contact/ContactSection';
import Footer from './components/Footer';

/**
 * Matrika Portfolio — Root Application
 * 
 * Part 2: Navigation + Room Hero
 * 
 * Educational Notes:
 * 1. Global Theme Context: `<ThemeProvider>` wraps the entire application,
 *    enabling the signature Moon Toggle in Navbar to drive Day/Evening transitions.
 * 2. Initial Splash Screen: `<LoadingScreen>` covers the page while loading,
 *    smoothly fading out once the portfolio and assets are ready.
 * 3. Anchor Targets: Provides lightweight, accessible placeholders for upcoming
 *    sections (About, Journey, Skills, Projects, Creative Corner, Contact) to ensure
 *    nav clicks and "View My Work" buttons scroll smoothly.
 */
function PortfolioApp() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-app)] text-[var(--text-main)] transition-colors duration-500">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Part 2 Main Focus: Hero Section with Illustrated Room Workspace */}
      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />

        {/* Placeholder Anchor Sections for upcoming parts */}
        <AboutSection/>

        <JourneySection/>

        <SkillsSection/>

        <ProjectsSection/>

        <CreativeCornerSection/>

        <ContactSection/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <PortfolioApp />
    </ThemeProvider>
  );
}
