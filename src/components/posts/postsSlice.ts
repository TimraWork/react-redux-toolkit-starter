import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { getPostsRequest } from "../../api";

const initialState = {
  data: [] as Array<Object> | [],
  isLoading: false as boolean,
  error: null as string | null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    request: (state) => {
      state.isLoading = true;
    },
    success: (state, action: any) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const { request, success } = postsSlice.actions;

export interface IPost {
  id: number;
  title: { rendered: string };
}
export interface IPostTransform {
  id: number;
  title: string;
}

const _transformPost = ({ id, title }: IPost): IPostTransform => {
  return {
    id: id,
    title: title["rendered"],
  };
};

export const getPostsThunk = (): AppThunk => async (dispatch) => {
  dispatch(request());
  const { data } = await getPostsRequest();
  dispatch(success(data.map(_transformPost)));
};

export const selectPosts = (state: RootState) => state.posts.data;
export const selectIsLoading = (state: RootState) => state.posts.isLoading;

export default postsSlice.reducer;
