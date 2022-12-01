import React, { useEffect } from "react";
import { RouterComponent } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { Backdrop } from "@mui/material";
import { loadAuth } from "./store/authSlice";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAuth());
  }, [])
  return (
    <div>
      <RouterComponent />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <TailSpin color="#fff" />
      </Backdrop>
      <ToastContainer />
    </div>
  );
}

export default App;
