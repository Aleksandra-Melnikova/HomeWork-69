import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API, IOneFilmFromApi } from '../../types';


export const onSearch = createAsyncThunk<
  [API],
   string
>("serialsName/onSubmit", async (_arg) => {
  if (_arg) {
    const res = await axios(`http://api.tvmaze.com/search/shows?q=${_arg}`);
  return res.data;
  }
});

export const getInfoOneFilm = createAsyncThunk<
  IOneFilmFromApi ,
  number
>("serialsName/getInfoOneFilm", async (_arg) => {
  if (_arg) {
    const res = await axios(`http://api.tvmaze.com/shows/${_arg}`);
    return res.data;
  }
});


