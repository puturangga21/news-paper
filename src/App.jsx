import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Newspage from "./pages/Newspage";
import NotFound from "./pages/NotFound";
import { SkeletonTheme } from "react-loading-skeleton";

export default function App() {
  return (
    <SkeletonTheme>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path=":category" element={<Newspage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}
