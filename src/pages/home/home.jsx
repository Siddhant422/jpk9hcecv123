import React from 'react';
import TripCard from './../tripCard/tripCard'; 
import Header from '../header/header';
import tripsData from '../tripData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  const popularTrips = [
    tripsData[0],tripsData[1],tripsData[2]
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
        <Header />

      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to TourNest</h1>
        <p className="text-lg mb-6">Discover your next adventure with our curated travel experiences.</p>
        <button onClick={() => {navigate('/trips')}} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100">
          Explore Now
        </button>
      </header>
      
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Curated Experiences</h3>
              <p className="text-gray-700">We handpick the best travel experiences to ensure you have a memorable trip.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Guides</h3>
              <p className="text-gray-700">Our experienced guides provide in-depth knowledge and insights about each destination.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-700">We're here for you around the clock to help with any issues or questions you might have.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-[4vw]">
          <h2 className="text-3xl font-semibold text-center mb-8">Popular Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-[3vw]">
            {popularTrips.map(trip => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-blue-500 text-white text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Adventure?</h2>
        <p className="text-lg mb-6">Contact us today to plan your next trip with TourNest.</p>
        <button onClick={() => {navigate('/contact')}} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
