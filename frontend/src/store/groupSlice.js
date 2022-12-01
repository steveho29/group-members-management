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

const getJoinedGroups = createAsyncThunk(
  "getJoinedGroups",
  async ({ user_id }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const { data } = await axiosAPI.get(`${modulePrefix}/?user=${user_id}`);
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
      thunkAPI.dispatch(
        toastifyAction.setMessage({ message: "Group Created", type: "success" })
      );
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
  async ({groupId, data}, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      await axiosAPI.put(`${modulePrefix}/${groupId}/`, data);
      thunkAPI.dispatch(
        toastifyAction.setMessage({ message: "Group Updated", type: "success" })
      );
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
  async ({ groupId, email }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const { data } = await axiosAPI.post(`${modulePrefix}/${groupId}/invite/`, { email });
      thunkAPI.dispatch(
        toastifyAction.setMessage({ message: data.msg, type: "success" })
      );
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
  async ({ groupId, id }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      await axiosAPI.delete(`${modulePrefix}/${groupId}/kick/?user=${id}`);
      thunkAPI.dispatch(
        toastifyAction.setMessage({ message: 'Member Kicked', type: "success" })
      );
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

const initialState = { groups: [], joinedGroups: [] };


export const groupSlice = createSlice({
  name: modulePrefix,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
    builder.addCase(getJoinedGroups.fulfilled, (state, action) => {
      state.joinedGroups = action.payload;
    });
  },
});

export const userActions = groupSlice.actions;

export {
  getAllGroups,
  getJoinedGroups,
  inviteMember,
  kickMember,
  createGroup,
  deleteGroup,
  updateGroup
};
