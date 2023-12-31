import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin pages/Dashboard";
import NotFound from "../pages/NotFound";
import SignUP from "../pages/SignUP";
import SignIN from "../pages/SignIN";
import Home from "../pages/Home";
import RoomOffers from "../pages/admin pages/RoomOffers";
import HomeUser from "../pages/user pages/UserHome";
import ReserveARoom from "../pages/user pages/ReserveARoom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/SignUP" element={<SignUP />}></Route>
          <Route exact path="/SignIN" element={<SignIN />}></Route>
          <Route exact path="/room-offers/:hotelmail" element={<RoomOffers />}></Route>
          <Route exact path="/dash/:hotelmail" element={<Dashboard />}></Route>
          <Route exact path="/user-Home/:email" element={<HomeUser />}></Route>
          <Route exact path="/reserve-a-room/:email" element={<ReserveARoom />}></Route>

          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
