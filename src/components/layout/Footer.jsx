import './Footer.css';
import { Container } from '../common/Container';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand brand--dark" href="#home">
              <img src="/assets/c4f06.svg" alt="" />
              <span>Markly</span>
            </a>
            <p>
              We believe in the power of a well-crafted bag to enhance your lifestyle. Explore our curated
              collection of premium bags that seamlessly blend style, functionality, and durability.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__group">
              <h3>Company</h3>
              <a href="#collections">Bags</a>
              <a href="#blog">Blogs</a>
              <a href="#newsletter">Community</a>
              <a href="#newsletter">Contact</a>
            </div>
            <div className="footer__group">
              <h3>Services</h3>
              <a href="#home">Bussines</a>
              <a href="#home">Modifications</a>
              <a href="#home">Morgans Care</a>
              <a href="#home">Insurance</a>
              <a href="#home">Warranty</a>
            </div>
            <div className="footer__group">
              <h3>Resource</h3>
              <a href="#home">News</a>
              <a href="#newsletter">Newsletter</a>
              <a href="#home">Careers</a>
              <a href="#home">FAQS</a>
              <a href="#home">Review</a>
            </div>
            <div className="footer__group">
              <h3>Legal</h3>
              <a href="#home">Privacy Policy</a>
              <a href="#home">Tems of Used</a>
              <a href="#home">Cookies</a>
              <a href="#home">Sitemap</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <small>©2024 Markly. All right reserved.</small>
          <div className="socials" aria-label="Social media links">
            <a href="#home" aria-label="Facebook"><img src="/assets/7b0ed.svg" alt="" /></a>
            <a href="#home" aria-label="Twitter"><img src="/assets/c0d8b.svg" alt="" /></a>
            <a href="#home" aria-label="Instagram"><img src="/assets/cd868.svg" alt="" /></a>
            <a href="#home" aria-label="LinkedIn"><img src="/assets/6f291.svg" alt="" /></a>
            <a href="#home" aria-label="YouTube"><img src="/assets/c069d.svg" alt="" /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
