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
import Attraction from './pages/attractionPage/Attraction';
import Dining from './pages/diningPage/Dining';
import Attractions from './pages/attractionsPage/Attractions';
import Dinings from './pages/diningsPage/Dinings';
import CreateAccount from './pages/createAccountPage/CreateAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/stays' element={<Stays />} />
          <Route path='/attractions' element={<Attractions />} />
          <Route path='/dinings' element={<Dinings />} />
          <Route path='/search' element={<Search />} />
          <Route path='/search/*' element={<Search />} />

          {/* <Route path='/locations/:location' element={<Location />} />
          <Route path='/locations/:location/:id' element={<Location />} /> */}

          <Route path='/:location/location/:place/:id' element={<Location />} />

          {<Route path='/:location/stay/:place/:id' element={<Stay />} />}

          <Route path='/:location/attraction/:place/:id' element={<Attraction />} />

          <Route path='/:location/dining/:place/:id' element={<Dining />} />


          {/* <Route path='/stay/:name/:id' element={<Stay />} />
          {<Route path='/:location/stay/:place' element={<Stay />} />}
          <Route path='/:location/stay/:place/:id' element={<Stay />} />
          <Route path='/:location/dining/:place' element={<Dining />} />  */}



          <Route path='/createAccount' element={<CreateAccount />} />

          <Route path='/about' element={<h1>about page</h1>} />
        </Routes>
        <SubscribeBar />
        <SiteFooter />
      </BrowserRouter>

    </>
  );
}

export default App;
