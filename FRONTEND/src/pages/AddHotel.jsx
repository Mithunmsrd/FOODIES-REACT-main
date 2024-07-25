import React, { useState } from 'react';

const AddHotel = () => {
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle the add form

  const handleAddRestaurant = () => {
    setShowAddForm(true); // Show the add form when button is clicked
  };

  return (
    <div>
      <div className="bg-amber-300">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Restaurants List</h1>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">

            {/* Restaurant List Items */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold">Restaurant A</h2>
                <p className="text-gray-600">Location: City A</p>
                <p className="text-gray-600">Rating: 4.5</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold">Restaurant B</h2>
                <p className="text-gray-600">Location: City B</p>
                <p className="text-gray-600">Rating: 4.0</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold">Restaurant C</h2>
                <p className="text-gray-600">Location: City C</p>
                <p className="text-gray-600">Rating: 4.2</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
              </div>
            </div>

            {/* Add New Restaurant Button */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                onClick={handleAddRestaurant} // Handle click to show add form
              >
                Add New Restaurant
              </button>
            </div>

            {/* Add Restaurant Form */}
            {showAddForm && (
              <form className="mt-4">
                <h2 className="text-xl font-bold mb-2">Add New Restaurant</h2>
                <div className="mb-4">
                  <label htmlFor="restaurantName" className="block text-gray-700 font-bold mb-2">Restaurant Name:</label>
                  <input type="text" id="restaurantName" name="restaurantName" className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
                  <input type="text" id="location" name="location" className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating:</label>
                  <input type="text" id="rating" name="rating" className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Restaurant</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;

