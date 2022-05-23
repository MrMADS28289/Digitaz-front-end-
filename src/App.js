import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Shared/NavBar';
import NotFound from './Pages/Shared/NotFound';
import { themeChange } from 'theme-change'
import { useEffect } from 'react';
import PublicRoute from './Pages/Routes/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import RequerAuth from './Pages/RequerAuth/RequerAuth';
import PrivateRoute from './Pages/Routes/PrivateRoute';

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
          {
            PrivateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={
                <RequerAuth>
                  <Component />
                </RequerAuth>
              }></Route>
            ))
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </NavBar>
    </HelmetProvider>
  );
}

export default App;
