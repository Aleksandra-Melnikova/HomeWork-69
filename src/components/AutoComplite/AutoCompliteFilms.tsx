import  {  useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';

import { loadingSearch, selectName } from '../../store/slices/selialsNameSlices.ts';
import { useNavigate } from 'react-router-dom';
import { getInfoOneFilm, onSearch } from '../../store/thunks/searchThunk.ts';
import Spinner from '../UI/Spinner/Spinner.tsx';



const AutoCompleteFilms = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const filmsList = useAppSelector(selectName);
  const searchLoading = useAppSelector(loadingSearch);

  useEffect(() => {
    dispatch (onSearch(inputValue));
  }, [dispatch, inputValue]);
  const navigate = useNavigate();

  const onClickFilm = (id:number)=>{
    navigate(`/show/:${id}`);
    dispatch (getInfoOneFilm(id));
    setInputValue('');
  };

  return (
    <>
      <div className="form-group my-4 d-flex justify-content-end align-items-start">
        <label
          className="fs-4 mt-4 d-block col-3 "
          htmlFor="title"
        >
          Search for TV Show:
        </label>
        <div className='position-relative col-7'>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="search"
          id="title"
          className="form-control w-75  mt-3"
        />
          {searchLoading ? (<Spinner/>) : <div className="film-list">
            {filmsList.length > 0 ? <> {filmsList.map(film => {
              return <a className='d-block' onClick={() => onClickFilm(film.id)} key={film.id}>{film.name}</a>;
            })}</> : null}
          </div>}

        </div>
      </div>

    </>
  );
};

export default AutoCompleteFilms;
