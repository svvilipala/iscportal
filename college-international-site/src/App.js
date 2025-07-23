import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import CulturalClubs from './pages/CulturalClubs';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/cultural-clubs" element={<CulturalClubs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;