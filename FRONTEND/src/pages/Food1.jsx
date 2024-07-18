import React from 'react'

const Food1 = () => {
  return (
    <div>
        <div>
      <div class="container mx-auto mt-8 px-4">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Food Item List</h1>

       
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <a href="/Payment"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Pizza Margherita</h2>
                <p class="text-gray-600 mb-4">Fresh mozzarella, basil, tomatoes, olive oil</p>
                <p class="text-gray-700 font-bold">Rs 150</p>
                <button class="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none">Add to Cart</button>
            </div></a>

            <a href="/Payment"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Chicken Tikka Masala</h2>
                <p class="text-gray-600 mb-4">Grilled chicken in creamy tomato sauce, spices</p>
                <p class="text-gray-700 font-bold">Rs 200</p>
                <button class="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none">Add to Cart</button>
            </div></a>

            
            <a href="/Payment"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Caesar Salad</h2>
                <p class="text-gray-600 mb-4">Romaine lettuce, croutons, Parmesan cheese, Caesar dressing</p>
                <p class="text-gray-700 font-bold">Rs 80</p>
            <button class="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none">Add to Cart</button>
            </div></a>
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default Food1
