import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaGlobe, FaBook, FaHandsHelping, FaImages, FaEnvelope, FaCreditCard } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><FaHome /> Home</Link>
      <Link to="/about"><FaInfoCircle /> About</Link>
      <Link to="/events"><FaCalendarAlt /> Events</Link>
      <Link to="/cultural-clubs"><FaGlobe /> Clubs</Link>
      <Link to="/resources"><FaBook /> Resources</Link>
      <Link to="/get-involved"><FaHandsHelping /> Get Involved</Link>
      <Link to="/gallery"><FaImages /> Gallery</Link>
      <Link to="/contact"><FaEnvelope /> Contact</Link>
      <Link to="/payments"><FaCreditCard /> Payments</Link>
    </nav>
  );
}