import './WhyChooseSection.css';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

export function WhyChooseSection() {
  return (
    <section className="benefits section-soft">
      <Container>
        <Reveal className="benefits__heading">
          <div className="benefits__title">
            <img className="benefits__mark" src="/assets/883ee.svg" alt="" />
            <h2>Why Choose Markly?</h2>
          </div>
          <p>
            Discover our current best-sellers and customer favorites. Each product is a testament to Markly's
            commitment to combining style, durability, and functionality.
          </p>
        </Reveal>

        <div className="benefits__grid">
          <motion.article className="benefit-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.62 }} whileHover={{ y: -6 }}>
            <div className="benefit-card__visual"><img className="interactive-image" src="/assets/dee12.svg" alt="" /></div>
            <div>
              <h3>Quality Craftsmanship</h3>
              <p>Meticulously crafted using premium materials, our bags are a testament to enduring quality, ensuring you're always prepared for any journey.</p>
            </div>
          </motion.article>

          <motion.article className="benefit-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.62, delay: 0.08 }} whileHover={{ y: -6 }}>
            <div className="benefit-card__visual"><img className="interactive-image" src="/assets/bbac0.svg" alt="" /></div>
            <div>
              <h3>Versatility</h3>
              <p>From the office to weekend getaways, Markly bags seamlessly blend style with practicality, ensuring you're always prepared for any journey.</p>
            </div>
          </motion.article>

          <motion.article className="benefit-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.62, delay: 0.16 }} whileHover={{ y: -6 }}>
            <div className="benefit-card__visual"><img className="interactive-image" src="/assets/fb151.svg" alt="" /></div>
            <div>
              <h3>Sustainability</h3>
              <p>We're committed to eco-friendly practices, sourcing materials responsibly and crafting bags that stand the test of time.</p>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
