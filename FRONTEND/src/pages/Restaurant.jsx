import React from 'react'

const Restaurant = () => {
  return (
    <div>
        <div class="bg-amber-300">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <a href="/Food1/o-cafe"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">O Café</h2>
                <p class="text-gray-600 mb-4">NH-Bypass, Venkalapattom, Anayara, Thiruvananthapuram</p>
               
            </div></a>

           
            <a href="/Food2"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Olappura Restaurant</h2>
                <p class="text-gray-600 mb-4">Cyber Square TC 2/2403(4) and 2/24036 Near Technopark Phase 3, Attinkuzhy Rd, Kazhakkoottam Kerala 695582, India - Kazhakkoottam</p>
               
            </div></a>

            <a href="/Food3"><div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-2">Cafe F5</h2>
                <p class="text-gray-600 mb-4">Kanyakumari - Panvel Highway, Kulathoor - Kazhakkoottam</p>
               
            </div></a>
            </div>
        </div>
    </div>
  )
}

export default Restaurant
