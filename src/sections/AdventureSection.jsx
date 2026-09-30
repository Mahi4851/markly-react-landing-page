import './SustainabilitySection.css';
import './AdventureSection.css';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

export function AdventureSection() {
  return (
    <section id="adventure" className="split split--adventure section-light">
      <Container className="split__grid split__grid--reverse-mobile">
        <motion.figure
          className="split__media split__media--full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            className="interactive-image"
            src="/assets/d6e48.png"
            alt="Natural materials used in the Adventure collection"
            whileHover={{ scale: 1.04, rotateY: 4, rotateX: -2 }}
            transition={{ duration: 0.6 }}
          />
        </motion.figure>

        <Reveal className="split__copy split__copy--right">
          <h2>
            Adventure collection is designed to keep up with your dynamic lifestyle, offering durability without
            compromising on style.
          </h2>
          <p className="body-muted">
            At Markly, we believe in the power of a well-crafted bag to enhance your lifestyle. Explore our curated
            collection of premium bags that seamlessly blend style, functionality, and durability.
          </p>
          <Button href="#collections">Shop Now!</Button>
        </Reveal>
      </Container>
    </section>
  );
}
