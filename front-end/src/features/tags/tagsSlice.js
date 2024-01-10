import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPIs";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const Tags = await getTags();
  return Tags;
});

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action?.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isError = true;
        state.tags = [];
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default TagsSlice?.reducer;
