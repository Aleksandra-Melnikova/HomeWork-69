import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API, IFilm, IOneFilm, IOneFilmFromApi } from "../../types";

export const onSearch = createAsyncThunk<IFilm[] | undefined, string>(
  "serialsName/onSubmit",
  async (_arg) => {
    if (_arg) {
      const res: { data: API[] | null } = await axios<API[] | null>(
        `http://api.tvmaze.com/search/shows?q=${_arg}`,
      );
      if (res.data) {
        const responseNew = res.data;
        const array: IFilm[] = [];
        if (responseNew)
          for (let i = 0; i < responseNew.length; i++) {
            array.push({
              name: responseNew[i].show.name,
              id: responseNew[i].show.id,
            });
          }
        return array;
      }
      return [];
    }
  },
);

export const getInfoOneFilm = createAsyncThunk<
  | IOneFilm
  | {
      name: "";
      language: "";
      image: "";
      summary: "";
    },
  number
>("serialsName/getInfoOneFilm", async (_arg) => {
  if (_arg) {
    const res: { data: IOneFilmFromApi } = await axios<IOneFilmFromApi>(
      `http://api.tvmaze.com/shows/${_arg}`,
    );
    return {
      name: res.data.name,
      language: res.data.language,
      image: res.data.image.original,
      summary: res.data.summary,
    };
  }
  return {
    name: "",
    language: "",
    image: "",
    summary: "",
  };
});
