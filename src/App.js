import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Categorypage from './Pages/Categorypage';
import Productpage from './Pages/Productpage';
import Storepage from './Pages/Storepage';
import Cartpage from './Pages/Cartpage';
import Billingpage from './Pages/Billingpage';
import Confirmationpage from './Pages/Confirmationpage';
import Login from './Components/Login'; // Import Login component
import Signup from './Components/SignUp'; // Import Signup component
import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop component

function App() {
  return (
    <div className="bg-radial-white-black w-full overflow-hidden">
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category" element={<Categorypage />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/store" element={<Storepage /> } />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/billing" element={<Billingpage />} />
          <Route path="/confirmation" element={<Confirmationpage />} />
          <Route path="/login" element={<Login />} />
      
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;