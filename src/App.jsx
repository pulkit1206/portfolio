import React from 'react';
import Navbar from './components/navbar.jsx';
import HeroSection from './components/hero.jsx';
import AboutSection from './components/about.jsx';
import SkillsSection from './components/skills.jsx';
import ProjectsSection from './components/projects.jsx';
import ContactSection from './components/contact.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
