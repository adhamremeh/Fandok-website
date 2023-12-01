import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin pages/Dashboard";
import NotFound from "../pages/NotFound";
import SignUP from "../pages/SignUP";
import SignIN from "../pages/SignIN";
import Home from "../pages/Home";
import RoomOffers from "../pages/admin pages/RoomOffers";
import HomeUser from "../pages/user pages/UserHome";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/SignUP" element={<SignUP />}></Route>
          <Route exact path="/SignIN" element={<SignIN />}></Route>
          <Route exact path="/room-offers/:hotelname" element={<RoomOffers />}></Route>
          <Route exact path="/dash/:hotelname" element={<Dashboard />}></Route>
          <Route exact path="/user-Home/:email" element={<HomeUser />}></Route>

          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
