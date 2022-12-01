import { axiosAPI } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toastifyAction } from "./toastifySlice";
import { setIsLoading } from "./loadingSlice";

const modulePrefix = "oauth";

const login = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const { data } = await axiosAPI.post(`${modulePrefix}/`, {
        email,
        password,
      });
      thunkAPI.dispatch(
        toastifyAction.setMessage({ message: "Welcome!", type: "success" })
      );
      return data;
    } catch (error) {
      var errorMsg = "";
      if (error.response?.data) {
        const { email, password, detail, message } = error.response.data;
        errorMsg = email || password || detail || message;
      } else errorMsg = error.message || error.msg || error.error || error;
      thunkAPI.dispatch(
        toastifyAction.setMessage({
          message: errorMsg.toString(),
          type: "error",
        })
      );
      return thunkAPI.rejectWithValue();
    }
  }
);

const refresh = createAsyncThunk(
  "refresh",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const { data } = await axiosAPI.post(`${modulePrefix}/refresh`, {
        refresh: refreshToken
      });
      return data;
    } catch (error) {
      var errorMsg = "";
      if (error.response?.data) {
        const { email, password, detail, message } = error.response.data;
        errorMsg = email || password || detail || message;
      } else errorMsg = error.message || error.msg || error.error || error;
      thunkAPI.dispatch(
        toastifyAction.setMessage({
          message: errorMsg.toString(),
          type: "error",
        })
      );
      return thunkAPI.rejectWithValue();
    }
  }
);

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const initialState = { accessToken, refreshToken, isAuth: !!accessToken };


export const authSlice = createSlice({
  name: modulePrefix,
  initialState,
  reducers: {
    loadAuth: (state, action) => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      state = { accessToken, refreshToken, isAuth: !!accessToken };
      return state;
    },
    logout: () => {
      localStorage.clear();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { access, refresh } = action.payload;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      state.accessToken = access;
      state.refreshToken = refresh;
      state.isAuth = true;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      const { access } = action.payload;
      localStorage.setItem("accessToken", access);
      state.accessToken = access;
    });
  },
});

export const userActions = authSlice.actions;

const { logout, loadAuth } = userActions;

export { login, logout, loadAuth, refresh };
