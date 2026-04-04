import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Contact from "./Contact";


function App() {
 
  return (
    <div >      
         
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
         </Routes>
         </BrowserRouter>
       
    </div>
  );
}

export default App;
