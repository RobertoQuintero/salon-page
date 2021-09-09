import React from "react";
import StoreProvider from "./context/StoreProvider";

import AppRouter from "./routers/AppRouter";

const BeautyApp = () => {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
};

export default BeautyApp;
