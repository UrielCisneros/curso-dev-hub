import ShinyText from '../components/reactbits/ShinyText/ShinyText';

export default function Footer() {
  return (
    <footer className="footer">
      <ShinyText text="git commit -m &quot;sigue aprendiendo&quot;" speed={3} className="footer-shiny" />
      <p>
        Hecho con React + <a href="https://reactbits.dev" target="_blank" rel="noreferrer">React Bits</a> para el curso.
      </p>
    </footer>
  );
}
