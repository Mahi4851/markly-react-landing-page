import './BlogSection.css';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

function BlogCard({ image, title, description, delay = 0 }) {
  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.62, delay }}
    >
      <div className="blog-card__image-wrap">
        <motion.img className="interactive-image" src={image} alt={title} whileHover={{ scale: 1.055, rotateY: 3, rotateX: -2 }} transition={{ duration: 0.45 }} />
      </div>
      <div className="blog-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
        <button type="button" className="blog-card__read-more" aria-label={`Read more about ${title}`}>Read More</button>
      </div>
    </motion.article>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="blog section-light">
      <Container>
        <Reveal className="blog__heading">
          <p className="eyebrow eyebrow--normal">Blog</p>
          <h2>Rhe Latest Trends</h2>
        </Reveal>

        <div className="blog__grid">
          <BlogCard
            image="/assets/5987d.png"
            title="Styling Your Markly Bag"
            description="Explore the beauty of simplicity and learn how to make a statement with minimalistic styling featuring Markly bags."
          />
          <BlogCard
            image="/assets/19251.png"
            title="Must-Have Bags for the Season"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
            delay={0.08}
          />
          <BlogCard
            image="/assets/4f9a7.png"
            title="Travel Essentials for Jet-Setters"
            description="Embark on a journey with us as we explore travel tips and essential accessories for the modern jet-setter."
            delay={0.16}
          />
        </div>
      </Container>
    </section>
  );
}
