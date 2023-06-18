import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import Square from "./pages/Square";
import Plate from "./pages/Plate";
import Redpoint from "./pages/Redpoint";
import Dhabi from "./pages/Dhabi";
import Peabody from "./pages/Peabody";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/square" element={<Square />} />
        <Route path="/plate" element={<Plate />} />
        <Route path="/redpoint" element={<Redpoint />} />
        <Route path="/abu-dhabi" element={<Dhabi />} />
        <Route path="/peabody" element={<Peabody />} />
      </Routes>
    </div>
  );
}
