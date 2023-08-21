'use client'
import React, { useState } from 'react';
import Layout from './../../components/Layout';





const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(formData);
  };

  return (
    <Layout>
      {/* Section 1 - Contact Form */}
      <section className="mb-8">
        <h2 className="text-xl bg-lime-500 font-bold mb-4">Contact Us:</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block font-semibold mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3 h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
