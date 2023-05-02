//rsf

//페이지 불러오기
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Feat2 from "./pages/Feat2.jsx";
import Feat1 from "./pages/Feat1.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/feat1">기능1</Link>
            </li>
            <li>
              <Link to="/feat2">기능2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/feat1" element={<Feat1 />} />
          <Route path="/feat2" element={<Feat2 />} />\
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
