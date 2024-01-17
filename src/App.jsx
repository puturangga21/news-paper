import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Newspage from "./pages/Newspage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="terbaru" element={<Newspage />} />
      </Routes>
    </BrowserRouter>
  );
}
