import React, { useContext } from 'react';
import { RestaurantContext } from './RestaurantContext';

const Restaurant = () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div className="bg-amber-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <a key={index} href={`/${restaurant.name.replace(/\s+/g, '')}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h2>
              <p className="text-gray-600 mb-4">{restaurant.location}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
