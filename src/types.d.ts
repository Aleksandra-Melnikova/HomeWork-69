export interface API {
  show: {name: string, id: number};
}

export interface IFilm {
  name: string, id: number
}

export interface IOneFilmFromApi {
  image:{medium:string};
  language:string;
  name: string;
  summary:string;

}

export interface IOneFilm {
  image:string;
  language:string;
  name: string;
  summary:string;
}