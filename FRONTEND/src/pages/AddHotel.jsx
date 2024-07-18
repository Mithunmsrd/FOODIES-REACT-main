import React from 'react'

const AddHotel = () => {
  return (
    <div>
      <body class="bg-amber-300">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Restaurants List</h1>
        
       
        <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-lg font-bold">Restaurant A</h2>
                    <p class="text-gray-600">Location: City A</p>
                    <p class="text-gray-600">Rating: 4.5</p>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
                    <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                </div>
            </div>
        
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-lg font-bold">Restaurant B</h2>
                    <p class="text-gray-600">Location: City B</p>
                    <p class="text-gray-600">Rating: 4.0</p>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
                    <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                </div>
            </div>
           
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-lg font-bold">Restaurant C</h2>
                    <p class="text-gray-600">Location: City C</p>
                    <p class="text-gray-600">Rating: 4.2</p>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
                    <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                </div>
            </div>
           
            <div class="flex justify-end mt-4">
                <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Add New Restaurant</button>
            </div>
        </div>
      
    </div>
</body>
    </div>
  )
}

export default AddHotel
