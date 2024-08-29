import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripCard = ({ trip }) => {
    const navigate = useNavigate();  return (
    <div className=" rounded-lg overflow-hidden shadow-lg bg-white flex flex-col relative hover:scale-[1.05] duration-[500ms]">
      <img
        className="w-full h-[30vh] lg:h-[15vw] object-cover"
        src={trip?.image}
        alt={trip.destination}
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{trip.destination}</div>
        <p className="text-gray-700 text-base mb-2">
          Duration: {trip.duration} days
        </p>
        <p className="text-gray-700 text-base mb-2">
          Budget: ${trip.budget}
        </p>
        <p className="text-gray-700 text-base mb-[7vw] lg:mb-[2vw]">
          {trip.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 mb-4 ml-4" onClick={() => {navigate(`/trips/${trip?.id}`)}}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default TripCard;
