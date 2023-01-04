import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
{
  /*
  Async işlemlerin kontolünü sağlamak için createAsyncThunk kullanılır.
  axios ile api istekleri yapılır.
  */
}
const getAll = createAsyncThunk(
  'news/all',
  async (page: number) => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&page=${page}&apiKey=676f017549224f488970f1835f9db971`);
    return res.data;
  },
);
const getCategory = createAsyncThunk(
  'news/category',
  async ({category, page}: any) => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&page=${page}&apiKey=676f017549224f488970f1835f9db971`);
    return res.data;
  },
);
const searchNews = createAsyncThunk(
  'news/search',
  async ({q, page}: any) => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&q=${q}&page=${page}&apiKey=676f017549224f488970f1835f9db971`);
    return res.data;
  },
);

export { getAll, getCategory, searchNews };
