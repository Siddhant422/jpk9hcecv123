import React, { useContext, useEffect, useState } from 'react';
import tripsData from '../tripData';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/userContext';
import Header from '../header/header';

const TripDetailPage = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    useEffect(() => {
        window.scrollTo(0,0)
    },[])   
    const params = useParams();

    const trip =  tripsData[params?.id-1]
      
      
      
  return (
    <div >
        <Header />
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">

      <img
        className="w-full h-64 object-cover rounded-t-lg"
        src={trip.image}
        alt={trip.destination}
      />
      
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{trip.destination}</h1>
        <p className="text-gray-700 text-lg mb-4">{trip.description}</p>
        <div className="mb-6">
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Duration:</span> {trip.duration} days
          </p>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Budget:</span> ${trip.budget}
          </p>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Best Time to Visit:</span> {trip.bestTimeToVisit}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {trip.gallery.map((image, index) => (
            <img key={index} className="w-full h-48 object-cover rounded-lg" src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg"
            src={trip.mapUrl}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          {trip.itinerary.map((day, index) => (
            <li key={index} className="text-gray-700 text-base">
              <span className="font-semibold">Day {day.day}:</span> {day.activities.join(', ')}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          {trip.travelTips.map((tip, index) => (
            <li key={index} className="text-gray-700 text-base">{tip}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4 mb-6">
          {trip.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700"><span className="font-semibold">{review.name}</span> says:</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg" onClick={() => {window.open("https://web.whatsapp.com/send?phone=+918922915545&text=Great Work Siddhant")}}>
            Book Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TripDetailPage;
