import { useAppSelector } from "../../app/hooks.ts";
import {
  loadingGeiInfo,
  selectInfo,
} from "../../store/slices/selialsNameSlices.ts";
import AutoCompleteFilms from "../../components/AutoComplite/AutoCompliteFilms.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const FilmInfo = () => {
  const filmInfo = useAppSelector(selectInfo);
  const getInfoLoading = useAppSelector(loadingGeiInfo);
  return (
    <>
      <AutoCompleteFilms />
      {getInfoLoading ? (
        <div className="mx-auto w-25">
          <Spinner />
        </div>
      ) : (
        <div>
          <img
            className="float-start me-3 mt-4 mb-2 w-25"
            src={filmInfo.image}
            alt={filmInfo.name}
          />
          <h2 className="fs-2 mt-2 pt-4">{filmInfo.name}</h2>
          <span className="fs-4 d-block my-3">
            <strong> {filmInfo.language}</strong>
          </span>
          <div dangerouslySetInnerHTML={{ __html: filmInfo.summary }} />
        </div>
      )}
    </>
  );
};

export default FilmInfo;
