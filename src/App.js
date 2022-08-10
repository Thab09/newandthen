import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
