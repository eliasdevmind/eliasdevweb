import { useEffect, useMemo, useState } from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import BootSequence from './components/BootSequence';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import StackSection from './components/StackSection';
import SystemsSection from './components/SystemsSection';
import {
  aboutPoints,
  categories,
  coreAreas,
  differentials,
  heroMetrics,
  projects,
  stackGroups,
  stackItems,
  workExperience,
} from './data/portfolioData';

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeStack, setActiveStack] = useState('Todas');
  const [isBooting, setIsBooting] = useState(true);
  const [previewPosition, setPreviewPosition] = useState({
    x: '50%',
    y: '50%',
  });
  const [activeProject, setActiveProject] = useState(projects[0]);

  const projectsByCategory = useMemo(() => {
    if (activeCategory === 'Todos') {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const stackFilters = useMemo(() => {
    const values = new Set();

    projectsByCategory.forEach((project) => {
      project.stack.forEach((item) => values.add(item));
    });

    return ['Todas', ...Array.from(values)];
  }, [projectsByCategory]);

  const filteredProjects = useMemo(() => {
    if (activeStack === 'Todas') {
      return projectsByCategory;
    }

    return projectsByCategory.filter((project) => project.stack.includes(activeStack));
  }, [activeStack, projectsByCategory]);

  useEffect(() => {
    if (!stackFilters.includes(activeStack)) {
      setActiveStack('Todas');
    }
  }, [activeStack, stackFilters]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === activeProject.id)) {
      setActiveProject(filteredProjects[0]);
    }
  }, [activeProject.id, filteredProjects]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsBooting(false);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, []);

  function handlePreviewMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setPreviewPosition({
      x: `${Math.max(0, Math.min(100, x))}%`,
      y: `${Math.max(0, Math.min(100, y))}%`,
    });
  }

  return (
    <div className={`portfolio-shell${isBooting ? ' is-booting' : ''}`}>
      <div className="ambient ambient-grid" aria-hidden="true" />
      <div className="ambient ambient-noise" aria-hidden="true" />
      <div className="ambient ambient-hud" aria-hidden="true" />

      <BootSequence isBooting={isBooting} onSkip={() => setIsBooting(false)} />
      <Header />

      <main className="page">
        <HeroSection heroMetrics={heroMetrics} />
        <AboutSection
          aboutPoints={aboutPoints}
          coreAreas={coreAreas}
          workExperience={workExperience}
        />
        <StackSection stackGroups={stackGroups} />
        <ProjectsSection
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          stackFilters={stackFilters}
          activeStack={activeStack}
          onStackChange={setActiveStack}
          filteredProjects={filteredProjects}
          activeProject={activeProject}
          onProjectChange={setActiveProject}
          onPreviewMove={handlePreviewMove}
          onPreviewLeave={() => setPreviewPosition({ x: '50%', y: '50%' })}
          previewPosition={previewPosition}
        />
        <SystemsSection differentials={differentials} stackItems={stackItems} />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
