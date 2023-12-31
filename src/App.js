import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import RegistrationSuccess from './RegistrationSuccess'; // Import the RegistrationSuccess component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Admin from './Admin';
import Cart from './Cart';
import BookDetails from './Bookdetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={BookDetails} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} /> {/* Add the registration success route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
