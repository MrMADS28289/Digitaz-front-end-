import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar';

function App() {
  return (
    <HelmetProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
