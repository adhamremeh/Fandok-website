import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin pages/dashboard";
import NotFound from "../pages/NotFound";
import SignUP from "../pages/SignUP";
import SignIN from "../pages/SignIN";
import Home from "../pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/SignUP" element={<SignUP />}></Route>
          <Route exact path="/SignIN" element={<SignIN />}></Route>
          <Route exact path="/dash/:hotelname/:password" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
