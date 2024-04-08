"use client";

import { StoreContext } from "@/context";
import { useState } from "react";

const StoreProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <StoreContext.Provider value={{ cartData, setCartData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
