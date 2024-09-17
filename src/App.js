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
import UserContext from "./Contexts/UserContext";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/Home/HomePage";
import ProtectedRoutes from "./utils/ProtectedRoutes/ProtectedRoutes";
import LoginRoutes from "./utils/LoginRoutes/LoginRoutes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserContext>
          <Header />
          <Routes>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<Categories />} path="/:categoryName"></Route>
            {/* <Route element={<>not Found!</>} path="/*"></Route> */}
            <Route element={<Product />} path="/:categoryName/:id"></Route>
            <Route element={<Products />} path="/products"></Route>
            <Route element={<LoginRoutes />}>
              <Route element={<SignInSide />} path="/login"></Route>
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route element={<Cart />} path="/myCart"></Route>
            </Route>
          </Routes>
          <Footer />
        </UserContext>
      </div>
    </ThemeProvider>
  );
}

export default App;
