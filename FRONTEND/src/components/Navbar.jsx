import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="bg-gray-800 p-4">
        

          
        <div class="hidden md:block">
            <a href="/home" class="text-gray-300 hover:text-white px-4">Home</a>
            <a href="/Restaurant" class="text-gray-300 hover:text-white px-4">Restaurant</a>
            <a href="#" class="text-gray-300 hover:text-white px-4">Contact</a>
            <a href="/AdminLogin" class="text-gray-300 hover:text-white px-4">Admin</a>
        </div>


</nav>
    </div>
  )
}

export default Navbar

