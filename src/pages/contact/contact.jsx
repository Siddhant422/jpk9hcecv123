import React, { useEffect } from 'react';
import Header from '../header/header';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

  return (
    <div>
        <Header />
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{fontFamily:"serif"}}>Get in Touch</h1>
        <p className="text-lg text-gray-600">
          We’re here to help. Reach out to us for any inquiries or support.
        </p>
      </header>
      
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Form</h2>
        <form action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full border-inset border-[2px] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full border-inset border-[2px] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full border-inset border-[2px] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </section>
      
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <i className="fas fa-map-marker-alt text-blue-500 text-2xl"></i>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">IIT Delhi TechnoPark</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone-alt text-blue-500 text-2xl"></i>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600"><a href="tel:+1234567890" className="text-blue-500 hover:underline">+91 8922915545</a></p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-envelope text-blue-500 text-2xl"></i>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600"><a href="mailto:info@tournest.com" className="text-blue-500 hover:underline">siddhant.work76@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Find Us on the Map</h2>
        <div className="relative w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14640.755673644698!2d77.1013489!3d28.9521414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daddf6cade053%3A0xfd7ceeb61e0dbbe1!2sIIT+Delhi+Sonipat+Campus!5e0!3m2!1sen!2sin!4v1635332718108!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Contact;
