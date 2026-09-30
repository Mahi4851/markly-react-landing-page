import './CollectionsSection.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

const products = [
  { image: '/assets/483e0.png', label: 'Indigo sculpted shoulder bag' },
  { image: '/assets/4fd59.png', label: 'Black sculpted shoulder bag' },
  { image: '/assets/06885.png', label: 'Rose sculpted shoulder bag' },
];

export function CollectionsSection() {
  const [current, setCurrent] = useState(0);
  const previous = () => setCurrent((value) => (value + products.length - 1) % products.length);
  const next = () => setCurrent((value) => (value + 1) % products.length);

  return (
    <section id="collections" className="collections section-light">
      <Container>
        <Reveal className="collections__heading">
          <p className="eyebrow eyebrow--normal">Urban Explorer &amp; Adventure Seeker</p>
          <h2>Explore our carefully curated collections</h2>
        </Reveal>

        <div className="collections__stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={products[current].image}
              className="collections__product"
              initial={{ opacity: 0, x: 36, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -36, scale: 0.98 }}
              transition={{ duration: 0.42 }}
            >
              <motion.img
                className="collections__bag interactive-image"
                src={products[current].image}
                alt={products[current].label}
                whileHover={{ y: -8, rotateY: current === 2 ? 4 : -4, rotateX: 2, scale: 1.025 }}
              />
              <img className="collections__shadow" src="/assets/67275.svg" alt="" aria-hidden="true" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="collections__bottom">
          <p>
            Explore our collections, embrace quality craftsmanship, and make a statement with Markly. Your perfect bag
            is just a click away.
          </p>
          <div className="arrow-controls" aria-label="Collection controls">
            <button onClick={previous} aria-label="Previous bag">
              ←
            </button>
            <button onClick={next} aria-label="Next bag">
              →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
