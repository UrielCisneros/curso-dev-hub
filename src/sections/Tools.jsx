import { useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import ScrollFloat from '../components/reactbits/ScrollFloat/ScrollFloat';
import SpotlightCard from '../components/reactbits/SpotlightCard/SpotlightCard';
import { categories, tools } from '../data/tools';

const spotlightByCategory = {
  frontend: 'rgba(34, 211, 238, 0.25)',
  ui: 'rgba(244, 114, 182, 0.25)',
  backend: 'rgba(163, 230, 53, 0.22)',
  data: 'rgba(251, 191, 36, 0.22)',
  testing: 'rgba(248, 113, 113, 0.22)',
  deploy: 'rgba(129, 140, 248, 0.25)',
  productividad: 'rgba(167, 139, 250, 0.25)',
};

const categoryLabel = Object.fromEntries(categories.map(c => [c.id, c.label]));

export default function Tools() {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter(
      t =>
        (active === 'all' || t.category === active) &&
        (!q || `${t.name} ${t.desc} ${t.tag}`.toLowerCase().includes(q))
    );
  }, [active, query]);

  return (
    <section id="herramientas" className="section">
      <div className="section-head">
        <span className="eyebrow">02 · Caja de herramientas</span>
        <ScrollFloat textClassName="section-title" stagger={0.03}>
          npm install --curioso
        </ScrollFloat>
        <p className="section-sub">
          Librerías, frameworks y servicios que vale la pena conocer. Filtra por categoría o busca por nombre.
        </p>
      </div>

      <div className="toolbar">
        <div className="chips" role="tablist" aria-label="Categorías">
          {categories.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`chip ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Buscar herramienta…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </label>
      </div>

      <div className="tools-grid">
        {visible.map(t => (
          <a key={t.name} href={t.url} target="_blank" rel="noreferrer" className="tool-link">
            <SpotlightCard className="tool-card" spotlightColor={spotlightByCategory[t.category]}>
              <div className="tool-top">
                <span className={`tool-cat cat-${t.category}`}>{categoryLabel[t.category]}</span>
                <ArrowUpRight size={18} className="tool-arrow" />
              </div>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <span className="tool-tag">{t.tag}</span>
            </SpotlightCard>
          </a>
        ))}
        {visible.length === 0 && <p className="empty">No encontramos nada con "{query}". Prueba otra palabra.</p>}
      </div>
    </section>
  );
}
