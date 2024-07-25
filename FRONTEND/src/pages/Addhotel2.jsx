import React, { useContext, useState } from 'react';
import { RestaurantContext } from './RestaurantContext';

const AddHotel = () => {
  const { restaurants, addRestaurant } = useContext(RestaurantContext);
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    location: '',
    rating: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant({
      ...newRestaurant,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, location, rating } = newRestaurant;
    if (name && location && rating) {
      addRestaurant({ name, location, rating: parseFloat(rating) });
      setNewRestaurant({ name: '', location: '', rating: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="bg-amber-300">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Restaurants List</h1>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Restaurant List Items */}
          {restaurants.map((restaurant, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold">{restaurant.name}</h2>
                <p className="text-gray-600">Location: {restaurant.location}</p>
                <p className="text-gray-600">Rating: {restaurant.rating}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                  onClick={() => deleteRestaurant(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Add New Restaurant Form */}
          <form className="mt-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-2">Add New Restaurant</h2>
            <div className="mb-4">
              <label htmlFor="restaurantName" className="block text-gray-700 font-bold mb-2">
                Restaurant Name:
              </label>
              <input
                type="text"
                id="restaurantName"
                name="name"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newRestaurant.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newRestaurant.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                Rating:
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newRestaurant.rating}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Add Restaurant
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;

