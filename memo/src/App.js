import './App.css';
import Home from './pages/Home'
import React , { useState, useEffect }from 'react';
import MessagePage from './pages/MessagePage.js';
import ProfilPage from './pages/Profil.jsx';
import SearchPage from './pages/SearchPage.jsx';
import SettingPage from './pages/SettingPage.jsx';
import Loading from './pages/Loading.jsx';
import Connexion from './pages/Connexion.jsx';
import Register from './pages/Register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez un chargement asynchrone (par exemple, en utilisant setTimeout)
    const simulateAsyncLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Temps de chargement simulé de 2 secondes
    };

    simulateAsyncLoad();
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/Setting" element={<SettingPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Message" element={<MessagePage />} />
          <Route path="/Profil" element={<ProfilPage />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
export default App;
