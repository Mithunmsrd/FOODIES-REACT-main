import React from 'react'

const Userlogin = () => {
  return (
    <div>
      <div class="bg-amber-300 flex items-center justify-center m-[100px]">
    <div class="bg-slate-300 p-8 rounded shadow-lg max-w-md w-full">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <div action="/user login" method="POST"> 
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="name" placeholder="Enter your email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <a href="/home" type="submit" class="w-96 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600  focus:bg-indigo-600 ml-[150px]">Login</a>
        </div>
        <p class="mt-4 text-sm text-center text-gray-600">Don't have an account? <a href="/UserRegister" class="text-indigo-500 hover:underline">Register here</a></p>
    </div>
</div>
    </div>
  )
}

export default Userlogin
