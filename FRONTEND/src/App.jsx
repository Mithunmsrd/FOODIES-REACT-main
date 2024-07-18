// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from "react-router-dom";
import Home from './components/Home'
import Userlogin from './pages/Userlogin';
import UserRegister from './pages/UserRegister';
import Restaurant from "./pages/Restaurant";
import Food1 from "./pages/Food1";
import Food2 from "./pages/Food2";
import Food3 from "./pages/Food3";
import Payment from "./pages/Payment";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AddHotel from "./pages/AddHotel";
import Mainlayout from "./layout/Mainlayout";
import Authlayout from "./layout/Authlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Authlayout/>}>
      <Route index element= {<Userlogin/>}/>
      <Route path="/UserRegister" element= {<UserRegister/>}/>
      </Route>
      
      <Route path="/" element= {<Mainlayout/>}>
      <Route path="/home" element= {<Home/>} />
      <Route path="/AdminLogin" element= {<AdminLogin/>}/>
      <Route path="/AdminRegister" element= {<AdminRegister/>}/>
      <Route path="/Restaurant" element= {<Restaurant/>}/>
      <Route path="/Food1" element= {<Food1/>}/>
      <Route path="/Food2" element= {<Food2/>}/>
      <Route path="/Food3" element= {<Food3/>}/>
      <Route path="/Payment" element= {<Payment/>}/>
      <Route path="/AddHotel" element= {<AddHotel/>}/>
      </Route>
      </>
    )
  )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
