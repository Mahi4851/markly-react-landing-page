import './HeroSection.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';

export function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const copyY = useTransform(scrollY, [0, 700], [0, 48]);

  return (
    <section id="home" className="hero section-dark">
      <div className="hero__image-wrap" aria-hidden="true">
        <motion.img
          className="hero__bag"
          src="/assets/d5563.png"
          alt=""
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="hero__shade" />

      <Container className="hero__content">
        <motion.div className="hero__copy" style={{ y: copyY }}>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Markly Bags
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            We believe in the power of a well-crafted bag to enhance your lifestyle. Explore our curated
            collection of premium bags that seamlessly blend style, functionality, and durability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
          >
            <Button href="#collections" variant="light">
              Shop Now
            </Button>
          </motion.div>
        </motion.div>

        <div className="hero__footer">
          <span>Elevate Your Style with Exceptional Bags!</span>
          <a href="#sustainability">SCROLL</a>
        </div>
      </Container>
    </section>
  );
}
