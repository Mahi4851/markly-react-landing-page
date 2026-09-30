import './Navbar.css';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../common/Container';

const brandIcon = '/assets/278d1.svg';
const cartIcon = '/assets/07093.svg';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? 'site-header--solid' : ''}`}>
      <Container className="nav-shell">
        <a className="brand" href="#home" aria-label="Markly home">
          <img src={brandIcon} alt="" />
          <span>Markly</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#collections">Bags</a>
          <a href="#adventure">Accesories</a>
          <a href="#blog">Blog</a>
          <a href="#newsletter">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button cart-button" type="button" aria-label="Open shopping bag">
            <img src={cartIcon} alt="" />
          </button>
          <button
            className={`menu-toggle ${open ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a href="#home" onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>Home</motion.a>
            <motion.a href="#collections" onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.035 }}>Bags</motion.a>
            <motion.a href="#adventure" onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.07 }}>Accesories</motion.a>
            <motion.a href="#blog" onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.105 }}>Blog</motion.a>
            <motion.a href="#newsletter" onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.14 }}>Contact</motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
