import isc from'../assets/images/isc.png';
export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <img src={isc} alt = "International Students" style={{width: '100%', height: 'auto'}}/>
        <h1>Welcome International Students!</h1>
        <p>Your home away from home</p>
      </section>
    </div>
  );
}