import { useState } from 'react';
import { House, GitBranch, Wrench, BookOpen } from 'lucide-react';

import ClickSpark from './components/reactbits/ClickSpark/ClickSpark';
import Dock from './components/reactbits/Dock/Dock';
import Hero from './sections/Hero';
import GitGuide from './sections/GitGuide';
import Tools from './sections/Tools';
import Footer from './sections/Footer';

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const dockItems = [
  { icon: <House size={20} />, label: 'Inicio', onClick: () => scrollTo('inicio') },
  { icon: <GitBranch size={20} />, label: 'Guía de Git', onClick: () => scrollTo('git') },
  { icon: <BookOpen size={20} />, label: 'Convenciones', onClick: () => scrollTo('commits') },
  { icon: <Wrench size={20} />, label: 'Herramientas', onClick: () => scrollTo('herramientas') },
];

export default function App() {
  const [sparks] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const content = (
    <>
      <Hero />
      <main>
        <GitGuide />
        <Tools />
      </main>
      <Footer />
      <nav className="dock-fixed" aria-label="Navegación">
        <Dock items={dockItems} panelHeight={64} baseItemSize={48} magnification={68} />
      </nav>
    </>
  );

  return sparks ? (
    <ClickSpark sparkColor="#a78bfa" sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
      {content}
    </ClickSpark>
  ) : (
    content
  );
}
