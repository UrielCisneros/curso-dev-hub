import Aurora from '../components/reactbits/Aurora/Aurora';
import SplitText from '../components/reactbits/SplitText/SplitText';
import RotatingText from '../components/reactbits/RotatingText/RotatingText';
import StarBorder from '../components/reactbits/StarBorder/StarBorder';
import Magnet from '../components/reactbits/Magnet/Magnet';
import CountUp from '../components/reactbits/CountUp/CountUp';
import { gitSteps } from '../data/gitGuide';
import { tools, categories } from '../data/tools';

const stats = [
  { value: gitSteps.length, label: 'pasos de Git' },
  { value: tools.length, label: 'herramientas' },
  { value: categories.length - 1, label: 'categorías' },
];

export default function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Aurora colorStops={['#7c3aed', '#22d3ee', '#a3e635']} amplitude={1.1} blend={0.55} />
      </div>

      <div className="hero-content">

        <SplitText
          text="Taller dev"
          tag="h1"
          className="hero-title"
          delay={70}
          duration={0.9}
          from={{ opacity: 0, y: 60, rotateX: -60 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          rootMargin="0px"
        />

        <div className="hero-rotate">
          <span>Todo lo que necesitas para</span>
          <RotatingText
            texts={['dominar Git', 'elegir tu stack', 'hacer deploy', 'trabajar en equipo']}
            mainClassName="rotate-chip"
            staggerFrom="last"
            staggerDuration={0.02}
            splitLevelClassName="rotate-split"
            rotationInterval={2400}
          />
        </div>

        <p className="hero-sub">
          Una guía práctica de Git y una colección curada de librerías, frameworks y herramientas
          para tus proyectos. Guárdala en favoritos. 🚀
        </p>

        <div className="hero-cta">
          <Magnet padding={60} magnetStrength={4}>
            <StarBorder as="a" href="#git" color="#22d3ee" speed="5s" backgroundColor="#0b0714">
              Empezar con Git
            </StarBorder>
          </Magnet>
          <Magnet padding={60} magnetStrength={4}>
            <StarBorder as="a" href="#herramientas" color="#a3e635" speed="5s" backgroundColor="#0b0714">
              Ver herramientas
            </StarBorder>
          </Magnet>
        </div>

        <dl className="hero-stats">
          {stats.map(s => (
            <div key={s.label}>
              <dt>
                <CountUp to={s.value} duration={1.6} />
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
