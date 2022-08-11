import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Categories from "./pages/Categories";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
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
