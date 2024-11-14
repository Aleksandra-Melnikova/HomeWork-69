import { createSlice } from "@reduxjs/toolkit";
import { getInfoOneFilm, onSearch } from "../thunks/searchThunk.ts";
import { RootState } from "../../app/store.ts";
import { IFilm, IOneFilm } from "../../types";

interface SerialsNameState {
  films: IFilm[];
  filmInfo: IOneFilm;
  isLoadingSearch: boolean;
  isLoadingGetInfo: boolean;
  error: boolean;
}
const initialFilmInfo = {
  name: "",
  language: "",
  image: "",
  summary: "",
};

const initialState: SerialsNameState = {
  films: [],
  isLoadingSearch: false,
  filmInfo: initialFilmInfo,
  isLoadingGetInfo: false,
  error: false,
};

export const selectName = (state: RootState) => state.serialsName.films;
export const selectInfo = (state: RootState) => state.serialsName.filmInfo;
export const loadingSearch = (state: RootState) =>
  state.serialsName.isLoadingSearch;
export const loadingGeiInfo = (state: RootState) =>
  state.serialsName.isLoadingGetInfo;

export const serialsNameSlice = createSlice({
  name: "serialsName",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(onSearch.pending, (state) => {
        state.isLoadingSearch = true;
        state.error = false;
      })
      .addCase(onSearch.fulfilled, (state, action) => {
        state.isLoadingSearch = false;
        if (action.payload) {
          state.films = action.payload;
        }
      })

      .addCase(onSearch.rejected, (state) => {
        state.isLoadingSearch = false;
        state.error = true;
      })
      .addCase(getInfoOneFilm.pending, (state) => {
        state.isLoadingGetInfo = true;
        state.error = false;
      })
      .addCase(getInfoOneFilm.fulfilled, (state, action) => {
        state.isLoadingGetInfo = false;
        if (action.payload) {
          state.films = [];
          state.filmInfo = action.payload;
        }
      })
      .addCase(getInfoOneFilm.rejected, (state) => {
        state.isLoadingGetInfo = false;
        state.error = true;
      });
  },
});

export const serialsNameReducer = serialsNameSlice.reducer;

export const {} = serialsNameSlice.actions;
