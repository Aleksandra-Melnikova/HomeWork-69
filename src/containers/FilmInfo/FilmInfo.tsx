import { useAppSelector } from '../../app/hooks.ts';
import { selectInfo } from '../../store/slices/selialsNameSlices.ts';


const FilmInfo = () => {
  const filmInfo = useAppSelector(selectInfo);
  console.log(filmInfo);
  return (
    <>
      <img className='float-start me-3 mt-4 mb-2 w-25' src={filmInfo.image} alt={filmInfo.name}/>
      <h2 className='fs-2 mt-2 pt-4'>{filmInfo.name}</h2>
      <span className='fs-4 d-block my-3'>Language:<strong> {filmInfo.language}</strong></span>
      {/*<p className={'fs-5'}>{filmInfo.summary}</p>*/}
      <div dangerouslySetInnerHTML={{__html: filmInfo.summary}}/>
    </>
  );
};

export default FilmInfo;