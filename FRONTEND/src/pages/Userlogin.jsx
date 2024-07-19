import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Userlogin = () => {

      const [Email, setEmail] = useState("");
      const [Password, setPassword] = useState("");
      const navigate = useNavigate();
  
      const loginSubmit = async (e) => {
          e.preventDefault();
          const loginDetails = {
              email,
              password,
          };
  
          const res = await fetch("/api/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(loginDetails),
          });
          console.log(res, "login res from /login");
          if (res.ok) {
              toast.success(`Logged in Sucessfully`);
              return navigate("/home");
  
          } else {
              toast.error(`Please check your credentials`);
              return navigate("/");
          }
        }
  return (
    <div>
      <div class="bg-amber-300 flex items-center justify-center m-[100px]">
    <div class="bg-slate-300 p-8 rounded shadow-lg max-w-md w-full">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <div action="/user login" method="POST"> 
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="Email" placeholder="Enter your email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="Password" placeholder="Enter your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <a href="/home" type="submit" class="w-96 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600  focus:bg-indigo-600 ml-[150px]">Login</a>
        </div>
        <p class="mt-4 text-sm text-center text-gray-600">Don't have an account? <a href="/UserRegister" class="text-indigo-500 hover:underline">Register here</a></p>
    </div>
</div>
    </div>
  )
}

const getUserType = () => {
  const authToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("Authtoken"))
    ?.split("=")[1];
  console.log("documemnt.cookie vslue", authToken);

  const decoded = jwtDecode(authToken);
  console.log("decoded", decoded);
return decoded
};

// eslint-disable-next-line react-refresh/only-export-components
export {LoginPage as default, getUserType};
