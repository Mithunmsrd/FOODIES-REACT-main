/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";

const AdminRegister = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    // return;
    console.log(res);
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/signup");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;

    if(password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password is too short. It should be atleast 6 charecters'
        return
    }
    
    if(password!= confirmpassword) {
        document.getElementById('confirmPasswordError').textContent = "Password do not match";
        return
    }
    const userDetails = {
      userName,
      password,
      email
    };

    signupSubmit(userDetails);
  };
  return (
    <div>
      <div class="bg-amber-300 flex items-center justify-center h-screen">
    <div class="bg-slate-300  p-8 rounded shadow-lg max-w-md w-full">
        <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
        <form action="#" method="POST">
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
                <input type="password" id="password" name="Password" placeholder="Enter your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-4">
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="password_confirmation" name="Password_confirmation" placeholder="Confirm your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <a href="/AdminLogin" type="submit" class="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 ml-[150px]">Register</a>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">Already have an account? <a href="/AdminLogin" class="text-indigo-500 hover:underline">Login here</a></p>
    </div>
    </div>
    </div>
  )
}

export default AdminRegister
