import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <main className="contact-content">
        <h1>Contact Us</h1>
        
        <div className="contact-container">
          <section className="contact-info">
            <h2>International Student Office</h2>
            <p>Email: international@college.edu</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: Student Center, Room 205</p>
            
            <div className="map-placeholder">
              <p>[Map would display here]</p>
            </div>
          </section>
          
          <section className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Message:</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Contact;