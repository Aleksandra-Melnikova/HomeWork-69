import { useAppSelector } from '../../app/hooks.ts';
import { selectInfo } from '../../store/slices/selialsNameSlices.ts';


const FilmInfo = () => {
  const filmInfo = useAppSelector(selectInfo);
  console.log(filmInfo);
  return (
    <div className='row'>
      <img className='col-4' src={filmInfo.image} alt={filmInfo.name}/>
      <div className='col-8'><h2 className='fs-2'>{filmInfo.name}</h2>
        <span>Language:<strong> {filmInfo.language}</strong></span>
        <p>{filmInfo.summary}</p></div>
    </div>
  );
};

export default FilmInfo;