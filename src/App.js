import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar';
import NotFound from './Pages/Shared/NotFound';
import { themeChange } from 'theme-change'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <HelmetProvider>
      <NavBar >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </NavBar>
    </HelmetProvider>
  );
}

export default App;
