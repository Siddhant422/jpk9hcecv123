import React, { useState, useEffect, useContext } from "react";
import TripCard from "../tripCard/tripCard";
import tripsData from "../tripData";
import classes from "./tripPage.module.css";
import axios from "axios";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";

const TripPage = () => {
    const navigate = useNavigate();
    const {user,setUser} = useContext(AuthContext);

  const [trips, setTrips] = useState(tripsData);
  const [filters, setFilters] = useState({
    budget: "",
    destination: "",
    duration: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const filteredTrips = tripsData.filter((trip) => {
      return (
        (!filters.budget || trip.budget <= filters.budget) &&
        (!filters.destination ||
          trip.destination
            .toLowerCase()
            .includes(filters.destination.toLowerCase())) &&
        (!filters.duration || trip.duration <= filters.duration)
      );
    });
    setTrips(filteredTrips);
  }, [filters]);

  return (
    <div >
        <Header />
    <div className="container mx-auto p-4 w-[90%] ">
      <h1
        className="text-4xl font-semibold text-center mb-[4vw] mt-[2vw] text-blue-600 lg:h-[3vw]"
        style={{ fontFamily: "cursive" }}
      >
        Explore Exciting Itineraries
      </h1>

      <div className="w-[105%] ml-[-2.5%] px-[3vw] py-[3vw] lg:p-0 grid grid-cols-1 lg:h-[6vw] items-center rounded-lg lg:grid-cols-3 gap-4 gap-x-[4vw] mb-[5vw] bg-gray-100">
        <div className="lg:ml-[1.8vw]">
          <label className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            value={filters.destination}
            onChange={handleFilterChange}
            placeholder="Enter destination"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Budget
          </label>
          <input
            type="number"
            name="budget"
            value={filters.budget}
            onChange={handleFilterChange}
            placeholder="Enter max budget"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="lg:mr-[1.8vw]">
          <label className="block text-sm font-medium text-gray-700">
            Max Duration (days)
          </label>
          <input
            type="number"
            name="duration"
            value={filters.duration}
            onChange={handleFilterChange}
            placeholder="Enter max duration"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 mb-[2vw] md:grid-cols-2 lg:grid-cols-3 gap-y-[8vw] lg:gap-y-[4vw] gap-x-[5vw]">
        {trips.map((trip,index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>

      {trips.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          No trips found matching your criteria.
        </div>
      )}
    </div>
    </div>
  );
};

export default TripPage;
