import React, { createContext, useState } from 'react';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([
    { name: 'Restaurant A', location: 'City A', rating: 4.5 },
    { name: 'Restaurant B', location: 'City B', rating: 4.0 },
    { name: 'Restaurant C', location: 'City C', rating: 4.2 },
  ]);

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  const deleteRestaurant = (index) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants.splice(index, 1);
    setRestaurants(updatedRestaurants);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant, deleteRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
