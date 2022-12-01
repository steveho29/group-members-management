import { axiosAPI } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./loadingSlice";
import { toastifyAction } from "./toastifySlice";

import jwt_decode from "jwt-decode";

const modulePrefix = "user";


const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken)
      const decoded = jwt_decode(accessToken);
      console.log(decoded)
      const { data } = await axiosAPI.get(`${modulePrefix}/${decoded.id}`);
      console.log(data)
      return data;
    } catch (error) {
      var errorMsg = "";
      if (error.response?.data) {
        const { detail, message } = error.response.data;
        errorMsg = detail || message;
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


const getUserLst = createAsyncThunk(
  "getUserLst",
  async ({ page: Page = 1 }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const { data } = await axiosAPI.get(`user/?page=${Page}`);
      return data;
    } catch (error) {
      var errorMsg = "";
      if (error.response?.data) {
        const { detail, message } = error.response.data;
        errorMsg = detail || message;
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

const addUser = createAsyncThunk(
  "addUser",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      data.is_admin = false;
      data.level = parseInt(data.level);
      const result = await axiosAPI.post(`user/`, data);

      if (data.position === 'Manager' && data.level === 1) {
        await axiosAPI.put(`department/${data.department}/`, { manager: result.data._id });
      }

      if (data.position === 'Manager' && data.level === 2) {
        await axiosAPI.put(`department/${data.department}/`, { director: result.data._id });
      }
      return "";
    } catch (error) {
      var errorMsg = "";
      if (error.response?.data) {
        const { detail, message } = error.response.data;
        errorMsg = detail || message;
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

const updateUser = createAsyncThunk(
  "updateUser",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      await axiosAPI.put(`user/${data.id}/`, data);
      return "";
    } catch (error) {
      var errorMsg = "";
      if (error.response?.data) {
        const { detail, message } = error.response.data;
        errorMsg = detail || message;
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

const initialState = { isAdmin: false, userLst: {}, user: {}};


export const userSlice = createSlice({
  name: modulePrefix,
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getUserLst.fulfilled, (state, action) => {
      const userLst = action.payload;
      state.userLst = userLst;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      const user = action.payload;
      state.user = user;
    });
  },
});

export const userActions = userSlice.actions;

export { getUserLst, addUser, updateUser, getUserInfo, };
