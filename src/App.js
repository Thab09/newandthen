import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Container } from "./styles/Container.styled";
import { GlobalStyles } from "./styles/Global";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Categories from "./pages/Categories";
import SelectedCategory from "./pages/SelectedCategory";
import NavigationBar from "./components/NavigationBar";
import LogoBar from "./components/LogoBar";

const theme = {
  primary: "ffffff",
  secondary: "000000",
  background: "000000",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <BrowserRouter>
          <LogoBar />
          <NavigationBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/categories/:category"
                element={<SelectedCategory />}
              />
            </Routes>
          </main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
