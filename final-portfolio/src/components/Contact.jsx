import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    // Logic to handle form submission (e.g., send data to backend, show confirmation)
    setSubmitted(true);
    // Additional logic to handle form data
    console.log(formData);
  };

  const handleChange = (e) => {
    // Update form data state as user types
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h2>Email Me Here</h2>
      {submitted ? (
        <p className="submitted-message">
          Thank you for contacting me. I will get back to you soon!
        </p>
      ) : (
        <form className="max-w-md mx-auto">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          <a type="submit" href="mailto:cit.extension@gmail.com">
            <button className="submit-btn" type="button" onClick={handleSubmit}>
              Submit <FaCheck />
            </button>
          </a>
        </form>
      )}
    </div>
  );
}
