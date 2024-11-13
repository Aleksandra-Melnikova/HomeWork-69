import "./App.css";
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import FilmInfo from './containers/FilmInfo/FilmInfo.tsx';
import Layout from './components/Layout/Layout.tsx';

function App() {
  const {id} = useParams();
  return (
    <div>
      <Layout> <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/show/:${id}`}
          element={<FilmInfo />}
        />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes></Layout>


    </div>
  );
};

export default App;
