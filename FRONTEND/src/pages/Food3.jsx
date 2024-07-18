import React from 'react'

const Food3 = () => {
  return (
    <div>
      <div class="container mx-auto mt-8 px-4">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Food Item List</h1>

       
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
        <a href="/Payment"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Paella</h2>
                <p class="text-gray-600 mb-4"> A Spanish rice dish originally from Valencia, typically made with saffron-infused rice, seafood (like shrimp and mussels), chicken, and vegetables, cooked in a large shallow pan</p>
                <p class="text-gray-700 font-bold">Rs 150</p>
                <button class="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none">Add to Cart</button>
            </div></a>

            <a href="/Payment"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Chicken Tikka Masala</h2>
                <p class="text-gray-600 mb-4">A popular Indian dish where marinated chicken is grilled and then served in a creamy tomato sauce seasoned with various spices like cumin, coriander, and garam masala</p>
                <p class="text-gray-700 font-bold">Rs 200</p>
                <button class="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none">Add to Cart</button>
            </div></a>

            
            <a href="/Payment"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Beef Wellington</h2>
                <p class="text-gray-600 mb-4">A British dish consisting of a fillet steak coated with pâté and duxelles (a finely chopped mixture of mushrooms, shallots, and herbs), which is then wrapped in puff pastry and baked</p>
                <p class="text-gray-700 font-bold">Rs 80</p>
                <button class="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none">Add to Cart</button> 

            </div></a>

           
        </div>
    </div>
    </div>
  )
}

export default Food3
