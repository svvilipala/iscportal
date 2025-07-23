import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "International Food Festival",
      date: "October 15, 2023",
      description: "Experience cuisines from around the world!"
    },
    {
      id: 2,
      title: "Cultural Exchange Workshop",
      date: "November 3, 2023",
      description: "Share your culture and learn about others"
    }
  ];

  return (
    <div className="page">
      <Navbar />
      <main className="events-content">
        <h1>Upcoming Events</h1>
        
        <div className="events-calendar">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
              <button className="rsvp-button">RSVP</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Events;