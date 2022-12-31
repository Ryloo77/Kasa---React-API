import {Routes, Route} from 'react-router-dom';
import Home from'../pages/Home';
import Logement from '../pages/Logement';
import '../styles/App.css'

function App() {
  return (
    <div className='App'>  
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="fiche_logement/:productId" element={ <Logement/> } />
    </Routes>
    </div>
  

  );
}

export default App;
