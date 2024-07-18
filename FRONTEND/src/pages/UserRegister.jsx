import React from 'react'

const UserRegister = () => {
  return (
    <div>
      <body class="bg-amber-300 flex items-center justify-center ">
    <div class="bg-slate-300  p-8 rounded shadow-lg max-w-md w-full m-[40px]">
        <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
        <form action="/user register" method="POST">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="Name" placeholder="Enter your full name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="Email" placeholder="Enter your email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="Password" placeholder="Enter your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-indigo-500 sm:text-sm"/>
            </div>
            <a href="/" type="submit"  class="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 ml-[150px]">Register</a>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">Already have an account? <a href="/" class="text-indigo-500 hover:underline">Login here</a></p>
    </div>

    </body>
    </div>
  )
}

export default UserRegister
