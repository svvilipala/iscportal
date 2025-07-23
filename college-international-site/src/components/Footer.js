import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://whatsapp.com"><FaWhatsapp /></a>
      </div>
      <p>© {new Date().getFullYear()} College International Office</p>
    </footer>
  );
}