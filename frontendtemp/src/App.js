import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";

import AddExperience from "./components/AddExperience"
import Experiences from "./components/Experience/Experiences"

import AddCity from "./components/AddCity";
import Cities from "./components/City/Cities.js";
import CityDetail from "./components/City/CityDetail.js";
import Bookings from "./components/Booking/Bookings.js";
import BookingDetail from "./components/Booking/BookingDetail.js";
import AddBooking from "./components/AddBooking"
import Users from "./components/User/Users.js";
import UserDetail from "./components/User/UserDetail.js";
import AddUser from "./components/AddUser"



function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/AddCity" element={<AddCity />} exact />
          <Route path="/cities" element={<Cities />} exact />
          {/* <Route path="/cities/:id" element={<CityDetail />} exact /> */}


          <Route path="AddExperience" element={<AddExperience/>}exact/>
          <Route path="/experience" element={<Experiences />} exact />

          {/* <Route path="AddBooking" element={<AddBooking/>}exact/>
          <Route path="/bookings" element={<Bookings />} exact />
          {/* <Route path="/bookings/:id" element={<BookingDetail />} exact /> */}

          {/* <Route path="AddUser" element={<AddUser/>}exact/>
          <Route path="/users" element={<Users />} exact /> */}
          {/* <Route path="/users/:id" element={<UserDetail />} exact /> */} 
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;