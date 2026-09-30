import './SustainabilitySection.css';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="split split--sustainability section-light">
      <Container className="split__grid">
        <Reveal className="split__copy">
          <p className="eyebrow">Your Perfect Fit</p>
          <h2>
            We believe in fashion that cares for the planet. Our commitment to sustainability goes beyond creating
            stylish bags — it's about making a positive impact.
          </h2>
          <p className="body-muted">
            Choosing the right size is crucial when it comes to bags. Use our comprehensive size guide to ensure your
            Markly bag is not only stylish but also perfectly suited to your needs. From compact crossbodies to spacious
            totes, we've got the right size for every occasion.
          </p>
        </Reveal>

        <motion.figure
          className="split__media split__media--cream"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            className="interactive-image"
            src="/assets/4fd59.png"
            alt="Black Markly shoulder bag"
            whileHover={{ scale: 1.035, rotateY: -4, rotateX: 2 }}
            transition={{ duration: 0.5 }}
          />
        </motion.figure>
      </Container>
    </section>
  );
}
