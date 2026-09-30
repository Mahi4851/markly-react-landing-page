import './NewsletterSection.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus('Thanks — you are on the list.');
    setEmail('');
  };

  return (
    <section id="newsletter" className="newsletter section-dark">
      <motion.div
        className="newsletter__image-wrap"
        initial={{ opacity: 0, scale: 1.025 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          className="newsletter__image interactive-image"
          src="/assets/4f046.png"
          alt="Woman carrying a Markly leather shoulder bag"
        />
      </motion.div>

      <div className="newsletter__shade" />

      <Container className="newsletter__layout">
        <Reveal className="newsletter__copy">
          <h2>Join the Markly Community — Subscribe to Our Newsletter</h2>
          <p>
            Be the first to know about new arrivals, exclusive promotions, and the latest trends in the world of bags.
            Sign up for our newsletter and stay connected with the Markly lifestyle.
          </p>
          <form className="newsletter__form" onSubmit={submit}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              required
            />
            <Button type="submit" variant="light">
              Submit
            </Button>
          </form>
          <p className="newsletter__status" aria-live="polite">
            {status}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
