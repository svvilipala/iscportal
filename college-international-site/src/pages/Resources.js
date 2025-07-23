import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resources() {
  return (
    <div className="page">
      <Navbar />
      <main className="resources-content">
        <h1>Student Resources</h1>
        
        <section>
          <h2>Transportation Tips</h2>
          <ul>
            <li>Public bus routes near campus</li>
            <li>Student discounts on transit passes</li>
            <li>Bike rental locations</li>
          </ul>
        </section>
        
        <section>
          <h2>Cultural Adjustment</h2>
          <ul>
            <li>Dealing with homesickness</li>
            <li>Understanding local customs</li>
            <li>Making friends</li>
          </ul>
        </section>
        
        <section>
          <h2>Academic Support</h2>
          <ul>
            <li>Writing center for ESL students</li>
            <li>Tutoring services</li>
            <li>Time management workshops</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resources;