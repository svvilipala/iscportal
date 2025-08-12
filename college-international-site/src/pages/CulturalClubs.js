function CulturalClubs() {
  const clubs = [
    {
      id: 1,
      name: "Asian Student Association",
      region: "Asia",
      meeting: "Every Tuesday 4pm"
    },
    {
      id: 2,
      name: "African Student Union",
      region: "Africa",
      meeting: "Every Wednesday 5pm"
    },
    {
      id: 3,
      name: "Latin American Club",
      region: "Latin America",
      meeting: "Every Thursday 3pm"
    }
  ];

  return (
    <div className="page">
      <main className="clubs-content">
        <h1>Cultural Clubs</h1>
        
        <div className="clubs-grid">
          {clubs.map(club => (
            <div key={club.id} className="club-card">
              <h3>{club.name}</h3>
              <p><strong>Region:</strong> {club.region}</p>
              <p><strong>Meets:</strong> {club.meeting}</p>
              <button className="join-button">Join Us</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CulturalClubs;
