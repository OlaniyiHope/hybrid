import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import Property from "./components/property/Property";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/about" element={< About/>}/>
      <Route path="/info" element={< Help/>}/>
      <Route path="/property" element={< Property/>}/>
      <Route path="/contact" element={< Contact/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
