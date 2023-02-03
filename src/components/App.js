import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Logement from '../pages/logement/Logement';
import ErrorPage from '../pages/Erreur';
import Apropos from '../pages/Apropos'
import '../styles/App.css'
import Layout from '../pages/Layout';

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="fiche_logement/:productId" element={<Logement />} />
          <Route path="Apropos" element={<Apropos />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
