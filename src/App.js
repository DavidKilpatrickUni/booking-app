import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar';
import SiteFooter from './components/SiteFooter';
import SubscribeBar from './components/SubscribeBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/homePage/Home';
import Locations from './pages/locationsPage/Locations';
import Location from './pages/locationPage/Location';
import Stays from './pages/staysPage/Stays';
import Search from './pages/searchPage/Search';
import Stay from './pages/stayPage/Stay';

function App() {
  return (
    <>
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/:location' element={<Location />} />

          <Route path='/stays' element={<Stays />} />

          <Route path='/search' element={<Search />} />

          <Route path='/:location/:stays/:place' element={<Stay />} />

          <Route path='/about' element={<h1>about page</h1>} />
        </Routes>
        <SubscribeBar />
        <SiteFooter />
      </BrowserRouter>

    </>
  );
}

export default App;
