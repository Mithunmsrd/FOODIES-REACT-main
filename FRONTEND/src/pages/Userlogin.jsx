import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";

const Userlogin = () => {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
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
//     <div>
//       <div class="bg-amber-300 flex items-center justify-center m-[100px]">
//     <div class="bg-slate-300 p-8 rounded shadow-lg max-w-md w-full">
//         <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
//         <div action="/login" method="POST"> 
//             <div class="mb-4">
//                 <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input type="email" id="email" name="Email" placeholder="Enter your email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//             </div>
//             <div class="mb-4">
//                 <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
//                 <input type="password" id="password" name="Password" placeholder="Enter your password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//             </div>
//             <a href="/home" type="submit" class="w-96 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600  focus:bg-indigo-600 ml-[150px]">Login</a>
//         </div>
//         <p class="mt-4 text-sm text-center text-gray-600">Don't have an account? <a href="/UserRegister" class="text-indigo-500 hover:underline">Register here</a></p>
//     </div>
// </div>
      //     </div>
       <div className="bg-amber-300 flex items-center justify-center m-[100px]">
      <div className="bg-slate-300 p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>
        <form onSubmit={loginSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button onClick={()=>loginSubmit}
              type="submit"
              className="w-[100px] bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 ml-[140px]"
            >
              Login
            </button>
            
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/UserRegister" className="text-purple-700 hover:underline">
             Register here
            </Link>
          </p>
        </form>
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
export {Userlogin as default, getUserType};
