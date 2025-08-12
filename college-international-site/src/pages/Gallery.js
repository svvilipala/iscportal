function Gallery() {
  // In a real app, these would be imported images
  const photoAlbums = [
    {
      id: 1,
      title: "International Week 2023",
      photoCount: 24
    },
    {
      id: 2,
      title: "Cultural Festival",
      photoCount: 18
    },
    {
      id: 3,
      title: "Student Meetups",
      photoCount: 12
    }
  ];

  return (
    <div className="page">
      <main className="gallery-content">
        <h1>Photo Gallery</h1>
        
        <div className="albums-grid">
          {photoAlbums.map(album => (
            <div key={album.id} className="album-card">
              <div className="album-placeholder"></div>
              <h3>{album.title}</h3>
              <p>{album.photoCount} photos</p>
              <button className="view-button">View Album</button>
            </div>
          ))}
        </div>
        
        <section className="upload-section">
          <h2>Share Your Photos</h2>
          <button className="upload-button">Upload Photos</button>
        </section>
      </main>
    </div>
  );
}

export default Gallery;