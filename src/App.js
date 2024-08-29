import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/loginPage';
import TripPage from './pages/tripPage/tripPage';
import TripDetailPage from './pages/tripPage/singleTripPage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import DestinationPage from './pages/destination/destination';
import Rt from './pages/rt';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/trips" element={<TripPage />} />
      <Route path="/trips/:id" element={<TripDetailPage />} />
      <Route path ="/about" element = {<About />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/" element={<Rt />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
