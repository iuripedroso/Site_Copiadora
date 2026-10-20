import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Location from "./pages/Location";

export default function App(){
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/localizacao" element={<Location />} />
      </Routes>
    </main>
  );
} 