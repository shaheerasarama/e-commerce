import React from "react";
import CartProductListTable from "./CartProductListTable/CartProductListTable";
import OrderInfo from "./OrderInfo/OrderInfo";

export default function Cart() {
  return (
    <>
      <CartProductListTable />
      {/* add confirmation for the order (dialog) */}
      <OrderInfo />
    </>
  );
}
