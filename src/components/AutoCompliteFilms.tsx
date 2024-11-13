import {  useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { getInfoOneFilm, onSearch } from '../store/thunks/searchThunk.ts';
import { selectName } from '../store/slices/selialsNameSlices.ts';
import { useNavigate } from 'react-router-dom';


const AutoCompleteFilms = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();


  const filmsList = useAppSelector(selectName);

  console.log(filmsList);
  useEffect(() => {
    dispatch (onSearch(inputValue));
  }, [dispatch, inputValue]);
  const navigate = useNavigate();

  const onClickFilm = (id:number)=>{
    navigate(`/show/:${id}`);
    dispatch (getInfoOneFilm(id));
  };

  return (
    <>
    <div className="form-group my-4 d-flex justify-content-end align-items-center position-relative">
        <label
          className="fs-4 mt-4 d-block col-3"
          htmlFor="title"
        >
         Search for TV Show:
        </label>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="search"
          id="title"
          className="form-control col-6 w-50 mt-3"
        />
      </div>
      <div className="position-absolute top-50">
        {filmsList.length>0?<> {filmsList.map(film =>{
          return <a className='d-block' onClick={()=>onClickFilm(film.id)} key={film.id}>{film.name}</a>;
    })}</>:null}
     </div>
    </>
      );
      };

      export default AutoCompleteFilms;
