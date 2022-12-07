import {createSlice} from '@reduxjs/toolkit';
import {getAll, getCategory, searchNews} from 'api';

export const news = createSlice({
  name: 'news',
  initialState: {
    isLoading: {},
    allNews: [] as any[],
    categoryNews: [] as any[],
    allNewsLength: 0,
    categoryNewsLength: 0,
    error: {},
  },
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getAll.pending, state => {
      state.isLoading = {...state.isLoading, getAll: true};
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getAll: false};
      state.allNews = action.payload?.articles;
      state.allNewsLength = action.payload?.totalResults;
    });
    builder.addCase(getAll.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getAll: false};
      state.error = {...state.error, getAll: action.error || action.payload};
    });
    builder.addCase(getCategory.pending, state => {
      state.isLoading = {...state.isLoading, getCategory: true};
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getCategory: false};
      state.categoryNews = action.payload?.articles;
      state.categoryNewsLength = action.payload?.totalResults;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getCategory: false};
      state.error = {...state.error, getCategory: action.error || action.payload};
    });
    builder.addCase(searchNews.pending, state => {
      state.isLoading = {...state.isLoading, searchNews: true};
    });
    builder.addCase(searchNews.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, searchNews: false};
      state.categoryNews = action.payload?.articles;
      state.categoryNewsLength = action.payload?.totalResults;
    });
    builder.addCase(searchNews.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, searchNews: false};
      state.error = {...state.error, searchNews: action.error || action.payload};
    });
  },
});
export default news.reducer;
