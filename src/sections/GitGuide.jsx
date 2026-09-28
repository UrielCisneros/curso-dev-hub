import { useState } from 'react';
import { Check, Copy, Lightbulb } from 'lucide-react';
import ScrollFloat from '../components/reactbits/ScrollFloat/ScrollFloat';
import DecryptedText from '../components/reactbits/DecryptedText/DecryptedText';
import GradientText from '../components/reactbits/GradientText/GradientText';
import { gitSteps, commitTypes } from '../data/gitGuide';

// Hash corto "falso" pero estable para cada paso, para que parezca un commit.
const fakeHash = str => {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h.toString(16).padStart(7, '0').slice(0, 7);
};

function CommandLine({ cmd, note }) {
  const [copied, setCopied] = useState(false);

  const copy = async e => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* el portapapeles puede no estar disponible */
    }
  };

  return (
    <li className="cmd">
      <div className="cmd-row">
        <code>
          <span className="cmd-prompt">$</span> {cmd}
        </code>
        <button className="cmd-copy" onClick={copy} aria-label={`Copiar: ${cmd}`}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      </div>
      <span className="cmd-note">{note}</span>
    </li>
  );
}

export default function GitGuide() {
  return (
    <section id="git" className="section">
      <div className="section-head">
        <span className="eyebrow">01 · Pequeña guía</span>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="section-title"
        >
          git log --curso
        </ScrollFloat>
        <p className="section-sub">
          Cada paso es un "commit" en tu aprendizaje. Pasa el cursor sobre el hash para descifrarlo y
          copia cualquier comando con un clic.
        </p>
      </div>

      <ol className="timeline">
        {gitSteps.map((step, i) => (
          <li key={step.id} className="commit">
            <div className="commit-rail" aria-hidden="true">
              <span className={`commit-node level-${step.level.toLowerCase()}`} />
            </div>

            <article className="commit-card">
              <header className="commit-head">
                <DecryptedText
                  text={fakeHash(step.id)}
                  animateOn="hover"
                  speed={40}
                  maxIterations={12}
                  characters="0123456789abcdef"
                  className="hash"
                  encryptedClassName="hash hash-enc"
                  parentClassName="hash-wrap"
                />
                {i === 0 && <span className="head-tag">HEAD → main</span>}
                <span className={`level level-${step.level.toLowerCase()}`}>{step.level}</span>
              </header>

              <h3>{step.title}</h3>
              <p className="commit-desc">{step.description}</p>

              <ul className="cmd-list">
                {step.commands.map(c => (
                  <CommandLine key={c.cmd} {...c} />
                ))}
              </ul>

              {step.tip && (
                <p className="tip">
                  <Lightbulb size={16} /> {step.tip}
                </p>
              )}
            </article>
          </li>
        ))}
      </ol>

      <div id="commits" className="convention">
        <GradientText colors={['#22d3ee', '#a78bfa', '#a3e635', '#22d3ee']} animationSpeed={6} className="convention-title">
          Conventional Commits
        </GradientText>
        <p className="section-sub">
          Formato: <code className="inline">tipo: descripción corta en presente</code>
        </p>
        <div className="types">
          {commitTypes.map(t => (
            <div key={t.type} className="type">
              <code>{t.type}</code>
              <span>{t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
