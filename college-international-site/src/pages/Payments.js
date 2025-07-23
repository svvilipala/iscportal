import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Payments() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    purpose: '',
    amount: '',
    method: 'credit'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment submitted for ${formData.purpose}! (This is a demo)`);
    setFormData({
      name: '',
      email: '',
      studentId: '',
      purpose: '',
      amount: '',
      method: 'credit'
    });
  };

  return (
    <div className="page">
      <Navbar />
      <main className="payments-content">
        <h1>Support & Payments</h1>
        <p className="subtitle">Pay for events, club fees, or contribute to international student programs.</p>
        
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Full Name:</label>
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
            <label>Student ID (optional):</label>
            <input 
              type="text" 
              name="studentId" 
              value={formData.studentId} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label>Purpose of Payment:</label>
            <select 
              name="purpose" 
              value={formData.purpose} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a purpose</option>
              <option value="event">Event Registration Fee</option>
              <option value="club">Club Membership Dues</option>
              <option value="merchandise">Merchandise</option>
              <option value="donation">General Donation</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Amount ($):</label>
            <input 
              type="number" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange} 
              min="1"
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Payment Method:</label>
            <select 
              name="method" 
              value={formData.method} 
              onChange={handleChange} 
              required
            >
              <option value="credit">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          
          <div className="payment-buttons">
            <button type="submit" className="pay-button">Submit Payment</button>
            <button type="button" className="cancel-button">Cancel</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Payments;