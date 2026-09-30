import './FeatureBannerSection.css';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

export function FeatureBannerSection() {
  return (
    <section className="feature-banner section-dark">
      <motion.div
        className="feature-banner__bag-wrap"
        aria-hidden="true"
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <img className="feature-banner__bag interactive-image" src="/assets/pink-feature-bag.png" alt="" />
      </motion.div>

      <div className="feature-banner__shade" />

      <Container className="feature-banner__layout">
        <Reveal className="feature-banner__copy">
          <h2>
            Whether you're seeking classic sophistication, urban chic, or a companion for you, Markly has the perfect
            bag for every occasion.
          </h2>
          <div className="feature-banner__detail">
            <p>
              Discover our current best-sellers and customer favorites. Each product is a testament to Markly's
              commitment to combining style, durability, and functionality.
            </p>
            <Button href="#collections" variant="light">
              Shop Now
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
