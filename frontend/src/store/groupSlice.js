import { axiosAPI } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./loadingSlice";
import { toastifyAction } from "./toastifySlice";

import jwt_decode from "jwt-decode";

const modulePrefix = "group";

const getAllGroups = createAsyncThunk(
  "getAllGroups",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const { data } = await axiosAPI.get(`${modulePrefix}/`);
      return data.results;
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

const deleteGroup = createAsyncThunk(
  "deleteProject",
  async ({ id }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      await axiosAPI.delete(`${modulePrefix}/${id}/`);
      return '';
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

const createGroup = createAsyncThunk(
  "createGroup",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const formData = new FormData()
      Object.keys(data).map(key => formData.append(key, data[key]))
      await axiosAPI.post(`${modulePrefix}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return '';
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

const updateGroup = createAsyncThunk(
  "updateProject",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      await axiosAPI.put(`${modulePrefix}/${data.id}/`, data);
      return '';
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

const inviteMember = createAsyncThunk(
  "inviteMember",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const groupId = data.id;
      delete data.id;
      await axiosAPI.post(`${modulePrefix}/${groupId}/invite/`, data);
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

const kickMember = createAsyncThunk(
  "kickMember",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      await axiosAPI.delete(`${modulePrefix}/${data.projectId}/contributors/?id_emp=${data.id_emp}`);
      // await axiosAPI_8102.delete(`${modulePrefix}/${data.projectId}/contributors/?id_emp=${data.id_emp}`);
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

const initialState = { groups: [] };


export const groupSlice = createSlice({
  name: modulePrefix,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
  },
});

export const userActions = groupSlice.actions;

export {
  getAllGroups,
  inviteMember,
  kickMember,
  createGroup,
  deleteGroup,
  updateGroup
};
