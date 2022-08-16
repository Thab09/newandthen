import { useState } from "react";
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
import Footer from "./components/Footer";

const LightTheme = {
  primary: "#000000",
  secondary: "#bababa",
  paragraph: "#5a5a5a",
  card: "#ffffff",
  background: "#ffffff",
};

const DarkTheme = {
  primary: "#ffffff",
  secondary: "#b2b2b2",
  paragraph: "#dbdbdb",
  card: "#121111",
  background: "#101010",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Container>
        <BrowserRouter>
          <LogoBar theme={theme} setTheme={setTheme} />
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
          <Footer />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
