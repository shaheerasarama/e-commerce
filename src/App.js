import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./Theme/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Categories from "./Pages/Categories/Categories";
import { Route, Routes } from "react-router-dom";
import HeroImg from "./components/HeroImg/HeroImg";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HeroImg />
        <Routes>
          <Route element={<Categories />} path="/category/:categoryName"></Route>
          {/* <Route element={<>not Found!</>} path="/*"></Route> */}
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
