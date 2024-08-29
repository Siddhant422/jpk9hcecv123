import React from "react";
import Header from "../header/header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "serif" }}
          >
            About TourNest
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Journey with us as we explore the world’s most breathtaking
            destinations. At TourNest, we turn your travel dreams into reality.
          </p>
        </header>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission at TourNest is to craft unforgettable travel experiences
            that inspire and delight. We are dedicated to providing seamless,
            personalized adventures that cater to your unique preferences and
            interests.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision becoming the premier travel platform that connects
            curious explorers with extraordinary destinations worldwide. Our aim
            is to build a community of travelers who appreciate genuine
            experiences and cultural diversity.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="min-w-12 min-h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-heart"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Customer-Centricity
                </h3>
                <p className="text-gray-600 mt-2">
                  We prioritize our travelers’ needs and strive to exceed their
                  expectations.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="min-w-12 min-h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-check"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Integrity
                </h3>
                <p className="text-gray-600 mt-2">
                  We are committed to honesty and transparency in all our
                  interactions.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="min-w-12 min-h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Innovation
                </h3>
                <p className="text-gray-600 mt-2">
                  We continuously seek creative ways to enhance the travel
                  experience.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="min-w-12 min-h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Sustainability
                </h3>
                <p className="text-gray-600 mt-2">
                  We advocate for eco-friendly practices and responsible
                  tourism.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="min-w-12 min-h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-star"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Excellence
                </h3>
                <p className="text-gray-600 mt-2">
                  We pursue excellence in every service we offer, ensuring
                  high-quality experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1  gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://avatars.githubusercontent.com/u/98004129?v=4"
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 "
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                 Siddhant Keshari
              </h3>
              <p className="text-gray-600 text-center">CEO & Founder</p>
              <p className="mt-2 text-gray-700 text-center">
                Siddhant's passion for travel and expertise in the industry drive
                the vision and strategy of TourNest.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Have questions or need assistance? Contact us at{" "}
            <a
              href="mailto:siddhant.work76@gmail.com"
              className="text-blue-500 hover:underline"
            >
              siddhant.work76@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +91 8922915545
            </a>
            .
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Follow us for the latest updates and travel inspiration!
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://facebook.com/tournest"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com/tournest"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com/tournest"
              className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
