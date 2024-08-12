import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = /^\S+@\S+\.\S+$/.test(e.target.value);
      if (!isValid) {
        setErrors({ ...errors, email: 'Your email is invalid.' });
      } else {
        const { email, ...rest } = errors;
        setErrors(rest);
      }
    } else {
      if (!e.target.value.length) {
        setErrors({ ...errors, [e.target.name]: `${e.target.name} is required.` });
      } else {
        const { [e.target.name]: removed, ...rest } = errors;
        setErrors(rest);
      }
    }

    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!e.target.value.length) {
      setErrors({ ...errors, [e.target.name]: `${e.target.name} is required.` });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && name && email && message) {
      // Handle form submission (e.g., send an email or store the message)
      console.log('Form submitted:', formState);
      // Reset the form
      setFormState({ name: '', email: '', message: '' });
      alert('Your message has been sent!');
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
      </div>
    </section>
  );
};

export default Contact;
