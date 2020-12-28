import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <div className="App">
     <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame"  element={<Repo />}/>
      </Routes>

      {/* <Footer /> */}

      <GlobalStyles/>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
