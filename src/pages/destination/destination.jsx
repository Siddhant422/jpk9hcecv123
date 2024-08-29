import React from 'react';
import TripCard from './../tripCard/tripCard'; 
import tripsData from '../tripData';
import Header from '../header/header';

const destinations = [
  {
    id: 1,
    name: "Paris",
    description: "The city of love, known for its romantic atmosphere, iconic landmarks, and rich history.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    image: tripsData[0]?.image,
    trips:[tripsData[0]]
  },
  {
    id: 1,
    name: "Tokyo, Japan",
    description: "Explore the bustling streets of Tokyo, where tradition meets modernity. Visit ancient temples, shop in world-renowned districts, and experience the unique culture of Japan.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    image: tripsData[1]?.image,
    trips:[tripsData[1]]
  }

];

const DestinationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Header />

      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-extrabold mb-4">Explore Our Destinations</h1>
        <p className="text-lg mb-6">Discover the most exciting and beautiful places around the world.</p>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:w-[65%]">
          {destinations.map((destination) => (
            <div key={destination.id} className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold mb-4">{destination.name}</h2>
                <p className="text-gray-700 mb-4">{destination.description}</p>
                <h3 className="text-xl font-semibold mb-2">Highlights</h3>
                <ul className="list-disc list-inside mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600">{highlight}</li>
                  ))}
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
