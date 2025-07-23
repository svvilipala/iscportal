import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function GetInvolved() {
  return (
    <div className="page">
      <Navbar />
      <main className="involved-content">
        <h1>Get Involved</h1>
        
        <section className="opportunity-card">
          <h2>Volunteer Opportunities</h2>
          <p>Help organize events and welcome new students</p>
          <button className="action-button">Learn More</button>
        </section>
        
        <section className="opportunity-card">
          <h2>Student Ambassadors Program</h2>
          <p>Represent your culture and help others adjust</p>
          <button className="action-button">Apply Now</button>
        </section>
        
        <section className="opportunity-card">
          <h2>Leadership Workshops</h2>
          <p>Develop skills for student organizations</p>
          <button className="action-button">View Schedule</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default GetInvolved;