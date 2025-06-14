import React, { useState } from "react";
import "../Styles/Contact.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_yfkze6q"; // 'YOUR_SERVICE_ID'
const TEMPLATE_ID = "template_1amrabo"; // 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = "y_GG6wHP_7HkvfHv3"; // 'YOUR_PUBLIC_KEY'

emailjs.init({
  publicKey: PUBLIC_KEY, // 'YOUR_PUBLIC_KEY'
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "userEmail",
  },
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const templateParams = {
      to_name: "Renke Cui", // 'YOUR_NAME'
      from_name: name, // 'YOUR_NAME
      reply_to: email, // 'YOUR_EMAIL
      message: message, // 'YOUR_MESSAGE'
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
      (response) => {
        setFormData({ name: "", email: "", message: "" });
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <section id="Contact" className="contact-section">
      <h2 className="section-title ">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
