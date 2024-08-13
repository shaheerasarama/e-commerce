import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../Hooks/useApi";
let userContext = createContext(null);

export default function UserContext({ children }) {
  const [isLogin, setIsLogin] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  let [userCart, setUserCart] = useState(
    localStorage.getItem("userCart")
      ? JSON.parse(localStorage.getItem("userCart"))
      : []
  );
  // console.log(userCart.length)

  let navigate = useNavigate();

  useEffect(() => {
    const initializeUser = async () => {
      if (localStorage.getItem("userToken")) {
        setIsLogin(true);
        await getUserData();
      } else {
        setIsLogin(false);
      }
      setLoading(false);
    };
    initializeUser();
  }, [isLogin]);

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(userCart));
    console.log("userCart has changed");
  }, [userCart]);

  const getUserData = async () => {
    if (isLogin) {
      try {
        let response = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        if (error.response.data.message === "Token Expired!") {
          let response = await axios.post(
            "https://dummyjson.com/auth/refresh",
            {
              refreshToken: JSON.parse(
                localStorage.getItem("userRefreshToken")
              ),
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          localStorage.setItem(
            "userToken",
            JSON.stringify(response.data.token)
          );
          localStorage.setItem(
            "userRefreshToken",
            JSON.stringify(response.data.refreshToken)
          );
          await getUserData();
        }
      }
    }
  };

  const userLogin = () => {
    setIsLogin(true);
  };

  // const userCart = async () => {
  //   if (isLogin) {
  //     let id = localStorage.getItem("userId");
  //     let response = await axios.get(`https://dummyjson.com/carts/user/${id}`);
  //     console.log(response.data.carts);
  //   } else {
  //     return null;
  //   }
  // };

  const addToCart = (product, qty, productMinimumOrderQuantity) => {
    let duplicatedProduct = userCart.find(
      (prod) => prod.product.id === product.id
    );
    if (!duplicatedProduct) {
      setUserCart([...userCart, { product, qty: qty }]);
    } else {
      if (duplicatedProduct.qty + qty > productMinimumOrderQuantity) {
        console.log("you Can not add more in this order");
      } else {
        let updateProduct = userCart.map((prod) =>
          prod.product.id === product.id
            ? { ...prod, qty: prod.qty + qty }
            : prod
        );
        setUserCart(updateProduct);
      }
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = userCart.filter(
      (cartItem) => cartItem.product.id !== product.id
    );
    setUserCart(updatedCart);
  };

  const updateFromCart = (product, qty) => {
    let updatedProduct = userCart.findIndex(
      (cart) => cart.product.id === product.id
    );
    if (updatedProduct !== -1) {
      let updateProduct = userCart.map((prod) =>
        prod.product.id === product.id
          ? { ...prod, qty: prod.qty + (qty - prod.qty) }
          : prod
      );
      setUserCart(updateProduct);
    }
  };

  const userLogOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRefreshToken");
    setIsLogin(false);
    setUserInfo(null);
    navigate("/");
  };

  if (isLogin) {
    if (loading && userInfo !== null) {
      return <>Waiting...</>;
    }

    return (
      <userContext.Provider
        value={{
          isLogin,
          userLogin,
          setIsLogin,
          userLogOut,
          getUserData,
          userInfo,
          userCart,
          addToCart,
          removeFromCart,
          updateFromCart,
          setUserCart,
        }}
      >
        {children}
      </userContext.Provider>
    );
  } else {
    return (
      <userContext.Provider
        value={{
          isLogin,
          userLogin,
          setIsLogin,
          userLogOut,
          getUserData,
          userInfo,
          addToCart,
          userCart,
          setUserCart,
        }}
      >
        {children}
      </userContext.Provider>
    );
  }
}

export function useUserContext() {
  return useContext(userContext);
}
