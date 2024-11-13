import { createSlice,} from '@reduxjs/toolkit';
import { getInfoOneFilm, onSearch } from '../thunks/searchThunk.ts';
import { RootState } from '../../app/store.ts';
import { IFilm, IOneFilm } from '../../types';

interface SerialsNameState {
  films: IFilm[];
  filmInfo: IOneFilm;
  isLoadingSearch: boolean;
  isLoadingGetInfo: boolean;
  error: boolean;
}

const initialState: SerialsNameState  = {
  films:[],
  isLoadingSearch: false,
  filmInfo: {
    name: '',
    language:'',
    image:'',
    summary:''
  },
  isLoadingGetInfo: false,
  error: false,
};

export const selectName = (state: RootState) => state.serialsName.films;
export const selectInfo = (state: RootState) => state.serialsName.filmInfo;

export const serialsNameSlice = createSlice({
  name: "serialsName",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(onSearch.pending, (state) => {
        state.isLoadingSearch = true;
        state.error = false;
      })
      .addCase(onSearch.fulfilled, (state, action ) => {
        state.isLoadingSearch = false;
        if(action.payload){ const responseNew = action.payload;

          const array: IFilm[] = [];
          for (let i = 0; i < responseNew.length; i++) {
            array.push({name: responseNew[i].show.name, id:responseNew[i].show.id});
          }
          state.films = array;}

      })

      .addCase(onSearch.rejected, (state) => {
        state.isLoadingSearch= false;
        state.error = true;
      })
  .addCase(getInfoOneFilm.pending, (state) => {
      state.isLoadingGetInfo = true;
      state.error = false;
    })
      .addCase(getInfoOneFilm.fulfilled, (state, action ) => {
        state.isLoadingGetInfo = false;
        console.log(action.payload);
        if(action.payload) {
          const responseNew = action.payload;
          state.filmInfo = {
  name: responseNew.name ,
  language: responseNew.language,
  image:responseNew.image.medium,
  summary: responseNew.summary
};


         }

      })
      .addCase(getInfoOneFilm.rejected, (state) => {
        state. isLoadingGetInfo = false;
        state.error = true;
      });
  },
});

export const serialsNameReducer = serialsNameSlice.reducer;

export const {} = serialsNameSlice.actions;