export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span className="muted">© {year} Henry Huynh</span>
        <div className="footerLinks">
          <a className="footerLink" href="#about">About</a>
          <a className="footerLink" href="#projects">Projects</a>
          <a className="footerLink" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
