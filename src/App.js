import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./Theme/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Categories from "./Pages/Categories/Categories";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import SignInSide from "./Pages/Login/Login";
import { Home } from "@mui/icons-material";
import UserContext from "./Contexts/UserContext";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserContext>
          <Header />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Categories />} path="/:categoryName"></Route>
            {/* <Route element={<>not Found!</>} path="/*"></Route> */}
            <Route element={<Product />} path="/:categoryName/:id"></Route>
            <Route element={<Products />} path="/products"></Route>
            <Route element={<SignInSide />} path="/login"></Route>
            <Route element={<Cart />} path="/myCart"></Route> 
          </Routes>
          <Footer />
        </UserContext>
      </div>
    </ThemeProvider>
  );
}

export default App;
