import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Shared/NavBar';
import NotFound from './Pages/Shared/NotFound';
import { themeChange } from 'theme-change'
import { useEffect } from 'react';
import PublicRoute from './Pages/Routes/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <HelmetProvider>
      <NavBar >
        <Routes>
          {
            PublicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </NavBar>
    </HelmetProvider>
  );
}

export default App;
